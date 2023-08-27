class AddDeets extends VehicleModule {
    constructor(maxPassengers, passenger, numberOfWheels, maxSpeed, fuel, scheduleService) {
        super(make, model, year, colour, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true;
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }
    scheduleService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true;
            console.log("No maintenance required");
        } else {
            this.scheduleService = false;
            console.log("Maintenance required");
        }
    }
}