import Card from "./Card";
import Cart from "./Cart";

const Home = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[50%]">
        <Card />
      </div>
      <div className="w-[50%]">
        <Cart />
      </div>
    </div>
  );
};

export default Home;
