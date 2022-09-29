const EpisodeReducer = (globalState, action) => {
    switch (action.type) {
        case "OBTENER_EPISODES":
            return {
                ...globalState,
                episodes: action.payload,
            };
        case "OBTENER_EPISODE":
            return {
                ...globalState,
                episode: action.payload
            };
        case "AGREGAR_EPISODE_CARRITO":
            return {
                ...globalState,
                cart: [...globalState.cart, action.payload]
            };
        case "ELIMINAR_EPISODE_CARRITO":
            return {
                ...globalState,
                cart: globalState.cart.filter((episode) => episode.id !== action.payload)
            };
        default:
            return globalState;
    }
};
export default EpisodeReducer;