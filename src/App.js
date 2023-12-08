import Form from "./components/Form";
import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import { uid } from "uid";
import List from "./components/List";

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
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity}></Form>
    </div>
  );
}

export default App;
