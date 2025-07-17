import React from "react";
import PropTypes from "prop-types";

function Link({ route }) {
  return (
    <div>
      <li className="mr-10">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
}

Link.PropTypes = {
  route: PropTypes.object,
};

export default Link;
