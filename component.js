const {useState} = React;
const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout = () => {
  return (
    <>
      <Counter />
      <ClassCounter />
    </>
  );
};
root.render(<AppLayout />);

// Functional Component

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>increment</button>
    </>
  );
};

// Class Component

class ClassCounter extends React.Component {
  constructor(parameters) {
    super(parameters);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
      </>
    );
  }
}
