export const initialState = {
  tema: "light",
  data: [],
  favs: JSON.parse(localStorage.getItem("favs")) || []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "Tema":
      return { ...state, tema: state.tema === "light" ? "dark" : "light" };

    case "Data":
      return { ...state, data: action.payload };

    case "Favorito":
      const newFavs = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(newFavs));
      return { ...state, favs: newFavs };

    case "REMOVE_FAV": // Nuevo caso para eliminar favorito
      const updatedFavs = state.favs.filter(fav => fav.id !== action.payload.id);
      localStorage.setItem("favs", JSON.stringify(updatedFavs)); // Actualizar localStorage
      return { ...state, favs: updatedFavs }; // Actualizar estado global


    default:
      throw new Error("Acción no permitida");
  }
};