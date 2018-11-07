import React, { Component } from 'react';

class List extends Component {
    render() {
        return <div>
            <table>
             <tbody>
              <tr>
                <th>Description</th>
                <th>Date</th>
                <th>
                  <button onClick={this.props.removeAllButton}>
                    Reset
                  </button>
                </th>
              </tr>
              {this.props.todos.map((item, i) => <tr key={i}>
                  <td>{item.description}</td>
                  <td>{item.date}</td>
                  <td>
                    <button onClick={() => this.props.deleteButton(i)}>
                      Delete
                    </button>
                  </td>
                </tr>
                )}
                </tbody>
            </table>
          </div>;
    }
}

export default List;