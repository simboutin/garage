const carsList = document.querySelector('.cars-list');

const addCar = (car) => {
  const carTag = `<div class="car">
    <div class="car-image">
      <img src="http://loremflickr.com/280/280/${car.brand}%20${car.model}" />
    </div>
    <div class="car-info">
      <h4>${car.brand} ${car.model}</h4>
      <p><strong>Owner:</strong> ${car.owner}</p>
      <p><strong>Plate:</strong> ${car.plate}</p>
    </div>
  </div>`;
  carsList.insertAdjacentHTML('beforeend', carTag);
};

const displayCars = (urlWagonGarage) => {
  carsList.innerHTML = '';
  fetch(urlWagonGarage)
    .then(response => response.json())
    .then((data) => {
      data.forEach(addCar);
    });
};

export default displayCars; // => to make es-lint happy when single export ;)
// other export syntax => export { displayCars };

// ALTERNATIVE to insert the created car
// export { addCar, displayCars };
