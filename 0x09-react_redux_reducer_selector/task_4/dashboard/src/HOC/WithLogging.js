import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  return class extends Component {
    static displayName = `WithLogging(${
      WrappedComponent.displayName || 'Component'
    })`;

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      console.log(
        `Component ${WrappedComponent.displayName || 'Component'} is mounted`
      );
    }

    componentWillUnmount() {
      console.log(
        `Component ${
          WrappedComponent.displayName || 'Component'
        } is going to unmount`
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;
