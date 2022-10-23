import { EditOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { useState } from "react";
import RemovePerson from "../buttons/RemovePerson";
import UpdatePerson from "../forms/UpdatePerson";
import Car from "./Car";

const getStyles = () => ({
  card: {
    width: "500px",
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
        // <RemoveContact id={id} />,
      ]}
    >
      <Row gutter={16}>
        {cars.map((car) => (
          <Col span={12} key={car.id}>
            <Car {...car} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};
export default Person;
