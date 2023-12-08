export default function List({ activities, isGoodWeather }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and"
          : "Bad weather outside! Here's what you can do now."}{" "}
      </h2>
      <ul>
        {activities.map(({ activityname, goodweatheractivity, id }) => (
          <li key={id}>{activityname}</li>
        ))}
      </ul>
    </>
  );
}
