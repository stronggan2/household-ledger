import React from 'react';
import '../Style/Template.scss'

const Template = ({children}) => {
  return (
    <div className='Template'>
      <div className='MoneyComeOut'>가계부</div>
      <div className='Content'>{children}</div>
    </div>
  );
};

export default Template;