import React, { useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

const App = () => {

  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    const tempTodoList = [...todoList];
    tempTodoList.push(todo);
    setTodoList(tempTodoList);
    //setCount((prev) => prev + 1)
  }

  const deleteTodo = (index) => {
        const tempTodoList = [...todoList];
        tempTodoList.splice(index, 1);
        setTodoList(tempTodoList)
  };

  return <div>
    <h1>부모</h1><hr />
    <Child1 setData={addTodo} data={todoList}/><hr />
    <Child2 data={todoList} deleteData={deleteTodo}/>
  </div>
}

/* function App() {
  return (
    <>
    </>
  );
} */

export default App;

// useState
  // const [count, setCount] = useState(0);
  // const [randomNumber, setRandom] = useState(Math.random());

  // const cangeCount= (num) => {
  //   setCount((prev) => prev + num)
  // }
  
  // return <div>
  //   <div>{randomNumber}</div>
  //   <div>{count}</div>
  //   <button onClick={() => cangeCount(1)}>증가</button>
  //   <button onClick={() => cangeCount(-1)}>감소</button>
  //   <button onClick={() => setRandom(Math.random())}>랜덤 숫자</button>
  // </div>

  //useState 

  // const [list, setList] = useState([0,0,0])
  // const changeList = (index) =>{
  //   const tempList = [...list];
  //   tempList[index] = tempList[index] + 1;
  //   setList(tempList);

  // };
  // return<>
  //   <div>{list[0]}</div>
  //   <div>{list[1]}</div>
  //   <div>{list[2]}</div>
  //   <button onClick={() => changeList(0)}>0번 변경</button>
  //   <button onClick={() => changeList(1)}>1번 변경</button>
  //   <button onClick={() => changeList(2)}>2번 변경</button>
  // </>

    // useEffect
    // useEffect(() => {
    //   console.log("테스트2")
    // }, [])
    // console.log("테스트1")
    // return <>
    //   <input></input>
    // </>
  
    // useMemo
  
    // useRef
  
    