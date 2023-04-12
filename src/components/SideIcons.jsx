import React from 'react';
import GitHubIcon from '../assets/github';
import LinkedinIcon from '../assets/linkedin';
import InstagramIcon from '../assets/instagram';

export default function SideIcons() {
  return (
    <div className="flex">
      <div className="basis-[10%] basis-[content]">
        <ul>
          <li className='mx-0 mt-0 mb-[20px]'>
            <a href='https://github.com/andychen97'
              target='_blank'
              rel="noreferrer">
              <GitHubIcon />
            </a>
          </li>
          <li className='mx-0 mt-0 mb-[20px]'>
            <a href='https://www.linkedin.com/in/andy-chen907/'
              target='_blank'
              rel="noreferrer">
              <LinkedinIcon />
            </a>
          </li>
          <li className='mx-0 mt-0 mb-[20px]'>
            <a href='https://www.instagram.com/andyy_chenn/'
              target='_blank'
              rel="noreferrer">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <div className='line' />
          </li>
        </ul>
      </div>
    </div>
  );
}
