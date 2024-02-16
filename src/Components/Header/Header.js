import { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { MenuContext } from '../../Context/MenuContext';
import HeaderStyles from './Header.styles';
import DropdownLinks from './DropdownLinks';
import MenuDrawer from './MenuDrawer';
import MobileDropdownLinks from './MobileDropdownLinks';

export default function Header() {
  const { isDropdownOpen, toggleDropdown, hoverToggleDropdown, toggleMenu } =
    useContext(MenuContext);

  const [width, setWidth] = useState();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    // console.log(width);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  // Framer Motion
  const animateFrom = { height: '0' };
  const animateTo = { height: 'auto' };
  const animateExit = { height: '0' };
  const transition = {
    height: { ease: 'easeInOut', duration: 1 },
  };

  return (
    <HeaderStyles>
      <div className="contact">
        <a href="tel:+441559305858">
          <h3>
            <span>Call Now: </span>
            0115 930 5858
          </h3>
        </a>
      </div>
      {width < 800 ? (
        <div className="mobile-bar">
          <div className="logo">
            <Link href="/">
              <img src="/thi-icon.svg" alt="Total Home Improvements Logo" />
            </Link>
          </div>
          <MenuDrawer>
            <div className="links">
              <ul>
                {/* <li
                  className="services-li"
                  onClick={() => toggleDropdown('services')}
                >
                  Services
                  {isDropdownOpen === 'services' ? (
                    <div className="icon">
                      <ExpandMoreRoundedIcon
                        sx={{ fontSize: '30px', transform: 'rotate(180deg)' }}
                      />
                    </div>
                  ) : (
                    <div className="icon">
                      <ExpandMoreRoundedIcon sx={{ fontSize: '30px' }} />
                    </div>
                  )}
                </li> */}
                {/* <li
                  onClick={() => {
                    toggleDropdown('');
                    toggleMenu();
                  }}
                  >
                  <Link href="/case-studies">Case Studies</Link>
                </li> */}
                {/* <li
                  onClick={() => {
                    toggleDropdown('');
                    toggleMenu();
                  }}
                >
                <Link href="/faqs">FAQ's</Link>
                </li> */}
                <li
                  onClick={() => {
                    toggleDropdown('');
                    toggleMenu();
                  }}
                  className="quote-clicked"
                >
                  <Link href="/get-a-quote">Get a Quote</Link>
                </li>
                <li onClick={() => toggleDropdown('')}>
                  <a href="https://totalhomeimprovements.uk">Other Services</a>
                </li>
                <li
                  onClick={() => {
                    toggleDropdown('');
                    toggleMenu();
                  }}
                >
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li
                  onClick={() => {
                    toggleDropdown('');
                    toggleMenu();
                  }}
                >
                  <Link href="/about">About Us</Link>
                </li>
                <li onClick={() => toggleDropdown('')}>
                  <a href="https://www.google.com/search?q=total+home+improvements&oq=total+home+improvements&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxiKBTIJCAAQIxgnGIoFMg0IARAuGK8BGMcBGIAEMg0IAhAuGK8BGMcBGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYPTIGCAcQRRg90gEINDY1N2owajSoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x4879ec08037981df:0x556fc7346425b416,1,,,,">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <AnimatePresence>
              {isDropdownOpen === 'services' && (
                <motion.div
                  initial={animateFrom}
                  animate={animateTo}
                  exit={animateExit}
                  transition={transition}
                  className="mobile-dropdown"
                >
                  <div className="dropdown-content">
                    <MobileDropdownLinks />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </MenuDrawer>
        </div>
      ) : (
        <>
          <div className="bar">
            <div className="logo">
              <Link href="/">
                <img src="/thi-icon.svg" alt="Total Home Improvements Logo" />
              </Link>
            </div>
            <div className="links">
              <ul>
                {/* <li
                  className="services-li"
                  // onClick={() => toggleDropdown('services')}
                  onMouseEnter={() => hoverToggleDropdown('services')}
                >
                  Services
                  <div className="icon">
                    <ExpandMoreRoundedIcon sx={{ fontSize: '30px' }} />
                  </div>
                </li> */}
                {/* <li onClick={() => toggleDropdown('')}>
                  <Link href="/case-studies">Case Studies</Link>
                </li> */}
                {/* <li onClick={() => toggleDropdown('')}>
                  <Link href="/faqs">FAQ's</Link>
                </li> */}
                <li onClick={() => toggleDropdown('')}>
                  <Link href="/about">About Us</Link>
                </li>
                <li onClick={() => toggleDropdown('')}>
                  <a href="https://totalhomeimprovements.uk">Other Services</a>
                </li>
                <li
                  onClick={() => toggleDropdown('')}
                  className="quote-clicked"
                >
                  <Link href="/get-a-quote">Get a Quote</Link>
                </li>
                <li onClick={() => toggleDropdown('')}>
                  <a href="https://www.google.com/search?q=total+home+improvements&oq=total+home+improvements&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxiKBTIJCAAQIxgnGIoFMg0IARAuGK8BGMcBGIAEMg0IAhAuGK8BGMcBGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYPTIGCAcQRRg90gEINDY1N2owajSoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x4879ec08037981df:0x556fc7346425b416,1,,,,">
                    Reviews
                  </a>
                </li>
                <li onClick={() => toggleDropdown('')}>
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <AnimatePresence>
            {isDropdownOpen === 'services' && (
              <motion.div
                initial={animateFrom}
                animate={animateTo}
                exit={animateExit}
                transition={transition}
                className="dropdown"
                onMouseLeave={() => toggleDropdown(false)}
              >
                <div className="dropdown-inner">
                  <div className="dropdown-menu">
                    <div className="logo">
                      <Link href="/">
                        <img
                          src="/thi-icon.svg"
                          alt="Total Home Improvements Logo"
                        />
                      </Link>
                    </div>
                    <div className="links">
                      <ul>
                        <li
                          className="services-li"
                          onClick={() => toggleDropdown('services')}
                          onMouseEnter={() => hoverToggleDropdown('services')}
                        >
                          Services
                          <div className="icon">
                            <ExpandMoreRoundedIcon sx={{ fontSize: '30px' }} />
                          </div>
                        </li>
                        {/* <li onClick={() => toggleDropdown('')}>
                          <Link href="/case-studies">Case Studies</Link>
                        </li> */}
                        {/* <li onClick={() => toggleDropdown('')}>
                          <Link href="/faqs">FAQ's</Link>
                        </li> */}
                        <li onClick={() => toggleDropdown('')}>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li
                          onClick={() => toggleDropdown('')}
                          className="quote-clicked"
                        >
                          <Link href="/get-a-quote">Get a Quote</Link>
                        </li>
                        <li onClick={() => toggleDropdown('')}>
                          <a href="https://totalhomeimprovements.uk">
                            Other Services
                          </a>
                        </li>
                        <li onClick={() => toggleDropdown('')}>
                          <a href="https://www.google.com/search?q=total+home+improvements&oq=total+home+improvements&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxiKBTIJCAAQIxgnGIoFMg0IARAuGK8BGMcBGIAEMg0IAhAuGK8BGMcBGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYPTIGCAcQRRg90gEINDY1N2owajSoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x4879ec08037981df:0x556fc7346425b416,1,,,,">
                            Reviews
                          </a>
                        </li>
                        <li onClick={() => toggleDropdown('')}>
                          <Link href="/contact-us">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dropdown-content">
                    <DropdownLinks />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </HeaderStyles>
  );
}
