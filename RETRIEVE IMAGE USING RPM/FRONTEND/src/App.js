import React from "react";
import "./App.css";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Axios for get request
import axios from "axios";
class App extends React.Component {
  //initialize an object's state in a class
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  //ComponentDidMount is use to Connect a React app to external applications, such as web APIs or JavaScript functions
  componentDidMount() {
    //get request
    axios.get("http://localhost/retrieve/sample.php").then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <div className="maincontainer">
        <h1 className="mr-5 ml-5 mt-5">Retrieve Image from PHP & MYSQL </h1>
        <div className="container mb-5 mt-5 text-left">
          <table class="table table-hover">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Name</th>
                <th>Image</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((result) => {
                return (
                  <tr>
                    {/* <td>{result.id}</td> */}
                    <td>{result.name}</td>
                    <td>{result.image}</td>
                    <td>
                     <a href={result.image}> <img
                        src={result.image}
                        height="200px"
                        width="200px"
                        alt="images"
                      ></img></a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App;
