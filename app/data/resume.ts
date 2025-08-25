export interface TechSkill {
  name: string;
  id: number;
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
}

export interface EducationItem {
  period: string;
  title: string;
  school: string;
  description: string;
}

export const techStack: TechSkill[] = [
  { name: 'HTML5', id:1 },
  { name: 'CSS', id:2 },
  { name: 'JavaScript', id:3 },
  { name: 'ReactJS', id:4 },
  { name: 'NextJS', id:5 },
  { name: 'VPS', id:6 },
  { name: 'HTML5', id:7 }
];

export const workExperience: ExperienceItem[] = [
  {
    period: '2023 - Present',
    title: 'Reactjs Developer (freelancing/contract)',
    company: 'Trig8 Limited, Nigeria',
    description: "As a web developer for Trig8 Limited, I delivered targeted expertise, enhancing website performance by 50% and boosting organic traffic by 25% through precise, high-caliber development and strategic feature enhancements."
  },
  {
    period: '2021 - 2022',
    title: 'Frontend Web Developer | React.js Intern ',
    company: 'KodeHauz Solutions, Nigeria',
    description: 'As a React.js Intern at KodeHauz Solutions, I contributed directly to a Learning Management System (LMS) platform, where I resolved 40% of all critical bugs through meticulous code reviews, enhancing platform stability and user experience.'
  },
  {
    period: '2024 - present',
    title: 'Frontend Web Developer',
    company: 'PCDF, Nigeria',
    description: 'Pro bono web developer and maintainer for the Prince Orji Foundation (PCDF), an NGO providing critical financial, material, and educational support to underprivileged primary and secondary school children. Delivered a robust online presence to amplify their mission and reach.'
  }
];

export const education: EducationItem[] = [
  {
    period: '2005 - 2007',
    title: 'Higher National Diploma',
    school: 'Federal Polytechnic Offa',
    description: 'Business Administration And Management'
  },
  {
    period: '2002 - 2004',
    title: 'National Diploma',
    school: 'Federal Polytechnic Offa',
    description: 'Business Administration And Management'
  },
  {
    period: '1995 - 1995',
    title: 'Senior Secondary School Certificate',
    school: 'Iyeru Grammar School Offa',
    description: 'Offa LGA Kwara State, Nigeria.'
  },
  {
    period: '1995 - 1995',
    title: 'First Leaving School Certificate',
    school: 'St. Peter Primary School Ira',
    description: 'Oyun LGA Kwara State, Nigeria.'
  }
];
