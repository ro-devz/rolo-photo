import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

// Social Links Type
export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

// Navigation Links Type
export interface NavLink {
	text: string;
	href: string;
}

export default {
	// Site Metadata
	title: 'Japon Loic et Romane',
	favicon: 'favicon.ico',
	owner: 'Romane Devezeaux',
	profileImage: 'profile.webp',


	// ✅ Navigation Links
	navLinks: [
		{ text: 'Home', href: '/' },
		{ text: 'View Gallery', href: '/collections' }, // ✅ Correct path
		{ text: 'About', href: '/about' },
	] as NavLink[],
};
