import React, { Component } from 'react';
var Bootstrap = require('react-bootstrap');
var Button = Bootstrap.Button;

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
        <p />
        <div
          style={{
            marginTop: '120px',
            margin: 'auto',
            textAlign: 'center'
          }}
        >
          <h2 style={{ marginBottom: '20px' }}>Flexi Form</h2>
          <form
            onSubmit={e => {
              this.props.onSubmit(e, this.state.values);
            }}
            style={{
              margin: 'auto',
              width: '50%',
              textAlign: 'left'
            }}
          >
            {this.props.config.items.map((key, value) => {
              return (
                <div>
                  <label style={{ marginRight: '5px' }}>{key.label} : </label>
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
            <Button
              bsStyle="success"
              style={{
                margin: 'auto',
                display: 'block'
              }}
              type="submit"
              value="Submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
