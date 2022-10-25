import { useQuery } from "@apollo/client";
import { Segmented } from "antd";
import { useState } from "react";
import { GET_PERSONS } from "../../queries";
import AddCar from "../forms/AddCar";
import AddPerson from "../forms/AddPerson";
import PersonList from "../lists/PersonList";

const getStyles = () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "800px",
    background: "white",
    alignSelf: "center",
    padding: "1rem",
    gap: "1rem",
    margin: "1rem",
  },
});
const MainContent = () => {
  const [current, setCurrent] = useState("person");

  const styles = getStyles();
  const { loading, data } = useQuery(GET_PERSONS);
  const onSegmentChange = (e) => {
    setCurrent(e);
  };
  const options = [{ label: "Person", value: "person", key: "person" }];
  if (!loading && data.persons.length) {
    options.push({ label: "Car", value: "car", key: "car" });
  }
  return (
    <div style={styles.container}>
      <Segmented value={current} onChange={onSegmentChange} options={options} />
      {current === "person" ? <AddPerson /> : <AddCar />}
      <PersonList />
    </div>
  );
};
export default MainContent;
