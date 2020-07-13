import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/litera/bootstrap.min.css';

class FilterButton extends Component {
  state = {
    selected: undefined
  }

  componentDidMount() {
    const { selectedStackIds, stack } = this.props;
    const myStackId = stack.id;

    this.setState({
      selected: selectedStackIds.includes(myStackId.toString())
    });
  }

  getButtonClassnames = () => {
    const { selected } = this.state;

    let renderClasses = "btn btn-outline-primary btn-sm";
    if (selected) {
      renderClasses = "btn btn-outline-primary btn-sm active"
    }

    return renderClasses;
  }

  handleOnClick = event => {
    let pressed = (event.target.getAttribute("aria-pressed") === "true");
    const stackClicked = event.target.id

    if (!pressed) {
      this.setState({
        selected: true
      });
      event.target.setAttribute("aria-pressed", "true")
      event.target.classList.add('active')
      this.props.addFilter(stackClicked)
    } else {
      this.setState({
        selected: false
      })
      event.target.setAttribute("aria-pressed", "false")
      event.target.classList.remove('active')
      this.props.removeFilter(stackClicked)
    }
  }

  render() {
    const renderClasses = this.getButtonClassnames();

    return (
      // <label className="btn btn-outline-secondary" >
      //   <input type="checkbox" autocomplete="off" value={stack} aria-pressed="false" onClick={this.handleOnClick} /> {stack}
      // </label>
      <button
        id={this.props.stack.id}
        type="button"
        className={renderClasses}
        aria-pressed={this.state.selected}
        value={this.props.stack}
        onClick={this.handleOnClick}>
        {this.props.stack.name}
      </button >
    );
  }
}

export default FilterButton;
