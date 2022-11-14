import React, { Component } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class DeleteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    //e.preventDefault()
    if (localStorage.getItem("userId")==this.state.userId){
      localStorage.clear();
    }
    else{
      alert("User Id does not exist.")
    }

    axios
      .delete("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {userId} = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div class="form-group">
            <label for="exampleInputEmail1">User Id</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              name="userId"
              value={userId}
              aria-describedby="emailHelp"
              placeholder="Enter userId"
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default DeleteForm;
