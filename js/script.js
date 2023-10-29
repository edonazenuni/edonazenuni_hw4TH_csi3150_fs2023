let usedCars = {
  data: [
    {
      year: 2018,
      make: "Toyota",
      model: "Camry",
      mileage: 30000,
      price: 18000,
      color: "Silver",
      gasMileage: "25 mpg city, 35 mpg highway",
      image: "media/images/Toyota.png",
    },
    {
      year: 2016,
      make: "Honda",
      model: "Civic",
      mileage: 45000,
      price: 14000,
      color: "White",
      gasMileage: "30 mpg city, 40 mpg highway",
      image: "media/images/Honda.png",
    },
    {
      year: 2017,
      make: "Ford",
      model: "Fusion",
      mileage: 35000,
      price: 16000,
      color: "Black",
      gasMileage: "28 mpg city, 38 mpg highway",
      image: "media/images/Ford.png",
    },
    {
      year: 2019,
      make: "Nissan",
      model: "Altima",
      mileage: 25000,
      price: 17000,
      color: "Blue",
      gasMileage: "27 mpg city, 36 mpg highway",
      image: "media/images/Nissan.png",
    },
    {
      year: 2015,
      make: "Chevrolet",
      model: "Malibu",
      mileage: 50000,
      price: 12000,
      color: "Red",
      gasMileage: "25 mpg city, 37 mpg highway",
      image: "media/images/Chevrolet.png",
    },
    {
      year: 2016,
      make: "Volkswagen",
      model: "Passat",
      mileage: 40000,
      price: 15000,
      color: "Gray",
      gasMileage: "29 mpg city, 40 mpg highway",
      image: "media/images/Volkswagen.png",
    },
    {
      year: 2020,
      make: "Hyundai",
      model: "Elantra",
      mileage: 22000,
      price: 16000,
      color: "Silver",
      gasMileage: "30 mpg city, 41 mpg highway",
      image: "media/images/Toyota.png",
    },
    {
      year: 2014,
      make: "Subaru",
      model: "Outback",
      mileage: 60000,
      price: 14000,
      color: "Green",
      gasMileage: "22 mpg city, 30 mpg highway",
      image: "media/images/Subaru.png",
    },
    {
      year: 2017,
      make: "Mazda",
      model: "CX-5",
      mileage: 32000,
      price: 19000,
      color: "Blue",
      gasMileage: "24 mpg city, 31 mpg highway",
      image: "media/images/Mazda.png",
    },
    {
      year: 2018,
      make: "Kia",
      model: "Sorento",
      mileage: 28000,
      price: 17000,
      color: "White",
      gasMileage: "22 mpg city, 29 mpg highway",
      image: "media/images/Kia.png",
    },
  ],
};

//buttons
function productFilter(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let productChosen = document.querySelectorAll(".productCards");

  productChosen.forEach((item) => {
    if (value === "All") {
      item.classList.remove("hide");
    } else {
      if (item.classList.contains(value)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    }
  });
}

//search function
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value.toLowerCase();
  let maxPrice = parseInt(document.getElementById("max-price").value);

  let productChosen = document.querySelectorAll(".productCards");

  productChosen.forEach((item, index) => {
    let car = usedCars.data[index];
    let carYear = car.year.toString();
    let carMake = car.make.toLowerCase();
    let carModel = car.model.toLowerCase();
    let carColor = car.color.toLowerCase();
    let carPrice = car.price;

    let shouldShow = true;

    if (
      (searchInput &&
        !(
          carMake.includes(searchInput) ||
          carModel.includes(searchInput) ||
          carYear.includes(searchInput) ||
          carColor.includes(searchInput)
        )) ||
      (!isNaN(maxPrice) && carPrice > maxPrice)
    ) {
      shouldShow = false;
    }

    let activeFilters = document.querySelectorAll(".active");
    activeFilters.forEach((filter) => {
      if (
        filter.innerText !== "All" &&
        !carMake.toLowerCase().includes(filter.innerText.toLowerCase())
      ) {
        shouldShow = false;
      }
    });

    if (shouldShow) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});

//car cards
for (let car of usedCars.data) {
  //car card creation
  let productCards = document.createElement("div");
  productCards.classList.add("productCards", car.make, "hide");

  //image container
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", car.image);
  imgContainer.appendChild(image);
  productCards.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");
  productCards.appendChild(container);

  //car names display
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = `${car.year} ${car.make} ${car.model}`.toUpperCase();
  container.appendChild(name);

  let details = document.createElement("p");
  details.innerHTML = `Mileage: ${car.mileage} miles <br> Price: $${car.price} <br> Color: ${car.color} <br> Gas Mileage: ${car.gasMileage}`;
  container.appendChild(details);

  document.getElementById("products").appendChild(productCards);
}

window.onload = () => {
  productFilter("All");
};
