import React from "react";

import "./Form.css";

const Form = (props) => {
  return (
    <main>
      <div className="first">
        <label for="fname">First name</label>
        <input type="text" onChange={props.firstName} placeholder="" />
      </div>
      <div className="first">
        <label for="lname">Last name</label>
        <input type="text" onChange={props.lastName} placeholder="" />
      </div>
      <div className="first">
        <label for="number">Phone number</label>
        <input type="number" onChange={props.number} placeholder="" />
      </div>
      <div className="first">
        <label for="role">Role</label>
        <select name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="whatever">whatEver</option>
        </select>
      </div>
      <div className="first">
        <label for="message">Message</label>
        <textarea
          input
          type="text"
          value=""
          name="message"
          id="message"
        ></textarea>
      </div>
    </main>
  );
};

export default Form;
