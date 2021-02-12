import React from "react";
import Form from "./Form";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: true,
    };
  }

  render() {
    return (
      <div>
        <h3 onClick={ () => this.props.goBack() }>&#x2190; Back to All Users</h3>
        <Form user={ this.props.user } create={ this.props.create } success={ this.props.refresh } />
      </div>
    );
  }
}

export default UserProfile;