import dataImage from "./images/icon.svg";
import dwon from "./images/down.svg";
const data = [
  {
    name: "Total users ",
    Totalusers: 200,
  },
  {
    name: "Total Rent ",
    Totalusers: 500,
  },
  {
    name: "Earning ",
    Totalusers: "4000 EGP",
  },
  {
    name: "Repairs ",
    Totalusers: "1000 EGP",
  },
];
const Headerdata = () => {
  return (
    <div className="d-flex justify-content-between Headerdata ">
      {data.map((item) => (
          <div className="data" key={item.name}>
            <div className="data-text d-flex">
              <div>
                <h3>{item.Totalusers}</h3>
                <p>{item.name} </p>
              </div>
              <div className="data-img">
                <img src={dataImage} alt="" />
              </div>
            </div>
            <p>
              <img src={dwon} alt="" />
              <span> 10.2 </span> <span>+1.01% this week</span>{" "}
            </p>
          </div>
      ))}
    </div>
   
  );
};

export default Headerdata;
