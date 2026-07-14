const { io } = require("socket.io-client");
const socket = io("http://localhost:3001");

let room = "TESTM";

socket.on("connect", () => {
  socket.emit("join_room", { roomCode: room, character: { name: "Bob", role: "Técnico" } });
});

socket.on("room_state_update", (state) => {
  console.log("Phase:", state.gameState.phase);
  if (state.gameState.phase === "lobby") {
    console.log("Starting game...");
    socket.emit("start_game", room);
  }
  if (state.gameState.phase === "check_in") {
    console.log("Started check_in");
    console.log("Departments keys:", Object.keys(state.gameState.departments));
    console.log("Mantenimiento count:", state.gameState.departments["Mantenimiento"]?.length);
    process.exit(0);
  }
});
