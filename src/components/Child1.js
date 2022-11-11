import React, { useRef } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

const Child1 = ({setData, data}) => {
    const todoRef = useRef(); 
    const insertTodo =() => {
        const value = todoRef.current.value
        if(value ==''){
            alert("입력하세요")
            return;
        }
        if(data.includes(value)){
            alert("이미 등록 하였습니다")
            todoRef.current.value = "";
            todoRef.current.focus();
            return;
        }
        setData(todoRef.current.value);
        todoRef.current.value = "";
        todoRef.current.focus();
    }
    const onKeyPress=(e)=>{
        if(e.key === 'Enter'){
            insertTodo();
        }
    }

  return (
    <div>
        <h1>자식1</h1>
        <InputGroup className="mb-3" style={{width:"300px"}}>
        <Form.Control
          onKeyUp={onKeyPress}
          ref={todoRef}
          placeholder="입력하시오"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={insertTodo}>
          Button
        </Button>
      </InputGroup>
    </div>
  )
}

export default Child1