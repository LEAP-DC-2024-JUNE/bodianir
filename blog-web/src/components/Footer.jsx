import { Footerlogo } from "./Footerlogo";
import { Logo } from "./Logo";
export const Footer = () => {
  return (
    <div id="footer" className="bg-gray-200 ">
      <div className="px-16 flex justify-between mx-24">
        <div className="w-[280px] mt-20 ">
          <p>About</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p>Email : info@jstemplate.net</p>
          <p>Phone : 880 123 456 789</p>
        </div>
        <div className="mt-20 w-[50px] flex ">
          <p>Home Blog Contact</p>
        </div>
        <div className="mt-40 ">
          <Footerlogo />
        </div>
      </div>

      <div className="mt-10 ml-36 flex justify-between gap-10  ">
        <Logo />
        <div className="flex gap-10 pr-10 mr-28">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
