import { List } from "antd";
import Car from "../listitems/Car";

const CarsList = ({ cars }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={cars}
      renderItem={(item) => <Car {...item} />}
    />
  );
};

export default CarsList;
