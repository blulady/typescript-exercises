var car = {
    brand: "Toyota",
    speed: 120,
    accelerate: function () {
        console.log("The ".concat(this.brand, " is accelerating"));
    },
    break: function () {
        console.log("The ".concat(this.brand, " is breaking."));
    }
};
car.accelerate();
car.break();
