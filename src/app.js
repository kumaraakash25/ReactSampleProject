import React from "react";
import ReactDOM from "react-dom";

class MyApp extends React.Component {
  render() {
    return (
      <div className="myClass">
        <SearchComponent />
        <ResultComponent />
      </div>
    );
  }
}

class SearchComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'Click',
      textVal: ''
    }
    this.changeText = this.changeText.bind(this);
  }

  changeText(){
      this.setState({
        name: 'Clicked'
      });
      alert(this.state.textVal);
  }

  showData(event){
    this.setState({
        textVal :event.target.value
    });
    //alert(this.state.textVal);
  }

  render() {
    return (
      <div className="searchClass">
        <b> Search Github Repository </b>
        <br></br>
        <input type="text" value = {this.state.textVal} onChange = {this.showData.bind(this)} className="searchBojx" />
        <button className="searchButton" onClick={this.changeText}>{this.state.name}</button>
      </div>
    );
  }
}

class ResultComponent extends React.Component {
  render() {
    const resultData =
      [
        { name: 'aakash', age: 29 },
        { name: 'akashh', age: 12 },
        { name: 'aakbas', age: 13 },
        { name: 'aghaka', age: 14 },
        { name: 'ahhhak', age: 15 },
        { name: 'ahghga', age: 16 },
        { name: 'aggggg', age: 17 }
      ];
    const itemList = resultData.map((item) =>
      <div className="searchElement">
        <li key={item.name} >{item.name}
          <button className="newButton" onClick={function () { alert(item.age); }}>Go </button>
        </li>
      </div>
    );
    return (
      <div className="results">
        <p> {itemList} </p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "Header from state...",
      content: "Content from state..."
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <h2>{this.state.content}</h2>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
