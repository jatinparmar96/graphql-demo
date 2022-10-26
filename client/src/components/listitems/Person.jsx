import { EditOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import RemovePerson from "../buttons/RemovePerson";
import UpdatePerson from "../forms/UpdatePerson";
import CarsList from "../lists/CarsList";

const getStyles = () => ({
  card: {
    width: "500px",
    justifyContent: "start",
  },
});

const Person = ({ id, firstName, lastName, cars }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const handleButtonClick = (e) => {
    setIsUpdate(!isUpdate);
  };
  const styles = getStyles();
  return isUpdate ? (
    <UpdatePerson
      id={id}
      firstName={firstName}
      lastName={lastName}
      onButtonClick={handleButtonClick}
    />
  ) : (
    <Card
      style={styles.card}
      title={`${firstName} ${lastName}`}
      actions={[
        <Link to={`/person/${id}`}>Learn More</Link>,
        <EditOutlined key="edit" onClick={handleButtonClick} />,
        <RemovePerson id={id} />,
      ]}
    >
      <h2>Cars List</h2>
      <CarsList cars={cars} />
    </Card>
  );
};
export default Person;
