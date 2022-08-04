const cardOne = document.querySelector('#card-img-one');
const cardTwo = document.querySelector('#card-img-two');
const cardThree = document.querySelector('#card-img-three');
const cardFour = document.querySelector('#card-img-four');
const cardFive = document.querySelector('#card-img-five');
const cardSix = document.querySelector('#card-img-six');
const cardSeven = document.querySelector('#card-img-seven');

cardOne.addEventListener('click', function (e) {
  const modalOne = document.createElement('div');

  modalOne.className = 'card-modal';
  document.body.appendChild(modalOne);
  const modalContentOne = document.createElement('div');
  modalContentOne.className = 'card-modal-content';
  modalContentOne.innerHTML = `
    <img src=./images/mars-demo/planet-logo.png />
    <h2>Quick Overview</h2>
    <h3>Make America Re-love Space (M.A.R.S.)</h3>
    <p>Built with <strong>HTML</strong>, <strong>Tailwind</strong>,
    <strong>JavaScript</strong>, <strong>JQuery</strong>,
    <strong>momentjs</strong>.</p>
    <p>This project utilizes 2 separate APIs, the MAAS2 API for the weather data, and also Nasa's very own Mars Rover Photo API. It also features a light mode and dark mode, and an overall modern design. This site serves as an informational hub for some of the more interesting data we can gather from mars, with the goal of making america re-love space!</p>
    `;
  modalOne.appendChild(modalContentOne);
  modalOne.addEventListener('click', function (e) {
    document.body.removeChild(modalOne);
  });
});

cardTwo.addEventListener('click', function (e) {
  const modalTwo = document.createElement('div');
  modalTwo.className = 'card-modal';
  document.body.appendChild(modalTwo);
  const modalContentTwo = document.createElement('div');
  modalContentTwo.className = 'card-modal-content';
  modalContentTwo.innerHTML = `
    <img src=./images/weather-demo/clouds-logo.png />
    <h2>Quick Overview</h2>
    <h3>Weather anywhere!</h3>
    <p>Built with <strong>HTML</strong>, <strong>Tailwind</strong>,
    <strong>JavaScript</strong>, <strong>OpenWeather API</strong>.</p>
    <p>This project uses the Openweather API to display weather for whatever city you search, it will display your recent searches, and the 5 day forecast for that city, you can click on any of the recent searches to see the weather for that city again.</p>
    `;
  modalTwo.appendChild(modalContentTwo);
  modalTwo.addEventListener('click', function (e) {
    document.body.removeChild(modalTwo);
  });
});

cardThree.addEventListener('click', function (e) {
  const modalThree = document.createElement('div');
  modalThree.className = 'card-modal';
  document.body.appendChild(modalThree);
  const modalContentThree = document.createElement('div');
  modalContentThree.className = 'card-modal-content';
  modalContentThree.innerHTML = `
    <img src=./images/quiz-demo/quiz-logo.png />
    <h2>Quick Overview</h2>
    <h3>The JavaScript Quiz</h3>
    <p>Built with <strong>HTML</strong>, <strong>CSS</strong>,
    <strong>JavaScript</strong>.</p>
    <p>This project will keep track of your score and store that so even in the event of a page refresh or you close and open, you score will remain. If you get the wrong answers the time will deduct 20 second for every wrong answer. It utilizes arrays to store the question, possible answers and correct answers. I learned a lot with project including DOM manipulation, looping through arrays only when an event had ocurred, long story short, it was rad!</p>
    `;
  modalThree.appendChild(modalContentThree);
  modalThree.addEventListener('click', function (e) {
    document.body.removeChild(modalThree);
  });
});

cardFour.addEventListener('click', function (e) {
  const modalFour = document.createElement('div');
  modalFour.className = 'card-modal';
  document.body.appendChild(modalFour);
  const modalContentThree = document.createElement('div');
  modalContentThree.className = 'card-modal-content';
  modalContentThree.innerHTML = `
    <img src=./images/planner-demo/planner-logo.png />
    <h2>Quick Overview</h2>
    <h3>Work Day Scheduler</h3>
    <p>Built with <strong>HTML</strong>, <strong>Tailwind</strong>,
    <strong>JavaScript</strong>, <strong>JQuery</strong>,
    <strong>momentjs</strong>.</p>
    <p>This project started off with some source code that I then added upon, the majority of the logic that makes it functional was written by me. I learned a lot with this project including how to use the momentjs library and using jquery DOM traversal. Bootstrap was another thing i was able to take advantage of and I learned a lot about CSS frameworks in general.</p>
    `;
  modalFour.appendChild(modalContentThree);
  modalFour.addEventListener('click', function (e) {
    document.body.removeChild(modalFour);
  });
});
