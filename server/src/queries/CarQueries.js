import {cars, persons} from "../data";
import {find} from "lodash";

const CarQueries = {
    cars: () => {
        return cars.map(car => ({...car, person: find(persons, {id: car.personId})}))
    },
    car: (root, args) => {
        const car = find(cars, {id: args.id})
        car.person = persons.find(person => person.id === car.personId);
        return car;
    },
}
export  default CarQueries;