//1

// let messageCount = 0;

// function showMessage() {
//   messageCount++;
//   console.log(`Повідомлення ${messageCount}`);
  
//   if (messageCount === 5) {
//     clearInterval(intervalId);
//   }
// }

// const intervalId = setInterval(showMessage, 1000);


//2

// const boxes = document.querySelectorAll('.box');
// let size = 50;
// let direction = 1;

// function animate() {
//   size += direction;

//   if (size <= 0 || size >= 100) {
//     direction *= -1;
//   }

//   boxes.forEach((box) => {
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.top = `${size + 50}px`;
//     box.style.left = `${size + 50}px`;
//   });
// }

// setInterval(animate, 50);


// 3

// document.addEventListener("DOMContentLoaded", () => {
//     let score = 0;
//     let clickCount = 0;
    
//     const targets = document.querySelectorAll(".target");
    
//     const updateScoreDisplay = () => {
//       const scoreDisplay = document.getElementById("score");
//       scoreDisplay.textContent = score;
//     };
    
//     const handleClick = () => {
//       score++;
//       updateScoreDisplay();
//     };
    
//     targets.forEach(target => {
//       target.addEventListener("click", handleClick);
//     });
    
//     const resetGame = () => {
//       clickCount = 0;
//       score = 0;
//       updateScoreDisplay();
//     };
    
//     const endGame = () => {
//       resetGame();
//       alert(`Game Over! Your final score: ${score}`);
//     };
    
//     const gameDuration = 30000;
    
//     let gameTimer = setInterval(() => {
//       clickCount++;
//       if (clickCount >= gameDuration / 1000) {
//         clearInterval(gameTimer);
//         endGame();
//       }
//     }, 1000);
//   });
  

// 4

function startTimer() {
    const timeInput = document.getElementById('timeInput');
    const timeInSeconds = parseInt(timeInput.value, 10);

    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
      alert('Будь ласка, введіть коректний час (більше 0 секунд).');
      return;
    }

    setTimeout(() => {
      alert('Таймер завершився!');
    }, timeInSeconds * 1000);
  };