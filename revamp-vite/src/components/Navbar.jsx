import  { useState } from 'react';
import './../styles/navstyle.css';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import ReactPixel from 'react-facebook-pixel';
import { FlyoutLink, PricingContent } from './NavbarDownload';
import DownloadButton from './DownloadButton';


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const trackClick = () => {
    ReactPixel.trackCustom('FroShareClick');
    console.log('FroShare Clicked');
    setClick(!click)
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div to="/" className="nav-logo">
            <a href='/'> <img src={"https://res.cloudinary.com/dapbrn8a9/image/upload/v1722944084/Website_Revamp/logo_2_1_wvfozm.webp"} alt="logo1" className='h-12' /></a>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={handleClick}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/learn-more" className="nav-links" onClick={handleClick}>
                Learn More
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-links" onClick={handleClick}>
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/froshare" className="nav-links" onClick={trackClick}>
                FroShare
              </Link>
            </li>
            <li className='transition-transform duration-300 hover:scale-105 hover:brightness-125'>
              <FlyoutLink href="#" FlyoutContent={PricingContent}>
                <DownloadButton />
              </FlyoutLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <RxCross2 className='text-white' />
            ) : (
              <RxHamburgerMenu className='text-white' />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;