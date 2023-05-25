import Container from "./container";
import { EXAMPLE_PATH } from "../../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="py-4 flex flex-row justify-between items-start">
          <div className="flexItemsContainer flex gap-16">
            <div className=" flex flex-col gap-4">
              <div>CONTACT</div>
              <div className="text-[10px]">
                <div>Njegosheva bb</div>
                <div>Tetovo, 1200 MK</div>
                <div>Social Cultural Space Tetova</div>
              </div>
              <a
                className="underline text-[10px]"
                href="mailto:spacetetova@gmail.com"
              >
                email
              </a>
            </div>
            <div className="nav flex flex-col ">
              <div className="cursor-pointer hover:text-gray-300">events</div>
              <div className="cursor-pointer hover:text-gray-300">galerija</div>
              <div className="cursor-pointer hover:text-gray-300">kontributore</div>
              <div className="cursor-pointer hover:text-gray-300">rregullorja</div>
            </div>
          </div>
          <div className="footerLastItems flex flex-col justify-between">
            <div className="flex pb-[70px]">
            <img src="/instagramIcon.svg" className="w-8 h-8"  />
            <img src="/facebookIcon.svg" className="w-8 h-8"  />
            <img src="/twitterIcon.svg" className="w-8 h-8"  />
            <img src="/twitchIcon.svg" className="w-8 h-8"  />
            </div>
            <div className="text-[10px] flex items-end">social cultural space tetova all right reserved</div>
            
          </div>
        </div>
        
      </Container>
    </footer>
  );
};

export default Footer;
