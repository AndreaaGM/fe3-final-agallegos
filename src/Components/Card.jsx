import React from "react";
import { Link } from "react-router-dom";
import { rutas } from "../Routes/rutas";
import { useContextGlobal } from './utils/useFunctions';


const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContextGlobal();

  

  /* const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const isFav = state.favs.some(fav => fav.id === id);
    if (!isFav) {
      dispatch({ type: "Favorito", payload: { id, name, username } });
    } else {
      alert("Este dentista ya está en favoritos");
    }
  }; */
  const isFav = state.favs.some(fav => fav.id === id); // Comprobar si ya es favorito

  const toggleFav = () => {
    if (isFav) {
      // Si es favorito, eliminarlo
      dispatch({ type: "REMOVE_FAV", payload: { id } });
    } else {
      // Si no es favorito, agregarlo
      dispatch({ type: "Favorito", payload: { id, name, username } });
    }
  };

  return (
    <div className="card">
      <img src="/images/doctor.jpg" className="card-img-top" alt={id} />
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={rutas.detail + id}>
        
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>USername: {username}</p>
      </Link>
        <button onClick={toggleFav} className="favButton">
        {isFav ? "Remove fav ❌" : "Add fav ⭐"}</button>
    </div>
  );
};

export default Card;
