import { gql } from "@apollo/client";

export const GET_CONTACTS = gql`
  {
    persons {
      id
      firstName
      lastName
    }
  }
`;

export const ADD_CONTACT = gql`
  mutation AddPerson($id: String!, $firstName: String!, $lastName: String!) {
    addPerson(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;
