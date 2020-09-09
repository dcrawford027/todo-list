import React from 'react';

const Input = props => {
    const {allToDos, setAllToDos} = props;
    let todo = {
        title: "",
        isFinished: false
    };

    const changeHandler = e => {
        todo.title = e.target.value;
    }

    const clickHandler = e => {
        setAllToDos([...allToDos, todo]);
        e.target.value = "";
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-8 offset-2">
                    <input onChange={changeHandler} type="text" name="todo"/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8 offset-2">
                    <button onClick={clickHandler} className="btn btn-success mt-2">Add Todo</button>
                </div>
            </div>
        </>
    )
}

export default Input;