import React, { Component } from "react";
// High-Order Component (HOC)
// Takes component as argument

function WithLogging(Comp) {
  // And returns another component
  return class extends Component {
    constructor(props) {
      super(props);
      this.displayName = Comp.name
        ? `WithLogging(${Comp.name})`
        : `WithLogging(Component)`;
    }

    componentDidMount() {
      console.log(
        `Component ${Comp.name ? Comp.name : "Component"} is mounted`
      );
    }

    componentWillUnmount() {
      console.log(
        `Component ${Comp.name ? Comp.name : "Component"} is going to unmount`
      );
    }

    render() {
      return <Comp {...this.props} />;
    }
  };
}

export default WithLogging;
