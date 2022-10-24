import { EditOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import RemovePerson from "../buttons/RemovePerson";
import UpdatePerson from "../forms/UpdatePerson";
import Car from "./Car";

const getStyles = () => ({
  card: {
    width: "500px",
    justifyContent: "start",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "1rem",
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
        <EditOutlined key="edit" onClick={handleButtonClick} />,
        <RemovePerson id={id} />,
        <Link to={`/person/${id}`}>Learn More</Link>,
      ]}
    >
      <h2>Cars List</h2>
      <List
        itemLayout="horizontal"
        dataSource={cars}
        renderItem={(item) => <Car {...item} />}
      />
    </Card>
  );
};
export default Person;
