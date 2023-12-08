export default function Form({ onAddActivity }) {
  // This function handles the form elements.
  // It needs information about the event. Because of that it needs event as an argument in brackets.
  function handleAddActivity(event) {
    // It prevents the default behaviour of an HTML form element. If the form would not prevent the default behaviour, the entered data would disappear right after they're submitted.
    event.preventDefault();
    // The next two variables (formData and data) work together. They collect the submitted data entered into the form and construct them into an object.
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // This variable takes the activity name from the form.
    const activityname = data.activityname;
    // This variable declares whether the good weather checkbox in the form was checked or not.
    // It returns a boolean value.
    const goodweatheractivity = data.goodweatheractivity == "on" ? true : false;
    {
      /* Hätten wir hier auch mit .checked arbeiten können? */
    }

    //
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
