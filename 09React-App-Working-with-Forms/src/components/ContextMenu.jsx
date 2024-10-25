/* eslint-disable react/prop-types */
export default function ContextMenu({
  contextPosition,
  setContextPosition,
  expenses,
  setExpenses,
  rowId,
  setData,
  setBtnName,
}) {
  const handleEdit = () => {
    const {title, category, amount} = expenses.find((element) => element.id === rowId);
    setData({title, category, amount});
    setBtnName(rowId);
    setContextPosition({});
  };
  const handleDelete = () => {
    setContextPosition({});
    setExpenses((prevState) =>
      prevState.filter((element) => element.id != rowId)
    );
  };

  if (!contextPosition.left) return;
  return (
    <div className="context-menu" style={{ ...contextPosition }}>
      <div onClick={handleEdit}>Edit</div>
      <div onClick={handleDelete}>Delete</div>
    </div>
  );
}
