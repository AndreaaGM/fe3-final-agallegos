import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/useFunctions";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContextGlobal(); 
  
  //const data = localStorage.getItem();
  //const {Favs} = state;

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {state.favs.length > 0 ? (
          state.favs.map((item) => (
            <Card key={item.id} name={item.name} username={item.username} id={item.id} />
          ))
        ) : (
          <p>No hay favoritos guardados.</p>
        )}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        
      </div>
    </>
  );
};  

export default Favs;