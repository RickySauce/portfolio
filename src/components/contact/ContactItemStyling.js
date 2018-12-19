import React from 'react';
import Style from 'style-it';

const ContactItemStyling = (props) => {

  return(
    <Style>
    {`
      .mdl-list__item-avatar {
          height: ${props.height}px;
          width: ${props.width}px;
      }
      .mdl-list__item-avatar:hover {
          height: ${props.height + 5}px;
          width: ${props.width + 5}px;
      }
      `
    }
    </Style>
  )

}

export default ContactItemStyling
