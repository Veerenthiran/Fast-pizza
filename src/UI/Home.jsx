import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser"
import Button from "./Button";

function Home() {
  const username=useSelector((state)=>state.user.username);
  return (
    <div className=" font-semibold text-center my-12 sm:my-16">
      <h1 className=" text-stole-500  text-xl mb-10">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
        
      </h1>
      {username===""?<CreateUser/>:<Button type="primary" to="/menu">Continue to order,{username}</Button>}
    </div>
  );
}

export default Home;
