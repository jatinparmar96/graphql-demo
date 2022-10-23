import { DeleteOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { GET_PERSONS, REMOVE_PERSON } from "../../queries";

const RemovePerson = ({ id }) => {
  const [removePerson] = useMutation(REMOVE_PERSON);

  const handleButtonClick = () => {
    removePerson({
      variables: {
        id,
      },
      update: (cache, { data: { removePerson } }) => {
        const data = cache.readQuery({ query: GET_PERSONS });
        cache.writeQuery({
          query: GET_PERSONS,
          data: {
            persons: data.persons.filter(
              (person) => person.id !== removePerson.id
            ),
          },
        });
      },
    });
  };

  return (
    <DeleteOutlined
      key="delete"
      onClick={handleButtonClick}
      style={{ color: "red" }}
    />
  );
};

export default RemovePerson;
