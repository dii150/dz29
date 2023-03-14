const car = {
    name: 'Audi',
    model: 'Q7',
    year: 2020,
    averageSpeed: 150,
    fuelCapacity: 100,
    fuelConsumption: 10,
    drivers: ['Vitalii', 'Diana', 'Anna'],
    getInfo() {
        console.log('------------------------------');
        console.log('Info about this car:');
        console.log(car);
        console.log('------------------------------');
    },
    addDriver(driverName) {
        this.drivers.push(driverName);
        console.log('We`ve just added a new driver: ' + driverName);
        console.log('------------------------------');
        console.log('Checking a new list of drivers:');
        console.log(car.drivers);
        console.log('------------------------------');
    },
    isDriverInList(driverName) {
        for (let i = 0; i < this.drivers.length; i++) {
            if (this.drivers[i] === driverName) {
                console.log(driverName + ' is in list!');
                console.log('------------------------------');
                return;
            }
        }
        console.log(driverName + '`s not in list((((');
        console.log('------------------------------');
    },
    calculateTravel(distance) {
        let travelledDistance = 0;
        let travelTime = 0;
        let fuelNeeded = 0;
        let restCounter = 0;

        while (travelledDistance < distance) {
            let travelChunk = Math.min(distance - travelledDistance, 4 * this.averageSpeed * (1 - restCounter / 4));
            travelledDistance += travelChunk;
            travelTime += travelChunk / this.averageSpeed;

            fuelNeeded += (travelChunk / 100) * this.fuelConsumption;

            if (travelledDistance < distance) {
                restCounter++;
                if (restCounter === 4) {
                    travelTime += 1;
                    restCounter = 0;
                }
            }
        }

        console.log("For a distance of " + distance + " km, the travel time is " + travelTime.toFixed(2) + " hours and the fuel needed is " + fuelNeeded + " liters.");
        console.log('------------------------------');
    }

}

car.getInfo();
car.addDriver('Nika');
car.isDriverInList('Diana');
car.isDriverInList('Oleg');
car.calculateTravel(1687);