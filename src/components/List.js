import React from 'react';

const List = props => {
    const { todo, allToDos, setAllToDos, index } = props;

    const deleteItem = () => {
        setAllToDos(() => {
            return allToDos.filter(todo => allToDos.indexOf(todo) !== index);
        });
    };

    const checkHandler = () => {
        allToDos[index].isFinished = !allToDos[index].isFinished;
        setAllToDos([...allToDos]);
    };

    return (
        <div className="row mb-2">
            <div className="col-sm-4 offset-2">
                <p style={{textDecoration: todo.isFinished ? 'line-through' : ''}}>{todo.title}</p>
            </div>
            <div className="col-sm-1">
                <input type="checkbox" 
                    className="form-check-input" 
                    onChange={checkHandler}
                    checked={todo.isFinished}
                    />
            </div>
            {
                todo.isFinished ? 
                    <div className="col-sm-1"><button className="btn btn-dark" onClick={deleteItem}>Delete</button></div> :
                    ''
            }
        </div>
    )
}

export default List;