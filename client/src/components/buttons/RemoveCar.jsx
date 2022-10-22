import { DeleteOutlined } from "@ant-design/icons";

const RemoveCar = ({ id }) => {
  const handleButtonClick = () => {};
  return (
    <DeleteOutlined
      key="delete"
      onClick={handleButtonClick}
      style={{ color: "red" }}
    />
  );
};
export default RemoveCar;
