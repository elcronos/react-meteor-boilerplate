import React from 'react';

import AddToDo from '/imports/client/ui/components/add_todo.jsx';
import Todo from '/imports/client/ui/components/to_do.jsx';

const ToDos = ({todos}) => (
  <div className="container">
    <div className="row">
          <AddToDo />
          {/*{
            todos.map(function(todo) {
              return <Todo todo={todo} key={todo._id} />
            })
          }*/}
    </div>
  </div>
);

export default ToDos;
