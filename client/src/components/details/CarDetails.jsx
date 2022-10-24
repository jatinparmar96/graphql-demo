import { Card } from "antd";
import { currencyFormatter } from "../../utils/currencyFormatter";

const CarDetails = (props) => {
  const { make, model, year, price } = props;
  return (
    <Card type="inner">
      <p>Make: {make}</p>
      <p>Model: {model}</p>
      <p>Price: {currencyFormatter.format(price)}</p>
      <p>Year: {year}</p>
    </Card>
  );
};
export default CarDetails;
