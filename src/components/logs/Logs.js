import React, { useEffect, useState } from "react";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";

import { connect } from "react-redux";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs to show...</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    log: state.log,
  };
};

export default connect(mapStateToProps, { getLogs })(Logs);
