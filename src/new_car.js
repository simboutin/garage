import displayCars from './display_cars';
// other syntax if not default export => import { displayCars } from './display_cars';

// ALTERNATIVE to insert the created car
// import { addCar } from './display_cars';

const brandInput = document.getElementById('brand');
const form = document.getElementById('new-car');

const focusFirstInput = () => {
  brandInput.focus();
};

const postNewCar = (car, urlWagonGarage) => {
  fetch(urlWagonGarage, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  })
    .then(response => response.json())
    .then(() => {
      displayCars(urlWagonGarage); // => to reset the cars list container and fetch all cars

      // ALTERNATIVE to insert the created car
      // addCar(car); // => to append just the last created car

      form.reset(); // => to reset the form
      focusFirstInput(); // => to focus on the first input on the form
    });
};

const createNewCar = (urlWagonGarage) => {
  focusFirstInput();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const car = {
      brand: brandInput.value,
      model: document.getElementById('model').value,
      owner: document.getElementById('owner').value,
      plate: document.getElementById('plate').value
    };
    postNewCar(car, urlWagonGarage);
  });
};

export default createNewCar; // => to make es-lint happy when single export ;)
// other export syntax => export { createNewCar };
