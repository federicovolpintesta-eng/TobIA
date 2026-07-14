const { io } = require('socket.io-client');
const socket = io('http://localhost:3001');

let roomCode = 'TEST1234';

socket.on('connect', () => {
  console.log('Connected');
  socket.emit('join_room', { 
    roomCode, 
    gameMode: 'Individual',
    character: { name: 'Test User', role: 'Recepcionista', avatar: '' }
  });
});

socket.on('room_state_update', (room) => {
  if (room.gameState.phase === 'lobby') {
    console.log('In Lobby, starting game...');
    socket.emit('start_game', roomCode);
  } else if (room.gameState.phase === 'check_in') {
    const list = room.gameState.departments['Front Desk'];
    const active = list.filter(c => !c.resolved);
    console.log(`Check In: ${active.length} pending situations`);
    if (active.length > 0) {
      const c = active[0];
      console.log('Resolving', c.title);
      socket.emit('resolve_situation', { 
        roomCode, 
        cardInstanceId: c.instanceId, 
        department: 'Front Desk', 
        optionId: 0 
      });
    } else {
      console.log('All resolved, ending turn');
      socket.emit('force_end_turn', roomCode);
    }
  } else if (room.gameState.phase === 'briefing') {
    console.log('Briefing! NPS:', room.gameState.nps);
    socket.emit('next_turn', roomCode);
  } else if (room.gameState.phase === 'game_over') {
    console.log('Game Over! Feedback count:', room.players[0].feedbacks.length);
    process.exit(0);
  }
});
