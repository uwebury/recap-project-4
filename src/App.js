import Form from "./components/Form";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";
import { uid } from "uid";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState([]);
  const filteredActivities = activities.filter((activity) => {
    return activity.goodweatheractivity === weather.isGoodWeather;
  });

  function handleAddActivity(data) {
    console.log(data);
    data.id = uid();
    setActivities([...activities, data]);
  }
  useEffect(() => {
    async function loadWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather/rainforest"
      );
      const data = await response.json();
      setWeather(data);
    }

    loadWeather();
  }, []);
  console.log(weather);
  return (
    <>
      <h1>
        {weather.condition} {weather.temperature}° C
      </h1>
      <div className="App">
        <List
          activities={filteredActivities}
          isGoodWeather={weather.isGoodWeather}
        />
        <Form onAddActivity={handleAddActivity}></Form>
      </div>
    </>
  );
}

export default App;
