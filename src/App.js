import Form from "./components/Form";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  function handleAddActivity(data) {
    console.log(data);
  }
  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity}></Form>
    </div>
  );
}

export default App;
