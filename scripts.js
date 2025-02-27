class Car {
    constructor(type, colors, description, price) {
        this.type = type;
        this.colors = colors;
        this.description = description;
        this.price = price;
    }
}

const cars = [
    new Car(
        "Ferrari",
        ["Red", "White", "Yellow"],
        "A luxurious and fast sports car.",
        250000
    ),
    new Car(
        "Lamborghini",
        ["Blue", "Green", "Yellow"],
        "An exotic and powerful sports car.",
        300000
    ),
    new Car(
        "Mustang",
        ["Black", "Silver", "White"],
        "A classic American muscle car.",
        55000
    ),
];

let selectedCar = cars[0];
let selectedColor = selectedCar.colors[0];
let selectedInsurance = "3-year";

document.addEventListener("DOMContentLoaded", () => {
    const carTypeSelect = document.getElementById("car-type");
    const carColorSelect = document.getElementById("car-color");
    const carImage = document.getElementById("car-image");
    const orderDescription = document.getElementById("order-description");

    function updateCarColorOptions() {
        carColorSelect.innerHTML = "";
        selectedCar.colors.forEach((color) => {
            const option = document.createElement("option");
            option.value = color;
            option.textContent = color;
            carColorSelect.appendChild(option);
        });
    }

    function updateCarDetails() {
        selectedColor = carColorSelect.value;
        const insuranceCost =
            selectedInsurance === "3-year" ? selectedCar.price * 0.3 : 0;
        carImage.src = `images/${selectedCar.type.toLowerCase()}_${selectedColor.toLowerCase()}.png`;
        orderDescription.value = `${selectedCar.description}\nCar Type: ${
            selectedCar.type
        }\nColor: ${selectedColor}\nBase Price: $${
            selectedCar.price
        }\nInsurance: $${insuranceCost}\nTotal: $${
            selectedCar.price + insuranceCost
        }`;
    }

    carTypeSelect.addEventListener("change", () => {
        selectedCar = cars.find((car) => car.type === carTypeSelect.value);
        updateCarColorOptions();
        carColorSelect.value = selectedCar.colors[0];
        updateCarDetails();
    });

    carColorSelect.addEventListener("change", () => {
        updateCarDetails();
    });

    document.getElementsByName("insurance").forEach((radio) => {
        radio.addEventListener("change", () => {
            selectedInsurance = document.querySelector(
                'input[name="insurance"]:checked'
            ).value;
            updateCarDetails();
        });
    });

    carTypeSelect.value = selectedCar.type;
    updateCarColorOptions();
    carColorSelect.value = selectedCar.colors[0];
    updateCarDetails();
});
