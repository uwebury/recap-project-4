import "../App.css";

export default function DeleteButton({ onDeleteActivity, id }) {
  function handleDeleteClick() {
    onDeleteActivity({ id });
  }
  return <button aria-label="delete button" onClick={handleDeleteClick} className="deleteButton">X</button>;
}
