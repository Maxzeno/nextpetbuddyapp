import { Link } from "react-router-dom";
import logo from "../../assets/Next_Pet_buddy.png";

const NavbarAuth = ({ child }) => {
  return (
    <nav className="border-b-2">
      <div className="w-[80vw] mx-auto my-5">
        <div className="flex justify-center lg:justify-between items-center mb-7">
          <div className="pt-2">
            <Link to="/">
              <img src={logo} alt="" width={150} />
            </Link>
          </div>

          <div className="hidden lg:block">{child}</div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAuth;
