import React from "react";
import { Provider } from "../src/context/Provider";
import Entry from "../src/components/Entry";
import List from "../src/components/List";
const App: React.FC = () => {
  return (
    <Provider>
      <h1>Encrypted Diary</h1>
      <Entry />
      <List />
    </Provider>
  );
};

export default App;
