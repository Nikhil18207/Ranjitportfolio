import React from 'react';

const BioPreview = () => {
  return (
    <section 
      id="bio-preview"
      className="bg-[#000000] py-[100px] md:py-[150px] w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#000000',
      }}
    >
      <div className="container px-8 md:px-[60px] lg:px-[80px] text-center">
        <h2 
          className="text-white font-bold tracking-[0.2em] uppercase leading-[1.1]"
          style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Daniel Russo
        </h2>
      </div>
    </section>
  );
};

export default BioPreview;