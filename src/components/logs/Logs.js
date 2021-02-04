import React, { useEffect, useState } from "react";

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
    return <p>loading...</p>;
  }

  return (
    <ul class="collection with-header">
      <li class="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs to show...</p>
      ) : (
        logs.map((log) => <li className="collection-item">{log.message}</li>)
      )}
    </ul>
  );
}

export default Logs;
