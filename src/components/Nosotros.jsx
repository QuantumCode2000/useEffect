import React, { useEffect, useState } from "react";
import CardDates from "./CardDates";

const Nosotros = () => {
  const [team, setTeam] = useState([]); //paRA utilizar el metodo map el primer valor o el valor por defeto no debe ser null

  useEffect(() => {
    getDates();
  }, []);

  const getDates = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    // console.log(users);
    setTeam(users);
  };

  return (
    <React.Fragment>
      <ul>
        {team.map((i) => {
          return (
            <CardDates
              name={i.name}
              username={i.username}
              email={i.email}
              key={i.id}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Nosotros;
