import React from 'react';

import { refrences } from '@/utils/constants';

function ExternalNavigate(props) {
  return (
    <a
      href={`${props.href}?ref=${refrences.website}`}
      rel='noopener noreferrer'
      className={`no-underline text-inherit transition-all ${props.className}`}
      target='_blank'
    >
      {props.children}
    </a>
  );
}

export default ExternalNavigate;
