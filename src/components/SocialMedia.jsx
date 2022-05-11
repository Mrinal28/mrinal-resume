import React from 'react';
import { BsLinkedin, BsGithub, BsFillFileEarmarkArrowDownFill } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div title="Download Resume" onClick={() => window.open('https://downloads-server-alpha.mrinalmohan.com/0:/Mrinal%20Mohan%20Resume.pdf', '_blank')}>
      <BsFillFileEarmarkArrowDownFill />
    </div>
    <div title="Linked In" onClick={() => window.open('https://www.linkedin.com/in/mrinal-mohan/', '_blank')}>
      <BsLinkedin />
    </div>
    <div title="Github" onClick={() => window.open('https://github.com/Mrinal28', '_blank')}>
      <BsGithub />
    </div>
  </div>
);

export default SocialMedia;
