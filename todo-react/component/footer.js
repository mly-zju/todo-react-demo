import React from 'react'

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div onClick={this.props.click}>
        <button className="all">all</button>
        <button className="undone">undone</button>
        <button className="done">done</button>
      </div>
    )
  }
}

export default Footer
