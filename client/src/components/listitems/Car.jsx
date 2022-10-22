import { EditOutlined } from "@ant-design/icons";
import { Card } from "antd";
import RemoveCar from "../buttons/RemoveCar";

const Car = ({ make, model, year, personId, id }) => {
  const handleButtonClick = () => {};
  return (
    <Card
      type="inner"
      title={`${make} ${model}`}
      actions={[
        <EditOutlined key="edit" onClick={handleButtonClick} />,
        <RemoveCar id={id} />,
      ]}
    >
      Year:{year}
    </Card>
  );
};

export default Car;
