import React, { Component } from "react";
import axios from "axios"; // client side (everything for react)

//import <A FUNCTION> from "<A MODULE>"

const axios = require("axios") // server side

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      State: [],
      searchResults: ""
    };
  }
  //   componentDidMount = () => {
  //     console.log("COMPONENTDIDMOUNT");
  //     let url = "https://corona.lmao.ninja/states";
  //     fetch(url)
  //       .then(response => {
  //         console.log("FETCH REQUEST");
  //         console.log(response);
  //         return response.json();
  //       })
  //       .then(news => {
  //         this.setState({
  //           State: news.cases
  //         });
  //       });
  //   };

  componentDidMount() {
      // the GET is the API REQUEST TYPE
    axios.get("https://corona.lmao.ninja/states").then(res => {
      const State = res.data;
      this.setState({ State });
      console.log(State);
    //   { State: [
    //       {state: "New York", cases: 92381, todayCases: 8480, deaths: 2373, todayDeaths: 154, …}
    //   ]}
    });
  }

  handleChange = e => {
    this.setState({
      searchResults: e.target.value
    });
  };
  render() {
    // let articleList = this.state.articles.map((article, index) => {
    //   return <li>
    //     <h4>{article.title}</h4>
    //     <br />
    //     <img src={article.urlToImage} height="150px" />
    //     <p>{article.description}</p>
    //   </li>
    // })

    // let newArray = Array.filter((obj) => {
    //   return true false;
    // }
    // )
    // console.log(this.state.State);
    console.log(this)
    console.log(this.state)
    // let FilterList = this.state.State.filter((state, index) => {
      //   return State.state;
      //   console.log(this.state.State);
      // .toLowerCase()
      // .includes(this.state.searchResults.toLowerCase());
    // });

    // let StateList = FilterList.map((State, index) => {
    //   return (
    //     <li>
    //       <h4>{State.cases}</h4>
    //       <br />
    //       <p>{State.active}</p>
    //       <p>{State.deaths}</p>
    //     </li>
    //   );
    // });

    return (
      <>
        {this.state.searchResults}
        <br />
        <input type="text" onChange={this.handleChange} />
        {/* <ul>{StateList}</ul> */}
      </>
    );
  }
}
export default News;
