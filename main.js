const {useState} = React; // Destructure useState from React
const restaurantList = [
  {
    id: 1,
    name: "Italian Bistro",
    cuisines: ["Italian", "Pizza", "Pasta"],
    cloudinaryImageId: "italian-bistro",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate%20icecream.png",
  },
  {
    id: 2,
    name: "Sushi Haven",
    cuisines: ["Japanese", "Sushi", "Seafood"],
    cloudinaryImageId: "sushi-haven",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate%20icecream.png",
  },
  {
    id: 3,
    name: "Curry House",
    cuisines: ["Indian", "Curry", "Vegetarian"],
    cloudinaryImageId: "curry-house",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
  },
  {
    id: 4,
    name: "Taco Town",
    cuisines: ["Mexican", "Tacos", "Burritos"],
    cloudinaryImageId: "taco-town",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
  },
  {
    id: 5,
    name: "Burger Shack",
    cuisines: ["American", "Burgers", "Fast Food"],
    cloudinaryImageId: "burger-shack",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate%20icecream.png",
  },
];

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const title = React.createElement(
//   "h1",
//   {id: "title", className: "title", key: "title"},
//   "This is my First React App"
// );
// root.render(title);

const root = ReactDOM.createRoot(document.getElementById("root"));
const titleApp = React.createElement(
  "h1",
  {id: "title", className: "title", key: "title"},
  "Welcome to App"
);
const subTitle = React.createElement(
  "h3",
  {id: "subtitle", className: "subtitle", key: "subTitle"},
  "React Class"
);

const container = React.createElement(
  "div",
  {id: "container", className: "constainer", key: "container"},
  [titleApp, subTitle]
);

// root.render(container);

// using jsx

const HeaderComponent = () => {
  return (
    <>
      <h1>This is Header</h1>
    </>
  );
};

const BodyComponent = () => {
  return (
    <>
      {restaurantList.map((resturant) => (
        <ResturantCard {...resturant} key={resturant?.id} />
      ))}
    </>
  );
};

const ResturantCard = ({id, name, cuisines, cloudinaryImageId, imageUrl}) => {
  console.log(id, name, cuisines, cloudinaryImageId);

  return (
    <div>
      <img src={imageUrl} alt={cloudinaryImageId} />
      <h1>{name}</h1>
      <span>{cuisines.join(", ")}</span>
    </div>
  );
  return <></>;
};

const FooterComponent = () => {
  return (
    <>
      <h1>This is Footer</h1>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Counter />
      <CounterClass />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

root.render(<AppLayout />);

/**
Every Component has its own state.
States changes on user events.

State is typically initialized in the constructor of a class component or using the useState hook in functional components.
In class components, you use this.setState().
In functional components, you use the setter function returned by the useState hook.
Directly modifying the state variable is not recommended, as it does not trigger a re-render.
State updates are asynchronous, meaning that multiple updates can be batched together, 
and you might not see the updated state immediately after calling the update method.
 */

// create functiona and class component

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Count By Functional Component: {count}</h1>
      <button class="btn btn-primary" onClick={increment}>
        Increment
      </button>
    </>
  );
};

// using class method

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
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
        <h1>Count By Class Component: {this.state.count}</h1>
        <button class="btn btn-primary" onClick={this.increment}>
          Increment
        </button>
      </>
    );
  }
}
