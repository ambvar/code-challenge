import React from "react";

class ActionsBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.filterUsers = this.filterUsers.bind(this);
  }

  filterUsers = (event) => {
    this.setState({ users: this.props.users });
    const search = event.target.value;
    if (search === '' || !search) {
      console.log('here?');
      return this.props.filtered(this.props.users);
    }
    let firstName = '';
    let lastName = '';
    if (search.split(' ').length > 1) {
      const name = search.split(' ');
      firstName = name[0];
      lastName = name[1];
    } else {
      firstName = search;
    }

    const filter = this.state.users.filter(user => 
      (user.first_name.toLowerCase().includes(firstName.toLowerCase()) &&
      user.last_name.toLowerCase().includes(lastName.toLowerCase())) ||
      (user.first_name.toLowerCase().includes(lastName.toLowerCase()) &&
      user.last_name.toLowerCase().includes(firstName.toLowerCase()))
    );

    return this.props.filtered(filter);
  }

  render() {
    return (
      <div className="actions-bar">
        <div className="search">
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={ this.filterUsers }
          />
        </div>
        <div className="page-name">
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

export default ActionsBar;