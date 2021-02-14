import React from "react";
import api from "../services/api";

class Form extends React.Component {
  constructor(props) {
    super(props);
    const user = this.props.user || {};
    this.state = {
      id: user.id,
      firstName: user.first_name || "",
      lastName: user.last_name || "",
      email: user.email || "",
      phone: user.phone || "",
      address: user.address || "",
      city: user.city || "",
      state: user.state || "",
      zip: user.zip || "",
      photo: user.photo || "",
      notes: user.notes || "",
      requiredError: null,
      phoneError: null,
      errorKeys: [],
      apiError: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  validate(input) {
    this.setState({ requiredError: null, phoneError: null });
    const keys = ['firstName', 'lastName', 'email', 'address', 'city', 'state', 'zip', 'phone'];
    const errorKeys = [];
    for (const key in input) {
      if (keys.includes(key) && input[key].trim() === "") {
        this.setState({ requiredError: "Required field missing." });
        errorKeys.push(key);
      }

      let reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (key === 'phone' && !reg.exec(input[key])) {
        this.setState({ phoneError: "Please use a valid phone number." });
        errorKeys.push(key);
      }
    }

    if (errorKeys.length > 0) {
      this.setState({ errorKeys: errorKeys });
      return false
    }

    this.setState({ errorKeys: [] });
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    const valid = this.validate(this.state);
    if (valid) {
      const data = {
        first_name: this.state.firstName.trim(),
        last_name: this.state.lastName.trim(),
        email: this.state.email.trim(),
        phone: this.state.phone,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        photo: this.state.photo,
        notes: this.state.notes
      }
      if (this.props.create) {
        api.post('/profile', data).then(
          (res) => {
            console.log(res);
            this.props.success();
          }
        );
        this.props.success();
      } else {
        api.put('/profile/' + this.state.id, data).then(
          (res) => {
            console.log(res);
            this.props.success();
          }
        );
      }
    }
  }

  render() {
    const title = this.props.create ? "Create User" : "Update User";
    const button = this.props.create ? "Create New User" : "Save Changes";

    return (
      <div>
        <div className="edit-user">
          <h2>{ title }</h2>
          <div className="image-preview">
            <img src={ this.state.photo || "./images/profile-image.jpeg" } alt="preview"></img>
          </div>
          <form>
            <div className="form-element">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                placeholder="Jane"
                required
                className={ this.state.errorKeys.includes('firstName') ? 'error' : 'valid' }
              />
            </div>
            <div className="form-element">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                placeholder="Doe"
                required
                className={ this.state.errorKeys.includes('lastName') ? 'error' : 'valid' }
              />
            </div>
            <div className="form-element">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="jane.doe@rivet.work"
                required
                className={ this.state.errorKeys.includes('email') ? 'error' : 'valid' }
              />
            </div>
            <div className="form-element">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
                placeholder="123-456-7890"
                required
                className={ this.state.errorKeys.includes('phone') ? 'error' : 'valid' }
              />
            </div>
            <div className="form-element">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.handleInputChange}
                placeholder="123 Main Street"
                required
                className={ this.state.errorKeys.includes('address') ? 'error' : 'valid' }
              />
            </div>
            <div className="form-element">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChange}
                placeholder="Detroit"
                required
                className={ this.state.errorKeys.includes('city') ? 'error' : 'valid' }
              />
            </div>
            <div className="form-element">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={this.state.state}
                onChange={this.handleInputChange}
                required
                className={ this.state.errorKeys.includes('state') ? 'error' : 'valid' }
              />
            </div>
            <div className="form-element">
              <label>Zip</label>
              <input
                type="text"
                name="zip"
                value={this.state.zip}
                onChange={this.handleInputChange}
                required
                className={ this.state.errorKeys.includes('zip') ? 'error' : 'valid' }
              />
            </div>
            <div className="form-element">
              <label>Photo URL</label>
              <input
                type="text"
                name="photo"
                value={this.state.photo}
                onChange={this.handleInputChange}
                placeholder="https://bit.ly/3rPCabG"
              />
            </div>
            <br />
            <div className="form-element">
              <label>Notes</label>
              <textarea name="notes" value={this.state.notes}
                onChange={this.handleInputChange}/>
            </div>
          </form>

          <div className="error-message">
            { this.state.requiredError } { this.state.phoneError }
          </div>
          <div className="form-submit">
            <input type="submit" value={ button } onClick={ (event) => this.handleSubmit(event) }/>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;