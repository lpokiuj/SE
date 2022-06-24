import React from 'react';
import Layout from '../components/Layout';
import Status from '../components/Status';
import Profile from '../components/Profile';

const profile = [{
	"avatar": "/profile.jpg",
	"title": "Software engineer",
	"name": "Martinus Andika Novanawa",
	"email": "martinus.novanawa@binus.ac.id",
}]

const data = [
	{ "label": "Calories", "stats": "-", "progress": 0, "color": "red", "icon": "flame" },
	{ "label": "Fat", "stats": "-", "progress": 0, "color": "blue", "icon": "droplet" },
	{ "label": "Carbs", "stats": "-", "progress": 0, "color": "green", "icon": "leaf" },
	{ "label": "Protein", "stats": "-", "progress": 0, "color": "orange", "icon": "dna" }
]

export default function HeroBackground() {
	return (
		<Layout>
			<Profile data={profile} />
			<Status data={data} />
		</Layout>
	);
}