import { DeleteOutlined } from "@ant-design/icons";

const RemovePerson = () => {
  const handleButtonClick = () => {};
  return (
    <DeleteOutlined
      key="delete"
      onClick={handleButtonClick}
      style={{ color: "red" }}
    />
  );
};

export default RemovePerson;
