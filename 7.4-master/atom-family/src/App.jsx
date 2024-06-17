
import './App.css'
import { RecoilRoot, atomFamily, useRecoilState, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';
import { useEffect } from 'react';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <UpdateTodo/>
  </RecoilRoot>
}
function UpdateTodo(){
  const updatetodos2 = useRecoilState(todosAtomFamily(2))
  useEffect (()=>{
    setTimeout(()=>{
updatetodos2({
id:'2',
title : "new todo",
description :"hey todo "
})
    } ,5000)
  },[])
  return <div></div>
}
function Todo({id}) {
   const currentTodo = useRecoilValue(todosAtomFamily(id))
  return (
    <>
      {currentTodo.title} + 
      {currentTodo.description}
      <br />
    </>
  )
}

export default App
