
interface Vehicle {
    brand: string;
    speed: number;
    
    accelerate(): void;
    break(): void;
}

const car: Vehicle = {
    brand: "Toyota",
    speed: 120,
    accelerate(): void {
        console.log(`The ${this.brand} is accelerating`);
    },
    break(): void{
        console.log(`The ${this.brand} is breaking.`);
    }
    }

car.accelerate();
car.break();