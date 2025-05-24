import React from 'react';
import { ProjectContent } from '@/types/ProjectContent';

type Alignment = 'L' | 'R';

interface ProjectProps {
  data: ProjectContent;
  alignment: Alignment;
}

//eslint-disable-next-line 
const Project: React.FC<ProjectProps> = ({ data, alignment }) => {
  return (
    <></>
  );
};

export default Project;
