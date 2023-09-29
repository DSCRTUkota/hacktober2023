'use client';
import React from 'react';

import ProfileCard from './ProfileCard';

import profiles from '@/contributors/profiles.json';

export default function RenderProfiles() {

  // Sample JSON data to cosntruct a profile card

  // const profileData = {
  //   name: 'Pushkar Yadav',
  //   description: 'Dev | Lead @GDSC-RTU',
  //   github: 'pushkarydv',
  //   twitter: 'pushkaryadavin',
  //   linkedin: 'pushkarydv',
  //   portfolio: 'pushkaryadav.in',
  // };

  return (
    <div>
      <div className='grid grid-cols-1 max-w-xs mx-auto sm:max-w-full sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
        {/* Itterate over profiles json data to make cards for each */}

        {profiles.map((proifle, index) => (
          <ProfileCard profileData={proifle} key={index} />
        ))}
      </div>
    </div>
  );
}
