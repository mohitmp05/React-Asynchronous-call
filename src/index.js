import React from "react";
import ReactDOM from "react-dom";
import PostForm from "./postform";
import PutForm from "./putform";
import DeleteForm from "./deleteform";
import GetList from "./getlist";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <GetList /> */}
        <h1>Post Form</h1>
        <PostForm />
        {/* <PutForm/> */}
        <h1>Delete Form</h1>
        <DeleteForm/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
