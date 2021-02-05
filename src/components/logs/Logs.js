import React, { useEffect, useState } from "react";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";

function Logs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    let res = await fetch("/logs");
    let data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  if (loading) {
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
}

export default Logs;
