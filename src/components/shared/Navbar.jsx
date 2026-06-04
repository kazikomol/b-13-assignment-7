import React from 'react';
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';
import { Link } from 'react-router';
import logo from "../../assets/logo.png"

const Navbar = () => {
   return (
        <div className=" container mx-auto navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href={'/'}><RiHome2Line />Home </Link></li>
        <li>
        <Link href={'/timeline'}>Timeline</Link>
      </li>
        <li><Link href={'/stats'}>Stats</Link></li>
      </ul>
    </div>
    <img src={logo} alt="" />
  </div>
  <div className='navbar-end'>
    <ul className="menu menu-horizontal px-1">
      <li><NavLink  to={'/'} className={({ isActive} )=>{
          return `${ isActive ? "bg-[#244D3F] text-white" : "bg-white"}`}}><RiHome2Line />Home </NavLink></li>
      <li>
        <NavLink to={'/timeline'} className={({ isActive} )=>{
          return `${ isActive ? "bg-[#244D3F] text-white" : "bg-white"}`}}><RiTimeLine />Timeline</NavLink>
      </li>
      <li><NavLink to={'/stats'} className={({ isActive} )=>{
          return `${ isActive ? "bg-[#244D3F] text-white" : "bg-white"}`}}><TfiStatsUp />Stats</NavLink></li>
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;