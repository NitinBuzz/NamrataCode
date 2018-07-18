import React, { Component } from 'react';

export default class Flexi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, name22) {
    let values = { ...this.state.values };
    values[name22] = event.target.value;
    this.setState({ values });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            this.props.onSubmit(e, this.state.values);
          }}
        >
          {this.props.config.items.map((key, value) => {
            return (
              <div>
                <label>{key.label} : </label>
                {key.type == 'DropDown' ? (
                  <select
                    type={key.type}
                    value={this.state.state}
                    onChange={e => {
                      this.handleChange(e, key.name);
                    }}
                  >
                    {key.values.map(v => (
                      <option key={v} value={v}>
                        {' '}
                        {v}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={key.type}
                    value={this.state.name}
                    onChange={e => {
                      this.handleChange(e, key.name);
                    }}
                  />
                )}
                <p />
              </div>
            );
          })}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
