import React, { Component } from 'react';
import Remarkable from 'remarkable';
import './App.css';

class AppTodo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: 'Type some *markdown* here!'};
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  getRawMarkup() {
    var md = new Remarkable({
      breaks: true, 
    });
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input Your Todo</h3>
        <textarea
          onChange={this.handleChange}
          defaultValue={this.state.value} />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        >
        </div>
      </div>
    );
  }

}

export default AppTodo;
