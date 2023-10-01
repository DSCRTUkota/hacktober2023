'use client';
import React, { useState } from 'react';

import { BsInfoCircle } from 'react-icons/bs';
import Modal from '../global/Modal';

function Header() {

  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);

  const toggleInstructions = () => {
    setIsInstructionsOpen(!isInstructionsOpen);
  }

  return (
    <div className='flex flex-col justify-center items-center py-[10vh]'>
      <div className='text-2xl font-semibold text-center'>Contributor Profiles</div>
      
      <div className='text-base mt-2 text-center'>
        We ❤️ Open Source, Let&apos;s make your first contribution today! <br />{' '}
      </div>
      <button className='flex flex-row justify-center items-center mt-2 gap-2 py-1 px-3 rounded-lg bg-sky-300 outline-2 outline-sky-600 border-none text-sky-950 font-semibold transition-all' onClick={toggleInstructions}>
        <BsInfoCircle /> HOW
      </button>

      <Modal toggle={toggleInstructions} isOpen={isInstructionsOpen}>

      <div className='text-lg font-bold'>What&apos;s Purpose of this repo?</div>
      <p>
        This is a repository to help beginners get started with Open Source
        during{' '}
        <a
          href='https://hacktoberfest.com/'
          className='underline underline-offset-2 text-sky-600'
          target='_blank'
          rel='noopener noreferrer'
        >
          Hacktoberfest
        </a>
        .
        PS: Hacktoberfest is a month-long celebration of open source software in
        partnership with Github . 
      </p>

      <div className='text-lg mt-4 font-bold'>How can i contribute?</div>
      <p>
        This is a beginner-friendly repo, we&apos;ve made a simple website where you can add your profile card and make your first contribution to open source and GitHub.
        <br />
        Go to{' '}
        <a
          href='https://github.com/DSCRTUkota/hacktober2023/'
          className='underline underline-offset-2 text-sky-600'
          target='_blank'
          rel='noopener noreferrer'
        >
          @DSCRTUkota/hacktober2023
        </a>{' '}
        and make a small change adding your profile into
        contributors/profiles.json and make a PR.

        <br />
        You will find all the instructions there itself into README.md file.
      </p>
      
      </Modal>
    </div>
  );
}

export default Header;
