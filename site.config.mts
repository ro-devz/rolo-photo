import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';
// Types
export interface SocialLink {
    name: string;
    url: string;
    icon: AstroInstance;
}
export interface NavLink {
    text: string;
    href: string;
}
// ✅ Named Export: Navigation Links
export const navLinks: NavLink[] = [
    { text: 'Home', href: '/' },
    { text: 'View Gallery', href: '/collections' },
    { text: 'About', href: '/about' },
];

// ✅ Default Export: Site Metadata
export default {
    title: 'Japon  R&L',
    favicon: '/favicon.ico',
    owner: 'Romane & Loic',
    profileImage: '/profile.webp',
};