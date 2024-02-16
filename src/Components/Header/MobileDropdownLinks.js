import Link from 'next/link';
import { useContext } from 'react';
import { MenuContext } from '../../Context/MenuContext';

export default function MobileDropdownLinks() {
  const { toggleDropdown, toggleMenu } = useContext(MenuContext);
  return (
    <>
      <div className="dropdown-section">
        <h3>Windows and Doors</h3>
        <div className="divider" />
        <ul>
          <li
            onClick={() => {
              toggleDropdown('');
              toggleMenu('');
            }}
          >
            <Link href="/services/standard-windows">
              Standard Casement Windows
            </Link>
          </li>
          <li
            onClick={() => {
              toggleDropdown('');
              toggleMenu('');
            }}
          >
            <Link href="/services/flush-casement-windows">
              Flush Casement Windows
            </Link>
          </li>
          <li
            onClick={() => {
              toggleDropdown('');
              toggleMenu('');
            }}
          >
            <Link href="/services/sash-windows">Sash Windows</Link>
          </li>
          <li
            onClick={() => {
              toggleDropdown('');
              toggleMenu('');
            }}
          >
            <Link href="/services/composite-upvc-doors">
              Composite & UPVC Doors
            </Link>
          </li>
          <li
            onClick={() => {
              toggleDropdown('');
              toggleMenu('');
            }}
          >
            <Link href="/services/french-doors">French Doors</Link>
          </li>
          <li
            onClick={() => {
              toggleDropdown('');
              toggleMenu('');
            }}
          >
            <Link href="/services/bi-fold-doors">Bi-Fold Doors</Link>
          </li>
        </ul>
      </div>
      <div className="dropdown-section">
        <h3>Upgrades</h3>
        <div className="divider" />
        <ul>
          <li
            onClick={() => {
              toggleDropdown('');
              toggleMenu('');
            }}
          >
            <Link href="/services/conservatories">
              Conservatories & Upgrades
            </Link>
          </li>
          <li
            onClick={() => {
              toggleDropdown('');
              toggleMenu('');
            }}
          >
            <Link href="/services/fascias">Fascias, Soffits & Guttering</Link>
          </li>
          <li
            onClick={() => {
              toggleDropdown('');
              toggleMenu('');
            }}
          >
            <Link href="/services/cladding">Cladding</Link>
          </li>
          <li
            onClick={() => {
              toggleDropdown('');
              toggleMenu('');
            }}
          >
            <Link href="/services/carports-verandas">Carports & Verandas</Link>
          </li>
          <li
            onClick={() => {
              toggleDropdown('');
              toggleMenu('');
            }}
          >
            <Link href="/services/door-canopies">Door Canopies</Link>
          </li>
        </ul>
      </div>
      <div className="dropdown-section">
        <h3>Other</h3>
        <div className="divider" />
        <ul>
          <li
            onClick={() => {
              toggleDropdown('');
              toggleMenu('');
            }}
          >
            <Link href="/services/solar">Solar, Batteries & Heat Pumps</Link>
          </li>
          <li
            onClick={() => {
              toggleDropdown('');
              toggleMenu('');
            }}
          >
            <Link href="/services/garden-rooms">Garden Rooms</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
