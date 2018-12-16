import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/technology-icons.css'
import { ListItem, ListItemContent, ListItemAction } from 'react-mdl'
import { FaGithub} from "react-icons/fa";

const ProjectItem = ({project}) => {

  const mapTechIcons = () => {
    return project.tech.map(tech => <em className={`icon-${tech} project-icon`}></em>)
  }

  return (
    <ListItem threeLine>
    <ListItemAction>
        {mapTechIcons()}
        <a href="#"><FaGithub/></a>
      </ListItemAction>
      <ListItemContent  subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
    </ListItem>
  );
}

export default ProjectItem;
