import { EditOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useState } from "react";
import RemoveCar from "../buttons/RemoveCar";
import UpdateCar from "../forms/UpdateCar";

const Car = (props) => {
  const { make, model, year, personId, id } = props;
  const [editMode, setEditMode] = useState(false);

  const handleButtonClick = () => setEditMode(!editMode);
  return editMode ? (
    <UpdateCar {...props} onButtonClick={handleButtonClick} />
  ) : (
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
