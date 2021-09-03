import displayCars from './display_cars';
import createNewCar from './new_car';
// other syntax if not default export
// import { displayCars } from './display_cars'; // => ALTERNATIVE to insert the created car
// import { createNewCar } from './new_car';

const kocottesGarage = 'https://wagon-garage-api.herokuapp.com/leskocottes/cars';

displayCars(kocottesGarage);
createNewCar(kocottesGarage);
