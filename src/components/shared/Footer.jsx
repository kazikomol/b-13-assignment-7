import React from 'react';
import logoxl from "../../assets/logo-xl.png";
import inst from "../../assets/instagram.png";
import fb from "../../assets/facebook.png";
import twit from "../../assets/twitter.png";

const Footer = () => {
    return (
        <div className='container mx-auto px-4'>
            <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10 flex flex-col items-center">
  <aside className="flex flex-col items-center text-center">
   <img src={logoxl} alt=''></img>
    <p className="font-bold max-w-md mt-2">
     Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
     
    </p>
    <p className="mt-2">Social Links</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
       <img src={inst}  alt=''></img>
      </a>
      <a>
        <img src={fb} alt=''></img>
      </a>
      <a>
        <img src={twit} alt=''></img>
      </a>
    </div>
  </nav>
  <div className="flex w-full flex-col">
  
  <div className="divider"></div>
  <div className="flex flex-col gap-4 text-center md:flex-row md:justify-between w-full">
    <h2>© 2026 KeenKeeper. All rights reserved.</h2>
  <div>
    <div>
      <ul className='flex justify-center md:justify-between gap-3.5 flex-wrap'>
        <li>Privacy</li>
        <li>Terms of service</li>
        <li>Cookies</li>
      </ul>
    </div>
  </div></div>
  
</div>

</footer>
        </div>
    );
};

export default Footer;