import React from 'react';
import links from '../../custom/data';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {links.map((item, index) => {
      const { id, href, text } = item;
      return (
        <a
          href={href}
          key={id}
          className="app__navigation-dot"
          style={active === text ? { backgroundColor: '#313BAC' } : {}}
        />
      );
    })}
  </div>
);

export default NavigationDots;
