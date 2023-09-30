import React from 'react';

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { IoNavigate } from 'react-icons/io5';

import ExternalNavigate from '../global/ExternalNavigate';

function ProfileCard({ profileData }) {
  return (
    <div className='pb-8'>
      <div className='relative pt-10 pb-2 px-2 bg-gray-950 text-white rounded-md'>
        {/* Profile Image : GitHub logo */}
        <img
          src={`https://github.com/${profileData?.github ? profileData?.github : "ghost"}.png`}
          alt='profile'
          className='absolute ring-4 ring-gray-950 -top-8 h-16  rounded-full left-1/2 -translate-x-1/2'
        />

        {/* Profile Content */}
        <div className='text-center'>
          <div className='text-lg font-semibold'>{profileData.name}</div>
          <div className='text-sm font-medium'>{profileData?.description ? profileData?.description : "</>"}</div>

          {/* Any Maintainer Please use chaining and check for fallbacks for adding New Features */}
          <div className='flex justify-center items-center gap-2 text-2xl my-2'>
            {profileData?.github && profileData?.github.trim() != '' && (
              <ExternalNavigate
                href={`https://github.com/${profileData?.github}`}
              >
                <AiFillGithub />
              </ExternalNavigate>
            )}

            {profileData?.linkedin && profileData?.linkedin.trim() != '' && (
              <ExternalNavigate
                href={`https://linkedin.com/in/${profileData?.linkedin}`}
              >
                <AiFillLinkedin />
              </ExternalNavigate>
            )}

            {profileData?.twitter && profileData?.twitter.trim() != '' && (
              <ExternalNavigate
                href={`https://twitter.com/${profileData?.twitter}`}
              >
                <AiFillTwitterSquare />
              </ExternalNavigate>
            )}

            {profileData?.portfolio && profileData?.portfolio.trim() != '' && (
              <ExternalNavigate href={profileData?.portfolio}>
                <IoNavigate />
              </ExternalNavigate>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
