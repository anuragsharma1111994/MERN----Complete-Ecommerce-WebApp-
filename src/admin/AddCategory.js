import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";

const AddCategory = () => {
  const [name, setName] = useState("initialState");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAutheticated();

  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-small btn-dark mb-3" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );

  const handeleChange = (event) => {
    setError("");
    setName(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
  };

  const myCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Enter The Category</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handeleChange}
          value={name}
          autoFocus
          required
          placeholder="For Example. Summer"
        />
        <button className="btn btn-outline-info" onClick={onSubmit}>
          Create Category
        </button>
      </div>
    </form>
  );

  return (
    <div>
      <Base
        title="Create Category here"
        description="Add A new Category"
        className="container bg-info p-4"
      >
        <div className="row bg-white rounded">
          <div className="col-md-8 offset-md-2">
            {myCategoryForm()} {goBack()}
          </div>
        </div>
      </Base>
    </div>
  );
};
export default AddCategory;
