import Button from './Button';

export default function Container() {
	return (
		<div className='w-[90%] h-auto flex items-center justify-evenly mt-16'>
			<div className='w-auto h-auto flex flex-col items-start'>
				<h1 className='text-white text-4xl'>Hi, I&apos;m Narek</h1>
				<p className='text-gray-600 max-w-[350px] mt-5'>
					<span className='text-gray-500'>React developer</span> with{' '}
					<span className='text-gray-500'>2 years</span> of experience. Skilled
					in building high-performance, scalable, and user-friendly UIs.
				</p>

				<Button />
			</div>

			<img className='w-[250px] h-auto rounded-full' src='me.jpg' alt='me' />
		</div>
	);
}
