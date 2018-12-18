import React from 'react';
import Style from 'style-it';

const ProjectImage = ({img}) => {

  console.log(img)

  return (
    <Style>
    {`
      #main:after {
        content: '';
        background: url(${img});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 50%;
        opacity: 0.4;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
      `
    }
    </Style>
  );
}

export default ProjectImage;
