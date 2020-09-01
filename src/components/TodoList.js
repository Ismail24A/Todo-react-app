import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {

let list = todos.length ? 
    todos.map((todo, i) => <li key={i} className='f3 dib w-100 ph2 pv2 bb b--light-silver'> 
    <p className='w-90 fl'>{`${i+1}- ${todo}`}</p>
     <button className='f6 w-10 grow br2 pv3 mv2 ph3 dib white bg-green' onClick={() => {deleteTodo(i)}}>Done</button>
    </li>
    )
     : 
    <li className='tc f3 gray ph3 pv3'>No todos</li> ;

    return ( 
        <ul className='list pl0 ml0 center mw7 ba bg-white br2 pa3 pa2-ns'>
            { list }
        </ul>
     );
}
 
export default TodoList;