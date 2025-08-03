import type { JSX } from 'react' // ✅ правильно подключает JSX.Element

export interface NavigationLink {
	label: string
	href: string
}

export interface NewName {
	name: string
	text0: string
}

export interface Profile {
	name: string
	info: string
}

export interface About {
	text1: string
	text2: string
}

export interface Project {
	title: string
	subtitle: string
	image: string
}

export interface Skill {
	icon: JSX.Element
	name: string
	experience: string
}

export interface Achievement {
	title: string
	award: string
	description: string
}

export interface Testimonial {
	name: string
	title: string
	quote: string
	image: string
}

export interface SocialMediaLink {
	href: string
	icon: JSX.Element
}
