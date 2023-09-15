import Banner from "../Banner/Banner";
import Sponsor from "../Sponsor/Sponsor";
import Navbar from "./Navbar/Navbar";
const Header = () => {
  return (
    <header>
      <div className="h-screen">
        <div className="shadow-lg">
          <Navbar></Navbar>
        </div>
        <Banner></Banner>
      </div>

      <Sponsor></Sponsor>
    </header>
  );
};

export default Header;
