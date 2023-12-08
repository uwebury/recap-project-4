import Form from "./components/Form";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  function handleAddActivity(data) {
    console.log(data);
    data.id = uid();
    setActivities([...activities, data]);
  }
  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity}></Form>
    </div>
  );
}

export default App;
