import React, { Component } from 'react';

export default class Flexi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term1: '',
      id1: '',
      title1: '',
      term2: '',
      id2: '',
      title2: ''
    };
  }

  render() {
    return (
      <div>
        <form>
          {this.props.config.items.map((key, value) => {
            return (
              <div>
                <label>{key.label} : </label>
                {key.type == 'DropDown' ? (
                  <select>
                    {key.values.map(v => (
                      <option key={v} value={v}>
                        {' '}
                        {v}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input type={key.type} />
                )}
                <p />
              </div>
            );
          })}
        </form>
      </div>
    );
  }
}
