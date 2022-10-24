import { EditOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useState } from "react";
import RemoveCar from "../buttons/RemoveCar";
import UpdateCar from "../forms/UpdateCar";

const Car = (props) => {
  const { make, model, year, price, id } = props;
  const [editMode, setEditMode] = useState(false);

  const handleButtonClick = () => setEditMode(!editMode);
  const formatter = Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });
  return editMode ? (
    <UpdateCar {...props} onButtonClick={handleButtonClick} />
  ) : (
    <Card
      style={{ marginBottom: "1rem" }}
      type="inner"
      title={`${make} ${model}`}
      actions={[
        <EditOutlined key="edit" onClick={handleButtonClick} />,
        <RemoveCar id={id} />,
      ]}
    >
      <p> Year: {year}</p>
      <p>Price: {formatter.format(price)}</p>
    </Card>
  );
};

export default Car;

/*

 <Card
      type="inner"
      title={`${make} ${model}`}
      actions={[
        <EditOutlined key="edit" onClick={handleButtonClick} />,
        <RemoveCar id={id} />,
      ]}
    >
      <p> Year: {year}</p>
      <p>Price: {formatter.format(price)}</p>
    </Card>

    */
