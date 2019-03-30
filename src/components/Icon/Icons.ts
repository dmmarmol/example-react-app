/**
 * Mapping of Icon names to Icon Components from IcoMoon
 */
import { Linkedin, Home, Book, Github, Behance2, Twitter } from 'styled-icons/icomoon';

const Icons = {
    home: Home,
    book: Book,
    linkedin: Linkedin,
    github: Github,
    behance: Behance2,
    twitter: Twitter,
};

export type IconType = keyof typeof Icons;

export default Icons;
