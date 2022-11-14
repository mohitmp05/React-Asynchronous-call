import React, { Component } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    //e.preventDefault()
    console.log(this.state);
    localStorage.setItem("userId",this.state.userId);
    localStorage.setItem("title",this.state.title);
    localStorage.setItem("body",this.state.body);
    alert(`${this.state.userId} ${this.state.title} ${this.state.body}`);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userId, title, body } = this.state;
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
          <div class="form-group">
            <label for="exampleInputPassword1">Title</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="title"
              value={title}
              placeholder="title"
              onChange={this.changeHandler}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Body</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="body"
              value={body}
              placeholder="body"
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

export default PostForm;
