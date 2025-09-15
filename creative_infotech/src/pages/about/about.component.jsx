import React from 'react';

import './about.styles.scss';

const AboutPage = () => (
  <div className='about-page'>
    <h1 className='title'>About Me</h1>
    <p className='description'>
      Hi, I’m Karan{" "}
      <span role="img" aria-label="waving hand">👋</span>{" "}
      I’m passionate about building great user experiences and scalable frontend systems.
    </p>

    <div className='links'>
      <a
        className='link-button'
        href='https://www.linkedin.com/in/karan-chhajed-317853177/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Visit my LinkedIn
      </a>

      <a className='link-button' href='mailto:karan0513c@gmail.com'>
        Send me an Email
      </a>
    </div>
  </div>
);

export default AboutPage;
