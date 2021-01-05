import React from "react";
import ReactDOM from "React.dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { increasing: false };
  }
  update() {
    ReactDOM.render(
      <App val={this.props.val + 1} />,
      document.getElementById("root")
    );
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ increasing: nextProps.val > this.props.val });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }
  render() {
    console.log(this.state.increasing);

    return <button onClick={this.update.bind(this)}>{this.props.val}</button>;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps:${prevProps.val}`);
  }
}
export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { val: 0 };
//     this.update = this.update.bind(this);
//   }
//   update() {
//     this.setState({ val: this.state.val + 1 });
//   }
//   render() {
//     console.log("render");
//     return <button onClick={this.update}>{this.state.val}</button>;
//   }
// }
// export default App;
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { a: "" };
//   }
//   update(e) {
//     this.setState({ a: e.target.value });
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" onchange={this.forceUpdate.bind(this)} />
//         {this.state.a}
//       </div>
//     );
//   }
// }
// export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { currentEvent: "___" };
//     this.update = this.update.bind(this);
//   }
//   update(e) {
//     this.setState({ currentEvent: e.type });
//   }
//   render() {
//     return (
//       <div>
//         <textarea
//           onKeyPress={this.update}
//           onCopy={this.update}
//           cols="30"
//           rows="10"
//         />
//         <h1>{this.state.currentEvent}</h1>
//       </div>
//     );
//   }
// }
// export default App;

// class App extends React.Component {
//   render() {
//     return <Title text="20/12/2020" />;
//   }
// }
// const Title = (props) => <h1>Title: {props.text}</h1>;

// Title.propTypes = {
//   text(props, propName, component) {
//     if (!(propName in props)) {
//       return new Error(`missing ${propName}`);
//     }
//     if (props[propName].length < 6) {
//       return new Error(`${propName} was too short`);
//     }
//   },
// };
// export default App;

// class App extends React.Component {
//   render() {
//     return (
//       <Button>
//         I <Heart /> React
//       </Button>
//     );
//   }
// }
// const Button = (props) => <button>{props.children}</button>;

// class Heart extends React.Component {
//   render() {
//     return <span>&hearts;</span>;
//   }
// }
// export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       txt: "this is the state txt",
//     };
//   }
//   update(e) {
//     this.setState({ txt: e.target.value });
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.update.bind(this)} />

//         <h1>{this.state.txt}</h1>
//         <Widget update={this.update.bind(this)} />
//       </div>
//     );
//   }
// }

// const Widget = (props) => <input type="text" onChange={props.update} />;

// export default App;
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.Proptypes.number.isRequired,
// };

// const App = () => <h1>hello stateman</h1>;
// App.defaultProps = {
//   txt: "this is the default txt",
// };
// export default App;
