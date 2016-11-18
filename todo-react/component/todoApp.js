import React from 'react'
import Listitem from './listitem.js'
import Footer from './footer.js'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputText: '',
      display: 'all'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var text = this.refs.myInput.value;
    this.setState(prevState => {
      prevState.items.push({text: text, id: prevState.items.length, done: false});
      prevState.inputText = '';
      return prevState;
    });
    return false;
  }
  handleChange(e) {
    this.setState({inputText: e.target.value});
  }
  handleItemClick(e) {
    var index = e.target.dataset.index;
    this.setState(prevState => {
      prevState.items[index].done = !prevState.items[index].done;
      return prevState;
    })
  }
  handleToggle(e) {
    var name = e.target.className;
    switch (name) {
      case 'all':
        this.setState({display: 'all'});
        break;
      case 'undone':
        this.setState({display: 'undone'});
        break;
      case 'done':
        this.setState({display: 'done'});
        break;
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="myInput" value={this.state.inputText} onChange={this.handleChange}/>
          <button>add</button>
        </form>
        <ul>
          {this.state.items.map(item => (<Listitem done={item.done} text={item.text} key={item.id} click={this.handleItemClick} id={item.id} display={this.state.display}/>))}
        </ul>
        <Footer click={this.handleToggle}/>
      </div>
    )
  }
}

export default TodoApp
