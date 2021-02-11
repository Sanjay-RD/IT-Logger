import React from "react";

function TechItem({ tech }) {
  return (
    <ul className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="!#" className="secondary-content">
          <i className="material-icons gray-text">delete</i>
        </a>
      </div>
    </ul>
  );
}

export default TechItem;
