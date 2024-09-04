import React from 'react';

const Title = ({ title }) => {
  return (
    <div>  
      <div className='font-titleFont py-10'> {/* Reduced padding from py-20 to py-10 */}
        <h1 className="my-10 text-center text-4xl capitalize">{title}</h1>
      </div>
    </div>
  );
}

export default Title;
