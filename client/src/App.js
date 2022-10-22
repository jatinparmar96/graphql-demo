import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Layout } from "antd";
import "./App.css";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Layout className="App">
        <Header />
        <MainContent />
        {/* <AddContact /> */}
        {/* <Contacts /> */}
      </Layout>
    </ApolloProvider>
  );
}

export default App;
