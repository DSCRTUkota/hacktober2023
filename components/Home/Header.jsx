import React from 'react';

function Header() {
  return (
    <div className='flex flex-col justify-center items-center py-[10vh] text-center'>
      <div className='text-4xl font-semibold'>Contributor Profiles</div>
      <div className='text-base mt-2'>
        We ❤️ Open Source, Let&apos;s make your first contribution today! <br />{' '}
        Go to{' '}
        <a
          href='https://github.com/pushkarydv/hacktober2023/'
          className='underline underline-offset-2 text-sky-600'
          target='_blank'
          rel='noopener noreferrer'
        >
          @pushkarydv/hacktober2023
        </a>{' '}
        and make a small change adding your profile into
        contributors/profiles.json and make a PR.
      </div>
    </div>
  );
}

export default Header;
