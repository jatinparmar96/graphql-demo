import { DeleteOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { GET_PERSONS, REMOVE_CAR } from "../../queries";

const RemoveCar = ({ id }) => {
  const [removeCar] = useMutation(REMOVE_CAR, {
    refetchQueries: [{ query: GET_PERSONS }],
  });

  const handleButtonClick = () => {
    removeCar({
      variables: {
        id,
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
