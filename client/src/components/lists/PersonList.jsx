import { useQuery } from "@apollo/client";
import { List } from "antd";
import { GET_PERSONS } from "../../queries";
import Person from "../listitems/Person";

const PersonList = () => {
  const { loading, error, data } = useQuery(GET_PERSONS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <List grid={{ gutter: 20, column: 1 }}>
      {data.persons.map((item) => (
        <List.Item key={item.id}>
          <Person {...item} />
        </List.Item>
      ))}
    </List>
  );
};

export default PersonList;
