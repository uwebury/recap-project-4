export default function List({ activities }) {
  return (
    <>
      <ul>
        {activities.map(({ activityname, goodweatheractivity, id }) => (
          <li key={id}>{activityname}</li>
        ))}
      </ul>
    </>
  );
}
