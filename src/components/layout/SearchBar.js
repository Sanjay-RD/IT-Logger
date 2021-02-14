import React from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";

function SearchBar({ searchLogs }) {
  const onSearch = (e) => {
    const text = e.target.value;
    searchLogs(text);
  };
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs ..."
              onChange={onSearch}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default connect(null, { searchLogs })(SearchBar);
