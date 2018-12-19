import React from 'react';
import Style from 'style-it';

const AvatarVisibility = ({visibility}) => {

  return(
    <Style>
    {`
      #small-contact-list .mdl-list__item-primary-content > span {
        visibility: ${visibility};
      }
      `
    }
    </Style>
  )

}

export default AvatarVisibility
