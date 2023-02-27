import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";

// components
import Intro from "../components/Intro";

// helper functions
import { fetchData } from "../helpers";

// Loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");

  return { userName, budgets };
}

// action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  // console.log(_action);
  // new user submission
  if (_action === "newUser") {
    try {
      // throw new Error("Ya done");
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error("There was a problem creating your account.");
    }
  }

  if (_action === "createBudget") {
    try {
      // create budget
      throw new Error("You failed!");
      return toast.success("Budget created!");
    } catch (e) {
      throw new Error("There was a problem creating your budget.");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();

  return (
    <div>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {/* {budgets ? ():()} */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
};

export default Dashboard;
