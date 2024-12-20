import Button from './Button';

export default function Container() {
	return (
		<div className='w-[90%] h-auto flex max-[680px]:flex-col gap-5 items-center justify-evenly mt-16'>
			<div className='w-auto h-auto flex flex-col items-start max-[680px]:items-center'>
				<h1 className='text-white text-4xl'>Hi, I&apos;m Narek</h1>
				<p className='text-gray-600 max-w-[350px] mt-5 max-[680px]:text-center'>
					<span className='text-gray-500'>React developer</span> with{' '}
					<span className='text-gray-500'>4 years</span> of experience. Skilled
					in building high-performance, scalable, and user-friendly UIs.
				</p>

				<Button />
			</div>

			<img className='w-[250px] h-auto rounded-full' src='me.jpg' alt='me' />
		</div>
	);
}
