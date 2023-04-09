import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const ResumeButton = () => {
  fetch('/resume.pdf')
    .then(response => {
      response.blob()
        .then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          const alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Andy_Chen_Resume.pdf';
          alink.click();
        });
    });
}

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center p-2 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-10xl mx-auto">
        <Link
          to='/'
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
            <img src={logo} alt='logo' className='w-12 h-12 object-contain' />
        </Link>
        <ul className="list-none sm:hidden flex flex-row gap-6 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-highlight" : "text-offWhite"} hover:text-highlight text-[12px] font-sfmono cursor-pointer pt-0.5`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}><span className='text-highlight'>{link.number}. </span>{link.title}</a>
            </li>
          ))}
          <li>
            <button className='text-highlight hover:bg-highlight hover:bg-opacity-25 border border-highlight rounded py-1.5 px-4 text-[12px] font-sfmono'  type='submit' onClick={ResumeButton}>Resume</button>
          </li>
        </ul>



        <div className='hidden sm:flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex items-center flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-highlight" : "text-offWhite"} font-sfmono cursor-pointer text-[14px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                    }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <button className='text-highlight hover:bg-highlight hover:bg-opacity-25 border border-highlight rounded py-2 px-4 text-[12px] font-sfmono' type='submit' onClick={ResumeButton}>Resume</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
