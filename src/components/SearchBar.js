import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="actions-bar">
        <div className="actions">
          {/* <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={ this.filterUsers }
          /> */}
          <h2>All Users</h2>
        </div>
        <div className="actions">
          <button className="add-user" onClick={ () => this.props.createUser() }>
            Create User
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;