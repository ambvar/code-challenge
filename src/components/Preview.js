import React from "react";

class Preview extends React.Component {
  render() {
    return (
      <div className="preview">
        <div>
          <img
            className="preview-image"
            src={ this.props.photo || "./images/profile-image.jpeg" }
            alt={ this.props.firstName + " " + this.props.lastName }
          />
        </div>
        <div>{ this.props.firstName } { this.props.lastName }</div>
        <div className="contact-information">
          { this.props.email }<br/>
          { this.props.phone }
        </div>
      </div>
    );
  }
}

export default Preview;