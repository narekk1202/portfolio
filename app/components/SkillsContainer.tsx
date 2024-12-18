import {
	RiNextjsFill,
	RiReactjsLine,
	RiRemixRunFill,
	RiTailwindCssFill,
} from 'react-icons/ri';
import { SiJavascript, SiReactrouter, SiTypescript } from 'react-icons/si';
import Heading from './Heading';
import SkillCard from './SkillCard';

export default function SkillsContainer() {
	return (
		<div className='w-[90%] h-auto flex flex-col items-center mt-20'>
			<Heading />

			<div className='w-full flex flex-wrap items-center justify-center mt-5 gap-4'>
				<SkillCard
					name='JavaScript'
					image={
						<SiJavascript className='w-10 h-10 text-yellow-500 bg-black' />
					}
				/>
				<SkillCard
					name='TypeScript'
					image={<SiTypescript className='w-10 h-10 text-blue-500 bg-black' />}
				/>
				<SkillCard
					name='React'
					image={<RiReactjsLine className='w-10 h-10 text-blue-500 bg-black' />}
				/>
				<SkillCard
					name='TailwindCSS'
					image={<RiTailwindCssFill className='w-10 h-10 text-[#38BDF8]' />}
				/>
				<SkillCard
					name='Next.js'
					image={<RiNextjsFill className='w-10 h-10 text-white' />}
				/>
				<SkillCard
					name='Remix'
					image={<RiRemixRunFill className='w-10 h-10 text-white' />}
				/>
				<SkillCard
					name='React Router'
					image={<SiReactrouter className='w-10 h-10 text-red-500' />}
				/>
			</div>
		</div>
	);
}
