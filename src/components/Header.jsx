import bill from "./images/Icons.svg";
import avatar from "./images/avatar.svg";
import down from "./images/shape.svg";
const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="header-text">
          <h3>Welcome Back, Marci</h3>
          <p>Here is the information about all your orders</p>
        </div>
        <div className="header-img">
          <img src={bill} alt="" />
          <img src={avatar} alt="" />
          <div className="down">
            <p>Marci Fumons</p>
            <img className="down-img" src={down} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
