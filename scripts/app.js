const cardOne = document.querySelector('#card-img-one');

cardOne.addEventListener('click', function (e) {
  const modalOne = document.createElement('div');
  modalOne.id = 'card-modal-one';
  document.body.appendChild(modalOne);
  const modalContentOne = document.createElement('div');
  modalContentOne.id = 'card-modal-one-content';
  modalContentOne.innerHTML = `
    <img src=./images/apple-touch-icon.png />
    <h2>Quick Overview</h2>
    <h3>Make America Re-love Space (M.A.R.S.)</h3>
    <p>Built with <strong>HTML</strong>, <strong>Tailwind</strong>,
    <strong>JavaScript</strong>, <strong>JQuery</strong>,
    <strong>momentjs</strong>.</p>
    <p>This project utilizes the MAAS2 API for the weather data, and also Nasa's very own Mars Rover Photo API. It also features a light mode and dark mode, and an overall modern design. This site serves as an informational hub for some of the more interesting data we can gather from mars, with the goal of making america re-love space!</p>
    `;
  modalOne.appendChild(modalContentOne);
  modalOne.addEventListener('click', function (e) {
    document.body.removeChild(modalOne);
  });
});
