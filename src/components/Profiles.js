import React from "react";
import Preview from "./Preview";
import ProfileModal from "./ProfileModal";
import UserProfile from "./UserProfile";
import SearchBar from './SearchBar';
import api from '../services/api';

class Profiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showModal: false,
      previewUser: {},
      edit: false,
      create: false,
      userToEdit: {},
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.editUser = this.editUser.bind(this);
    this.createUser = this.createUser.bind(this);
    this.goBack = this.goBack.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    api.get('/profiles/').then(
      (res) => { 
        this.setState({ users: res }); 
      }
    );
  }

  toggleModal(toggle) {
    this.setState({ showModal: toggle })
  }
  
  editUser(user) {
    this.setState({ showModal: false, edit: true, userToEdit: user });
  }

  createUser() {
    this.setState({ create: true });
  }

  goBack() {
    this.setState({ edit: false, create: false, userToEdit: {} });
  }

  refresh() {
    this.setState({ edit: false, create: false, userToEdit: {} });
    api.get('/profiles/').then(
      (res) => { 
        console.log(res);
        this.setState({ users: res }); 
      }
    );
  }

  filter(filtered) {
    this.setState({ users: filtered });
  }

  render() {
    const { users } = this.state;

    if (this.state.edit || this.state.create) {
      return (
        <div>
          <UserProfile
            user={ this.state.userToEdit }
            create={ this.state.create }
            goBack={ this.goBack }
            refresh={ this.refresh }
          />
        </div>
      );
    } else {
      return (
        <div>
          <SearchBar
            createUser={ this.createUser }
            users={ this.state.users }
            filtered={ (filtered) => this.filter(filtered) }
          />
          <ul className="profiles">
            { users.map(user => (
              <li key={user.id} onClick={ () => this.setState({ showModal: true, previewUser: user })}>
                <Preview 
                  firstName={ user.first_name }
                  lastName={ user.last_name }
                  phone={ user.phone }
                  email={ user.email }
                  photo={ user.photo }
                />
              </li>
            ))}
          </ul>
          <ProfileModal
            open={ this.state.showModal }
            user={ this.state.previewUser }
            toggleModal={ this.toggleModal }
            editUser={ this.editUser }
          />
        </div>
      );
    }

  }
}

export default Profiles;