'use client';
import React, { useEffect } from 'react';

import { initMessageGator } from 'message-gator';

function MessageUs() {
  
  useEffect(() => {

    // Replace the userId with your own from https://mg.pushkaryadav.in

    initMessageGator({
      userId: `8d5ca0c4-1c9f-451b-9dbd-a824017ca9f1`,
      customCSS: '#cta-messsage-gator{background: #242b2e; color: #fff;border:none; border-radius: 25px; padding: 10px 20px; font-size: 16px; font-weight: 600; position: fixed; bottom: 20px; right: 20px; z-index: 9999; cursor: pointer;} #cta-messsage-gator:active{border:none;}',
      buttonText: 'Drop a Message!',
    });
  }, []);

  return <></>;
}

export default MessageUs;
