import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin, BsGit } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        
        <a href="https://www.linkedin.com/in/alireza547/" target="_blank" rel="noopener noreferrer">
          <div>
            <BsLinkedin />
          </div>
        </a>
        
        <a href="https://github.com/AliRezaBmeDu" target="_blank" rel="noopener noreferrer">
          <div>
            <BsGithub />
          </div>
        </a>

        <a href="https://wellfound.com/u/mohammad-ali-reza" target="_blank" rel="noopener noreferrer">
          <div>
            <FaAngellist />
          </div>
        </a>

        <a href="https://twitter.com/share_insider" target="_blank" rel="noopener noreferrer">
          <div>
            <BsTwitter />
          </div>
        </a>

    </div>
  )
}

export default SocialMedia