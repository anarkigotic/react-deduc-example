const redux = require("redux");

const createStore = redux.createStore;

//State inicial
const stateInicial = {
  usuarios: []
};
//Reducer
//estado y la accion
const reducerPrincipal = (state = stateInicial, accion) => {
  if (accion.type === "AGREGAR_USUARIO") {
    return {
      ...state,
      usuarios: [...state.usuarios,  accion.nombre]
    };
  }
  if (accion.type === "MOSTRAR_USUARIOS") {
    return {
      ...state
    };
  }
  return state;
};

//create store y store (contiene el state de la aplicacion)
// 3 parametros reducer,state inicial, applymidelware
//reducer  -> va definir como cambia el state

const store = createStore(reducerPrincipal); //es el que va almacenar el state actual de la aplicacion

// Dsipach es la forma de cambiar el state

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "AGREGAR_USUARIO",
  nombre: "juan"
});
store.dispatch({
  type: "AGREGAR_USUARIO",
  nombre: "diego"
});

store.dispatch({
  type: "MOSTRAR_USUARIOS"
});
