import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";
import ShowPage from "./components/layout/ShowPage";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />}></Route>
            <Route path="person/:personId" element={<ShowPage />} />
          </Routes>
          {/* <AddContact /> */}
          {/* <Contacts /> */}
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
