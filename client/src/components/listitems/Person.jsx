import { EditOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import RemovePerson from "../buttons/RemovePerson";
import Car from "./Car";
const getStyles = () => ({
  card: {
    width: "500px",
  },
});
const Person = ({ id, firstName, lastName, cars }) => {
  const handleButtonClick = (e) => {
    console.log(e);
  };
  const styles = getStyles();
  return (
    <Card
      style={styles.card}
      title={`${firstName} ${lastName}`}
      actions={[
        <EditOutlined key="edit" onClick={handleButtonClick} />,
        <RemovePerson id={id} />,
        // <RemoveContact id={id} />,
      ]}
    >
      <List grid={{ gutter: 20, columns: 4 }}>
        {cars.map((car) => (
          <List.Item key={car.id}>
            <Car {...car} />
          </List.Item>
        ))}
      </List>
    </Card>
  );
};
export default Person;
