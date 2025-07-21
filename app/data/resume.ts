export interface TechSkill {
  name: string;
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
  { name: 'HTML5' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'ReactJS' },
  { name: 'NextJS' },
  { name: 'VPS' },
  { name: 'HTML5' }
];

export const workExperience: ExperienceItem[] = [
  {
    period: '2018 - Present',
    title: 'Frontend Web Developer',
    company: 'Abc Company',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
  },
  {
    period: '2016 - 2018',
    title: 'Frontend Web Developer',
    company: 'CBA Company',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.'
  },
  {
    period: '2016 - 2018',
    title: 'Frontend Web Developer',
    company: 'CBA Company',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.'
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
