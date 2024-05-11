import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
	return (
		<div className='w-full h-auto flex items-center justify-center mt-10 gap-x-4'>
			<a href='https://github.com/narekk1202' target='blank'>
				<FaGithub className='text-[#B391FF] w-6 h-6 cursor-pointer' />
			</a>
			<a
				href='https://www.linkedin.com/in/narek-dunamalyan-6a41a8298/'
				target='blank'
			>
				<FaLinkedin className='text-[#B391FF] w-6 h-6 cursor-pointer' />
			</a>
		</div>
	);
}
