export default function DeleteButton({ onDeleteActivity, id }) {
  function handleDeleteClick() {
    onDeleteActivity({ id });
  }
  return <button onClick={handleDeleteClick}>x</button>;
}
