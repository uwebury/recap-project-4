export default function Form({ onAddActivity }) {
  function handleAddActivity(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const activityname = data.activityname;
    const goodweatheractivity = data.goodweatheractivity == "on" ? true : false;
    {
      /* Hätten wir hier auch mit .checked arbeiten können? */
    }
    onAddActivity({ activityname, goodweatheractivity });
    const form = event.target.elements;
    form.activityname.value = "";
    form.goodweatheractivity.checked = false;
    form.activityname.focus();
  }
  return (
    <>
      <h2>Add new activity</h2>
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
