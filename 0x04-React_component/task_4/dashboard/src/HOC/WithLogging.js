import React, { Component } from 'react';

function WithLogging(WrapComponent) {
  return Class extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = WrapComponent.name ? `WithLogging(${WrapComponent.name})` : `WithLogging(Component)`;
    }

    componentDidMount() {
      console.log(`Component ${WrapComponent.name ? WrapComponent.name : 'Component'} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrapComponent.name ? WrapComponent.name : 'Component'} is going to unmount`);
    }

    render() {
      return <WrapComponent {...this.props} />
    }
  }
}

export default WithLogging;
