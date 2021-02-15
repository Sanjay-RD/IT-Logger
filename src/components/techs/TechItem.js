import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";

import M from "materialize-css/dist/js/materialize.min.js";

function TechItem({ tech, deleteTech }) {
  const onDelete = () => {
    deleteTech(tech.id);
    M.toast({
      html: `Technical ${tech.firstName} ${tech.lastName} is Removed`,
    });
  };
  return (
    <ul className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="!#" className="secondary-content">
          <i className="material-icons gray-text" onClick={onDelete}>
            delete
          </i>
        </a>
      </div>
    </ul>
  );
}

export default connect(null, { deleteTech })(TechItem);
