export default function Form({ onAddActivity }) {
  function handleAddActivity(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
    const form = event.target.elements;
    form.activityname.value = "";
    form.goodweatheractivity.checked = false;
    form.activityname.focus();
  }
  return (
    <>
      <h1>Add new activity</h1>
      <form onSubmit={handleAddActivity}>
        <label htmlFor="activityname">Name</label>
        <input type="text" id="activityname" name="activityname"></input>
        <br></br>
        {/* Break will be removed later */}
        <label htmlFor="goodweatheractivity">Good weather activity</label>
        <input
          type="checkbox"
          id="goodweatheractivity"
          name="goodweatheractivity"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
