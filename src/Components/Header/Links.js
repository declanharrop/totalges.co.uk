import Link from 'next/link';
import { useContext } from 'react';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { MenuContext } from '../../Context/MenuContext';

export default function Links() {
  const { toggleDropdown } = useContext(MenuContext);
  return (
    <div className="links">
      <ul>
        {/* <li
          className="services-li"
          onClick={() => toggleDropdown('services')}
          onMouseEnter={() => toggleDropdown('services')}
        >
          <a>Services</a>
          <div className="icon">
            <ExpandMoreRoundedIcon sx={{ fontSize: '30px' }} />
          </div>
        </li> */}
        <li onClick={() => toggleDropdown('')}>
          <Link href="/case-studies">Case Studies</Link>
        </li>
        <li onClick={() => toggleDropdown('')}>
          <Link href="/news">News</Link>
        </li>
        <li onClick={() => toggleDropdown('')}>
          <Link href="/about">About</Link>
        </li>
        <li onClick={() => toggleDropdown('')}>
          <a href="https://www.google.com/search?q=total+home+improvements&oq=total+home+improvements&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxiKBTIJCAAQIxgnGIoFMg0IARAuGK8BGMcBGIAEMg0IAhAuGK8BGMcBGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYPTIGCAcQRRg90gEINDY1N2owajSoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x4879ec08037981df:0x556fc7346425b416,1,,,,">
            Reviews
          </a>
        </li>
      </ul>
    </div>
  );
}
