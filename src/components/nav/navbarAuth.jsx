import logo from "../../assets/next-pet-nobg.png";

const NavbarAuth = ({ child }) => {
  return (
    <nav className="border-b-2">
      <div className="w-[80vw] mx-auto my-5">
        <div className="flex justify-center lg:justify-between items-center mb-7">
          <div className="pt-2">
            <a href="/">
              <img src={logo} alt="" width={150} />
            </a>
          </div>

          <div className="hidden lg:block">{child}</div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAuth;
