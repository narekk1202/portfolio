import type { MetaFunction } from '@remix-run/node';
import Container from '~/components/Container';
import Header from '~/components/Header';
import SkillsContainer from '~/components/SkillsContainer';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Narek Dunamalyan' },
		{ name: 'description', content: 'Welcome to my portfolio!' },
	];
};

export default function Index() {
	return (
		<div className='w-full h-full flex flex-col items-center'>
			<Header />
			<Container />
			<SkillsContainer />
		</div>
	);
}
