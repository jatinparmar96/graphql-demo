import { DeleteOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { GET_PERSONS, REMOVE_CAR } from "../../queries";

const RemoveCar = ({ id }) => {
  const [removeCar] = useMutation(REMOVE_CAR);

  const handleButtonClick = () => {
    removeCar({
      variables: {
        id,
      },
      update: (cache, { data: { removeCar } }) => {
        const data = cache.readQuery({ query: GET_PERSONS });

        const newData = data.persons.map((person) => {
          return {
            ...person,
            cars: person.cars.filter((car) => car.id !== removeCar.id),
          };
        });
        cache.writeQuery({
          query: GET_PERSONS,
          data: {
            persons: newData,
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
export default RemoveCar;
