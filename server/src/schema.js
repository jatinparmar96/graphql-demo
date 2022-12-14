import { gql } from "apollo-server-express";
import { people } from "./data.js";
import { CarMutations } from "./mutations/CarMutation";
import { PersonMutation } from "./mutations/PersonMutation";
import CarQueries from "./queries/CarQueries";
import PersonQueries from "./queries/PersonQueries";

let person_data = people;

const typeDefs = gql`
  type Person {
    id: String!
    firstName: String
    lastName: String
    cars: [Car!]
  }
  type Car {
    id: String!
    model: String
    make: String
    year: Int
    price: Float
    personId: String!
  }
  type Query {
    person(id: String!): Person
    persons: [Person]
    cars: [Car]
    car(id: String!): Car
  }
  type Mutation {
    addPerson(id: String!, firstName: String!, lastName: String!): Person
    updatePerson(id: String!, firstName: String, lastName: String): Person
    removePerson(id: String!): Person
    addCar(
      id: String!
      model: String
      make: String
      year: Int
      price: Float
      personId: String!
    ): Car
    updateCar(
      id: String!
      model: String
      make: String
      year: Int
      price: Float
      personId: String!
    ): Car
    removeCar(id: String): Car
  }
`;
const resolvers = {
  Query: {
    ...PersonQueries,
    ...CarQueries,
  },
  Mutation: {
    ...PersonMutation,
    ...CarMutations,
  },
};

export { typeDefs, resolvers };
