import React from 'react'

class Listitem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.display == 'undone') {
      if (!this.props.done) {
        return (
          <li data-index={this.props.id} onClick={this.props.click}>{this.props.done
              ? 'done: ' + this.props.text
              : this.props.text}</li>
        )
      } else {
        return (
          <li style={{
            display: 'none'
          }}></li>
        )
      }
    } else if (this.props.display == 'done') {
      if (this.props.done) {
        return (
          <li data-index={this.props.id} onClick={this.props.click}>{this.props.done
              ? 'done: ' + this.props.text
              : this.props.text}</li>
        )
      } else {
        return (
          <li style={{
            display: 'none'
          }}></li>
        )
      }
    } else {
      return (
        <li data-index={this.props.id} onClick={this.props.click}>{this.props.done
            ? 'done: ' + this.props.text
            : this.props.text}</li>
      )
    }
  }
}

export default Listitem
