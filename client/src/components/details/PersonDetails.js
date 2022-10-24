import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import CarDetails from "./CarDetails";

const getStyles = () => ({
  backButton: {
    margin: "1rem 0",
  },
  flexList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
});

const PersonDetails = (props) => {
  const { firstName, lastName, cars } = props;
  const styles = getStyles();
  return (
    <div>
      <Link to={"/"}>
        <Button style={styles.backButton}>Go Back</Button>
      </Link>
      <Card title="Person Details" style={{ minWidth: "500px" }}>
        <p>FirstName: {firstName}</p>
        <p>LastName: {lastName}</p>
        <h3> Cars List:</h3>
        <div style={styles.flexList}>
          {cars.map((car) => (
            <div key={car.id}>
              <CarDetails {...car} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default PersonDetails;
