import { gql } from "@apollo/client";

export const GET_PERSONS = gql`
  {
    persons {
      id
      firstName
      lastName
      cars {
        id
        model
        make
        year
        price
        personId
      }
    }
  }
`;

export const ADD_PERSON = gql`
  mutation AddPerson($id: String!, $firstName: String!, $lastName: String!) {
    addPerson(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;
export const GET_CARS = gql`
  query Cars {
    cars {
      id
      model
      make
      year
      price
      personId
    }
  }
`;

export const ADD_CAR = gql`
  mutation AddCar(
    $id: String!
    $personId: String!
    $model: String
    $make: String
    $year: Int
    $price: Float
  ) {
    addCar(
      id: $id
      personId: $personId
      model: $model
      make: $make
      year: $year
      price: $price
    ) {
      id
      model
      make
      year
      price
      personId
    }
  }
`;

export const UPDATE_PERSON = gql`
  mutation UpdatePerson($id: String!, $firstName: String, $lastName: String) {
    updatePerson(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;

export const REMOVE_PERSON = gql`
  mutation RemovePerson($id: String!) {
    removePerson(id: $id) {
      id
      firstName
      lastName
    }
  }
`;

export const UPDATE_CAR = gql`
  mutation UpdateCar(
    $id: String!
    $personId: String!
    $model: String
    $make: String
    $year: Int
    $price: Float
  ) {
    updateCar(
      id: $id
      personId: $personId
      model: $model
      make: $make
      year: $year
      price: $price
    ) {
      id
      model
      make
      year
      price
      personId
    }
  }
`;

export const REMOVE_CAR = gql`
  mutation RemoveCar($id: String) {
    removeCar(id: $id) {
      id
      model
      make
      year
      price
      personId
    }
  }
`;
