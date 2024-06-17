import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  // it is going to hard coded list into that todos.js are there it is return 
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});