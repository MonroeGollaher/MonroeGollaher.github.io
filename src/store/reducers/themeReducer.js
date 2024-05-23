const initialState = {
  mode: localStorage.getItem("themeMode") || "light",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newMode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return {
        ...state,
        mode: newMode,
      };
    default:
      return state;
  }
};

export default themeReducer;
