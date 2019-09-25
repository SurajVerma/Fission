import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Suraj" />;
// ReactDOM.render(element, root);

// function App() {
//   return (
//     <div>
//       <Welcome name="Suraj" />
//       <Welcome name="Shail" />
//       <Welcome name="Kiran" />
//     </div>
//   );
// }

// ReactDOM.render(<App />, root);

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000);

//Stats

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello World!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Clock />, document.getElementById("root"));

//Handling Events
// class Toggle extends React.Component {
//   state = { isToggleOn: true };
//   handleClick = () => {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   };
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? "ON" : "OFF"}
//       </button>
//     );
//   }
// }

// ReactDOM.render(<Toggle />, document.getElementById("root"));

//Conditional Rendering
// function UserGreetings(props) {
//   return <h1>Welcome back!</h1>;
// }
// function GuestGreeting(props) {
//   return <h1>Please Sign up</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreetings />;
//   }
//   return <GuestGreeting />;
// }
// ReactDOM.render(
//   <Greeting isLoggedIn={false} />,
//   document.getElementById("root")
// );

// function LoginButton(props) {
//   return <button onClick={props.onClick}>Login</button>;
// }
// function LogoutButton(props) {
//   return <button onClick={props.onClick}>Logout</button>;
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = { isLoggedIn: false };
//   }
//   handleLoginClick() {
//     this.setState({ isLoggedIn: true });
//   }
//   handleLogoutClick() {
//     this.setState({ isLoggedIn: false });
//   }
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;

//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }
// ReactDOM.render(<LoginControl />, document.getElementById("root"));
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!!!!!</h1>
//       {unreadMessages.length > 0 && (
//         <h2>You have {unreadMessages.length} unread messages.</h2>
//       )}
//     </div>
//   );
// }
// const messages = ["a", "b", "c", "d"];

// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById("root")
// );
// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }
//   return <div className="warning">Warning!</div>;
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { showWarning: true };
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }
//   handleToggleClick() {
//     this.setState(state => ({
//       showWarning: !state.showWarning
//     }));
//   }
//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? "Hide" : "Show"}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Page />, document.getElementById("root"));

//List and keys

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map(number => (
//     <li key={number.toString()}>{number}</li>
//   ));
//   return <ul>{listItems}</ul>;
// }
// const numbers = [1, 2, 3, 4, 5, 6];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById("root")
// );

// function ListItem(props) {
//   return <li>{props.value}</li>;
// }
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map(numbers => (
//     <ListItem key={numbers.toString()} value={numbers} />
//   ));
//   return <ul>{listItems}</ul>;
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById("root")
// );

//Forms
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     this.setState({ value: event.target.value.toUpperCase() });
//   }
//   handleSubmit(event) {
//     alert("A name was submitted: " + this.state.value);
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<NameForm />, document.getElementById("root"));

// class EssayForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value:
//         "Please write an essay about that random thing which pops in your mind right now"
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }
//   handleSubmit(event) {
//     alert("An essay was submitted: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Essay:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<EssayForm />, document.getElementById("root"));

// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "mango" };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }
//   handleSubmit(event) {
//     alert("Your favorite flavor is: " + this.state.value);
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor :
//           <select onChange={this.handleChange} value={this.state.value}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">lime</option>
//             <option value="coconut">coconut</option>
//             <option value="mango">mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<FlavorForm />, document.getElementById("root"));

//Lifting State Up

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { temperature: "" };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(e) {
//     this.setState({ temperature: e.target.value });
//   }
//   render() {
//     const temperature = this.state.temperature;
//     return (
//       <fieldset>
//         <legend>Enter temperature in Celsius</legend>
//         <input type="text" value={temperature} onChange={this.handleChange} />
//         <BoilingVerdict celsius={parseFloat(temperature)} />
//       </fieldset>
//     );
//   }
// }

// ReactDOM.render(<Calculator />, document.getElementById("root"));

//Boiling calculator handling both inputs together

// const scaleNames = {
//   c: "Celsius",
//   f: "Fahrenheit"
// };

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// function toCelsius(fahrenheit) {
//   return ((fahrenheit - 32) * 5) / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return "";
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     //this.state = { temperature: "" };
//   }
//   handleChange(e) {
//     this.props.onTemperatureChange(e.target.value);
//   }
//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}</legend>
//         <input type="text" onChange={this.handleChange} value={temperature} />
//       </fieldset>
//     );
//   }
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = { temperature: "", scale: "c" };
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({ scale: "c", temperature });
//   }
//   handleFahrenheitChange(temperature) {
//     this.setState({ scale: "f", temperature });
//   }
//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius =
//       scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit =
//       scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange}
//         />
//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange}
//         />
//         <BoilingVerdict celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Calculator />, document.getElementById("root"));

//Mars Exploration Program

// function FancyBorder(props) {
//   return (
//     <div className={"FancyBorder FancyBorder-" + props.color}>
//       {props.children}
//     </div>
//   );
// }

// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">{props.title}</h1>
//       <p className="Dialog-message">{props.message}</p>
//       {props.children}
//     </FancyBorder>
//   );
// }

// class SignUpDialog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { login: "" };
//   }

//   handleChange(e) {
//     this.setState({ login: e.target.value });
//   }

//   handleSignUp() {
//     alert(`Welcome aboard ${this.state.login}`);
//   }

//   render() {
//     return (
//       <Dialog
//         title="Mars Exploration Program"
//         message="How should we refer to you ?"
//       >
//         <input
//           value={this.state.login}
//           onChange={this.handleChange.bind(this)}
//         />
//         <button onClick={this.handleSignUp.bind(this)}>Sign Me Up!!</button>
//       </Dialog>
//     );
//   }
// }

// ReactDOM.render(<SignUpDialog />, document.getElementById("root"));
