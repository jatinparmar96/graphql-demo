import { find, remove } from "lodash";
import { persons } from "../data";

export const PersonMutation = {
  addPerson: (root, args) => {
    const newContact = {
      id: args.id,
      firstName: args.firstName,
      lastName: args.lastName,
    };
    persons.push(newContact);
    return newContact;
  },
  updatePerson: (root, args) => {
    const contact = find(persons, { id: args.id });
    if (!contact) {
      throw new Error(`Couldn't find contact with id ${args.id}`);
    }
    contact.firstName = args.firstName;
    contact.lastName = args.lastName;
    return contact;
  },
  removePerson: (root, args) => {
    const removedContact = find(persons, { id: args.id });
    if (!removedContact) {
      throw new Error(`Couldn't find contact with id ${args.id}`);
    }
    remove(persons, (c) => {
      return c.id === removedContact.id;
    });
    return removedContact;
  },
};
