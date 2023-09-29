'use client';
import React from 'react';

import { RxCrossCircled } from 'react-icons/rx';

const Modal = ({ isOpen, headerText = 'close', toggle, children }) => {
  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full h-screen overflow-x-auto flex-col justify-center items-center bg-white/20 backdrop-blur-xl  ${
        isOpen ? 'flex' : 'hidden'
      }`}
    >
      <div className='w-[90%] sm:max-w-sm md:max-w-md  border border-black/10 rounded-xl bg-white p-4'>
        <button
          className='w-fit border border-none bg-black text-white py-1 px-2 text-sm font-bold rounded-md cursor-pointer flex flex-row items-center gap-2 mr-0 ml-auto'
          onClick={toggle}
        >
          <RxCrossCircled size={'1rem'} /> {headerText}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;