import React from 'react';
import Link from 'next/link';
import HeaderTabs from '../components/AppHeader';

const user = {
	name: 'Martinus Andika Novanawa',
	email: 'martinus.novanawa@binus.ac.id',
	image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
}
const tabs = ['Home', 'Meal Plan', 'Grocery List', 'Price List', 'Article', 'News'];

export default function HeroBackground() {

	return (
		<div>
			<HeaderTabs user={user} tabs={tabs} />
			
		</div>
	);
}