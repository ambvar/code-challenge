import React from "react";

class ProfileModal extends React.Component {

  render() {
    if (this.props.open) {
      return (
        <div className="profile-modal">
          <div className="content">
            <div className="close" onClick={ () => this.props.toggleModal(false) }>
              &#x2715;
            </div>
            <div className="top">
              <div>
                <img src={ this.props.user.photo || "./images/profile-image.jpeg" } alt={ this.props.user.first_name + " " + this.props.user.last_name }/>
              </div>
              <div className="information">
                <div className="full-name">
                  { this.props.user.first_name } { this.props.user.last_name }
                </div>
                <div className="contact">
                  <div><strong>Contact Information</strong></div>
                  <div>{ this.props.user.email }</div>
                  <div>{ this.props.user.phone }</div>
                </div>
                <div className="address">
                  <div><strong>Address</strong></div>
                  <div>{ this.props.user.address }</div>
                  <div>{ this.props.user.city }, { this.props.user.state } {this.props.user.zip }</div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div>Notes: { this.props.user.notes || "n/a"}</div>
            </div>
            <div className="edit">
              <div onClick={ () => this.props.editUser(this.props.user) }>Edit User &#x2192;</div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProfileModal;