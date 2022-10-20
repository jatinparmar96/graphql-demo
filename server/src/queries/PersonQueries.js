import {cars, persons} from "../data";
import {find} from "lodash";


const PersonQueries = {
    persons: () => {
        return persons.map(person => ({...person, cars: cars.filter(car => car.personId === person.id)}))
    },
    person: (root, args) => {
        const person = find(persons, {id: args.id})
        person.cars = cars.filter(car => car.personId === person.id);
        return person;
    },
    cars: () => {
        return cars.map(car => ({...car, person: find(persons, {id: car.personId})}))
    }
}
export default PersonQueries;