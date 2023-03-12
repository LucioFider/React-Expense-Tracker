const BudgetItem = ({ budget }) => {
  const { id, name, amount, color } = budget;
  return (
    <div className="budget">
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{amount} Budgeted</p>
      </div>
      <progress max={amount} value="100">
        {/* {percentage} */}
      </progress>
      <div className="progress-text">
        <small>... spent</small>
        <small>... remaining</small>
      </div>
    </div>
  );
};

export default BudgetItem;
