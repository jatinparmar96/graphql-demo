import { Segmented } from "antd";
import { useState } from "react";
import AddCar from "../forms/AddCar";
import AddPerson from "../forms/AddPerson";

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
  const onSegmentChange = (e) => {
    setCurrent(e);
  };
  return (
    <div style={styles.container}>
      <Segmented
        value={current}
        onChange={onSegmentChange}
        options={[
          { label: "Person", value: "person", key: "person" },
          { label: "Car", value: "car", key: "car" },
        ]}
      />
      {current === "person" ? <AddPerson /> : <AddCar />}
    </div>
  );
};
export default MainContent;
