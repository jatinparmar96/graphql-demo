import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PERSON_WITH_CAR } from "../../queries";
import PersonDetails from "../details/PersonDetails";

const getStyles = () => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "400px",
    margin: "1rem 0",
  },
});
const ShowPage = () => {
  const styles = getStyles();
  const { personId } = useParams();
  const { loading, data, error } = useQuery(GET_PERSON_WITH_CAR, {
    variables: {
      id: personId,
    },
  });
  if (loading) return "Loading ...";
  if (error) return `Error Occured ${error.message}`;
  return (
    <div style={styles.container}>
      <PersonDetails {...data.person} />
    </div>
  );
};
export default ShowPage;
