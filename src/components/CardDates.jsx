import React from "react";

function CardDates({ name, username, email, id, index }) {
  return (
    <li>
      {name} -{username} -{email} -{id}
    </li>
  );
}

export default CardDates;
