import React, { useState } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

import { connect } from "react-redux";
import { addTech } from "../../actions/techActions";

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please Enter your firstname and lastname" });
    } else {
      // console.log(firstName, lastName);
      // const newTech = {
      //   firstName,
      //   lastName,
      // };

      addTech({ firstName, lastName });

      M.toast({ html: `New Tech ${firstName} ${lastName} Added` });
      setFirstName("");
      setLastName("");
    }
  };
  return (
    <div id="tech-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>New Technical</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="message" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue btn-flat"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default connect(null, { addTech })(AddTechModal);
