export const initialState = {
    tema: "light",
    data: [],
    favs: [],
};

export const reducer = (state, action) => {
    switch (action.type) {

        case "Tema":
            return {}


        case "Data":
            return {}


        case "Favs":
            return {}

        default:
            throw new Error("Acción no válida")
    }
}
