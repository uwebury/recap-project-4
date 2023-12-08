import Form from "./components/Form";
import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import { uid } from "uid";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const isGoodWeather = true;
  const filteredActivities = activities.filter((activity) => {
    return activity.goodweatheractivity === isGoodWeather;
  });

  function handleAddActivity(data) {
    console.log(data);
    data.id = uid();
    setActivities([...activities, data]);
  }
  return (
    <>
      <h1> Weather Activity App</h1>
      <div className="App">
        <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
        <Form onAddActivity={handleAddActivity}></Form>
      </div>
    </>
  );
}

export default App;
