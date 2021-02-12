import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <div className="search">
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={ this.filterUsers }
          />
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