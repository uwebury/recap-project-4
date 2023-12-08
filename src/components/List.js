import DeleteButton from "./DeleteButton";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now."}{" "}
      </h2>
      <ul>
        {activities.map(({ activityname, id }) => (
          <li key={id}>
            {activityname}
            <DeleteButton onDeleteActivity={onDeleteActivity} id={id} />
          </li>
        ))}
      </ul>
    </>
  );
}
