import React from 'react';
import DamParkLogo from '../images/DamParklogo.svg';

const LogoMap = () => (
  <div>
      <img
          src={DamParkLogo}
          style={{
              width: '70%',
              marginLeft: '60px',
              marginTop: '10px',
              height: 'auto',
              alt: 'logo_Dampark',
              alignItem: 'justify',
              background: 'none',
              position: 'absolute',
              top: 0,
              zIndex: 1,
              textAlign: 'center',
            }}
        />
    </div>
);

export default LogoMap;
