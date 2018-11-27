// const initialState = [
//   {
//     id: 0,
//     text: 'Investigar sobre Progressive Web Apps (PWA)',
//     completed: true
//   },
//   {
//     id: 1,
//     text: 'Investigar sobre WebAssembly',
//     completed: true
//   },
//   {
//     id: 2,
//     text: 'Investigar sobre Payment Request API',
//     completed: true
//   },
//   {
//     id: 3,
//     text: 'Investigar sobre Web Bluetooth API',
//     completed: true
//   },
//   {
//     id: 4,
//     text: 'Investigar sobre CSS Grid',
//     completed: true
//   },
//   {
//     id: 5,
//     text: 'Implementar una PWA',
//     completed: true
//   },
//   {
//     id: 6,
//     text: 'Diseñar y exponer una clase',
//     completed: false
//   }
// ]

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

export default todos;
