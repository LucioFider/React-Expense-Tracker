import React from "react";
import { Form } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create budget</h2>
      <Form method="post" className="grid-sm">
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g. , Groceries"
            required
          />
        </div>

        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., K500"
            required
            inputMode="decimal"
          />
        </div>
        <button type="submit" className="btn btn--dark">
          <span>Create budget</span>
          <BsCurrencyDollar width={20} />
        </button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
