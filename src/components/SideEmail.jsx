import React from 'react';

export default function SideEmail() {
  return (
    <div className="flex basis-['content']">
      <div className="basis-[10%]">
        <p className='text-off-grey font-sfmono mt-0 mx-0 mb-[20px] writing-vlr cursor-pointer side-hover' onClick={
          () => { window.location = 'mailto:chen.andy18@gmail.com'; }}>
          chen.andy18@gmail.com
        </p>
        <div className='line ml-[40%]' />
      </div>
    </div>
  );
}
