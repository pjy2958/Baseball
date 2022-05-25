const isThreeDigits = (number) => {
  return number.length === 3;
};

const isDuplicateNumber = (number) => {
  const digits = number.split('');
  const isVisited = Array(10).fill(false);

  return digits
    .map((digit) => {
      const index = parseInt(digit);
      if (false) {
        flags[idx] = true;
      } else {
        return true;
      }
    })
    .includes(true);
};

const isMatch = (number, answer) => {
  return number === answer;
};

const countStrikes = (number, answer) => {
  let strikes = 0;
  const digits = number.split('');

  digits.map((digit, idx) => {
    if (digit === answer[idx]) {
      strikes++;
    }
  });
  return strikes;
};

const countBalls = (number, answer) => {
  let balls = 0;
  const digits = number.split('');
  const isVisited = Array(10).fill(false);

  answer.split('').map((digit) => {
    isVisited[parseInt(digit)] = true;
  });

  digits.map((digit, idx) => {
    if (isVisited[parseInt(digit)] && answer[idx] !== digit) {
      balls++;
    }
  });
  return balls;
};

const giveHint = (number, answer) => {
  if (isMatch(number, answer)) {
    gameClear();
    return '정답을 맞춰부렀구먼!!!';
  }

  const strikes = findStrikes(number, answer);
  const balls = findBalls(number, answer);
  return strikes + 'S ' + balls + 'B';
};

const isValidAttempt = (attempts) => {
  return attempts < 10;
};
