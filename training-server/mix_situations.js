const fs = require('fs');

const cleaned = require('./situations_cleaned.js');

const mixed = cleaned.map(sit => {
  if (sit.department === 'Cultura y Valores' || sit.isOpenEnded) {
    sit.isAudioResponse = true;
    sit.isOpenEnded = true;
    sit.options = [];
    return sit;
  }

  // 30% chance to be an open-ended / audio response question
  const isAudio = Math.random() < 0.3;
  if (isAudio) {
    sit.isAudioResponse = true;
    sit.isOpenEnded = false;
    sit.options = [];
  } else {
    sit.isAudioResponse = false;
    sit.isOpenEnded = false;
  }
  return sit;
});

const content = `const situations = ${JSON.stringify(mixed, null, 2)};

// Helper: Fisher-Yates Shuffle
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Shuffle options for all situations globally
situations.forEach(sit => {
  if (sit.options && sit.options.length > 0) {
    shuffleArray(sit.options);
  }
});

module.exports = situations;
`;

fs.writeFileSync('situations_mixed.js', content, 'utf8');
console.log("Mixed situations generated successfully.");
