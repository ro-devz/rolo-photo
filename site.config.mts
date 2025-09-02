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

// ✅ Named Export: Social Links
export const socialLinks: SocialLink[] = [
	{
		name: 'GitHub',
		url: 'https://github.com/rockem/astro-photography-portfolio',
		icon: Github,
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com',
		icon: Instagram,
	},
];

// ✅ Default Export: Site Metadata
export default {
	title: 'SR',
	favicon: 'favicon.ico',
	owner: 'Sara Richard',
	profileImage: 'profile.webp',
};
