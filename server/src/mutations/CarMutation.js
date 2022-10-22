import { find, remove } from "lodash";
import { cars, persons } from "../data";

export const CarMutations = {
  addCar: (root, args) => {
    const newCar = {
      id: args.id,
      model: args.model,
      make: args.make,
      year: args.year,
      price: args.price,
      personId: args.personId,
    };
    newCar.person = find(persons, { id: args.personId });
    if (!newCar.person) {
      throw Error(`Person with id ${args.personId} not found!`);
    }
    cars.push(newCar);
    return newCar;
  },
  updateCar: (root, args) => {
    const car = find(cars, { id: args.id });
    if (!car) {
      throw new Error(`Couldn't find car with id ${args.id}`);
    }
    car.model = args.model;
    car.make = args.make;
    car.year = args.year;
    car.price = args.price;
    car.personId = args.personId;
    car.person = find(persons, { id: args.personId });
    return car;
  },
  removeCar: (root, args) => {
    const removedCar = find(cars, { id: args.id });
    if (!removedCar) {
      throw new Error(`Couldn't find car with id ${args.id}`);
    }
    remove(cars, (c) => {
      return c.id === removedCar.id;
    });
    return removedCar;
  },
};
