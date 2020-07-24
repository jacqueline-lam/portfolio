import React, { Component } from 'react';

class FilterButton extends Component {
  state = {
    selected: false
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
    let renderClasses = "btn btn-outline-info btn-sm";
    if (selected) {
      renderClasses = "btn btn-outline-info btn-sm active"
    }

    return renderClasses;
  }

  handleOnClick = event => {
    let pressed = this.state.selected
    const stackClicked = event.target.id

    // // setState will update state so that selected is reversed
    // this.setState(prevState => ({
    //   selected: !prevState.selected
    // }));

    if (!pressed) {
      // dispatch will be called with the action type 'ADD_FILTER'
      // execute action creator by redferencing it as a prop
      this.props.addFilter(stackClicked)
      this.setState({
        selected: true
      });
    } else {
      this.props.removeFilter(stackClicked)
      this.setState({
        selected: false
      })
    }
  }

  render() {
    const { stack } = this.props
    const renderClasses = this.getButtonClassnames();

    return (
      <button
        id={stack.id}
        type="button"
        className={renderClasses}
        aria-pressed={this.state.selected}
        value={stack}
        onClick={this.handleOnClick}>
        {stack.name}
      </button >
    );
  }
}

export default FilterButton;
