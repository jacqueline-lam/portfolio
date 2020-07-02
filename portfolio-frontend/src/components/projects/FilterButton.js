import React, { Component } from 'react';

class FilterButton extends Component {
  state = {
    selected: false
  }

  handleOnClick = event => {
    console.log(event.target)
    let pressed = (event.target.getAttribute("aria-pressed") === "true");
    const stackClicked = event.target.value

    if (!pressed) {
      this.props.addFilter(event.target.id)

      // this.setState(prevState => ({
      //   stacks: [...prevState.stacks, stackClicked]
      // }));
      this.setState({
        selected: true
      });
      event.target.setAttribute("aria-pressed", "true")
      event.target.classList.add('active')
    } else {
      //   // this.setState(prevState => ({
      //   //   stacks: prevState.stacks.filter(stack => stack !== stackClicked),
      //   // }));
      this.props.removeFilter(event.target.id)

      this.setState({
        selected: false
      })
      event.target.setAttribute("aria-pressed", "false")
      event.target.classList.remove('active')
    }
    // this.props.filterProjects(this.state.stack);
  }

  render() {
    return (
      // <label className="btn btn-outline-secondary" >
      //   <input type="checkbox" autocomplete="off" value={stack} aria-pressed="false" onClick={this.handleOnClick} /> {stack}
      // </label>
      <button
        id={this.props.stack.id}
        type="button"
        className="btn btn-outline-primary btn-sm"
        aria-pressed='false'
        value={this.props.stack}
        onClick={this.handleOnClick} >
        {this.props.stack.name}
      </button >
    );
  }
}

export default FilterButton;
