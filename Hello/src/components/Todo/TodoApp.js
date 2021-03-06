import React from 'react'
import TodoInput from './TodoInput'
import CompletionToggle from './CompletionToggle'
import TodoList from './TodoList'

function createTodo(text){
  return {
    id: Date.now(),
    text: text,
    isCompleted: false
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.onTodoInputSubmit = this.onTodoInputSubmit.bind(this)
    this.onToggleTodo = this.onToggleTodo.bind(this)
    this.onCompletionToggle = this.onCompletionToggle.bind(this)
    this.state = {
      todos: [
        createTodo("Todo 1"),
        createTodo("Todo 2"),
        createTodo("Todo 3"),
        createTodo("Todo 4")
      ],
      showCompletion: true
    }
  }
  onTodoInputSubmit(text) {
    const todo = createTodo(text)
    let todos = this.state.todos.concat([todo])
    //todo.push(todo)
    this.setState({
      todos: todos,
    })
  }

  onToggleTodo(todo){
    todo.isCompleted = !todo.isCompleted
    this.forceUpdate()
  }

//เอาไว้เช็คว่าเราควร render หรือไม่ควร render
//  shouldComponentUpdate(nextProps, nextState) {
    //return !(nextProps.show === this.props.show)

//  }

  onCompletionToggle(event){
    this.setState({
      showCompletion: !this.state.showCompletion
    })
  }

  render(){
    return (
      <div className = "todo-app">
        <h1>Todo App</h1>
        <TodoInput onTodoInputSubmit={this.onTodoInputSubmit}/>
        <CompletionToggle
          show={this.state.showCompletion}
          onValueChange={this.onCompletionToggle}/>
        <TodoList
          showCompletion={this.state.showCompletion}
          todos={this.state.todos}
          onToggleTodo={this.onToggleTodo}

          />
      </div>
    )
  }
}

export default TodoApp
