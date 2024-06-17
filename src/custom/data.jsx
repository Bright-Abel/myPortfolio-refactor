import { nanoid } from 'nanoid';
import { images } from '../constant';
const links = [
  { id: nanoid(), href: '#home', text: 'home', className: 'icon-home' },
  {
    id: nanoid(),
    href: '#about',
    text: 'about',
    className: 'icon-user-following',
  },
  {
    id: nanoid(),
    href: '#project',
    text: 'project',
    className: 'icon-briefcase',
  },
  {
    id: nanoid(),
    href: '#skills',
    text: 'skills',
    className: 'icon-layers',
  },
  {
    id: nanoid(),
    href: '#contact',
    text: 'contact',
    className: 'icon-call-out',
  },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML',
    img: images.html,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    img: images.javascript,
    // icon: <FaJs className="h-16 w-16 text-teal-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'Redux',
    img: images.redux,
    // icon: <FaJs className="h-16 w-16 text-teal-500" />,
    text: '',
  },
  {
    id: nanoid(),
    title: 'React JS',
    img: images.react,
    // icon: <FaReact className="h-16 w-16 text-teal-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Git',
    img: images.git,
    // icon: <FaReact className="h-16 w-16 text-teal-500" />,
    text: '',
  },
  {
    id: nanoid(),
    title: 'Python',
    img: images.python,
    // icon: <FaReact className="h-16 w-16 text-teal-500" />,
    text: '',
  },
];

export const about = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    // icon: <FaHtml5 className="h-16 w-16 text-teal-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    // icon: <FaJs className="h-16 w-16 text-teal-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    // icon: <FaReact className="h-16 w-16 text-teal-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const myProject = [
  {
    id: nanoid(),
    text: 'All',
    tool: 'All',
  },
  {
    id: nanoid(),
    text: 'Web App',
    tool: 'React',
  },
  {
    id: nanoid(),
    text: 'Web Game',
    tool: 'javascript',
  },
];

export default links;
