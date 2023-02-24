import React from "react";
import { Form, NavLink } from "react-router-dom";
import logomark from "../assets/logomark.svg";
import { BsTrash } from "react-icons/bs";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logomark} alt="" height={30} />
        <span>Expense Tracker</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <BsTrash width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
