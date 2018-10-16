import React, { Component } from 'react';

class Title extends Component {
    render() {
      return (
        <div>
            <h1 className="title-container__title">{this.props.title}</h1>
            <h2 className="title-container__subtitle">{this.props.subtitle}</h2>
        </div>
      );
    }
  }

export default Title;
