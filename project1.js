 const buttons = document.querySelectorAll('.choice-button');
    const resultDiv = document.querySelector('.result');
    const userScoreSpan = document.getElementById('user-score');
    const computerScoreSpan = document.getElementById('computer-score');

    const choices = ['rock', 'paper', 'scissors'];
    let userScore = 0;
    let computerScore = 0;

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const userChoice = button.getAttribute('data-choice');
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        const winner = getWinner(userChoice, computerChoice);
        displayResult(userChoice, computerChoice, winner);
      });
    });

    function getWinner(user, computer) {
      if (user === computer) return 'draw';
      if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
      ) return 'user';
      return 'computer';
    }

    function displayResult(user, computer, winner) {
      let message = `You chose ${user}, computer chose ${computer}. `;

      if (winner === 'user') {
        userScore++;
        message += 'You win! 🎉';
      } else if (winner === 'computer') {
        computerScore++;
        message += 'You lose. 😢';
      } else {
        message += "It's a draw. 🤝";
      }

      resultDiv.textContent = message;
      userScoreSpan.textContent = userScore;
      computerScoreSpan.textContent = computerScore;
    }