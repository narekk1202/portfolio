export default function Button() {
	return (
		<a href='cv.pdf' download='cv'>
			<button className='mt-8 rounded-full hover:before:bg-redborder-red-500 relative h-[45px] w-40 overflow-hidden border border-[#B391FF] bg-white px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#B391FF] before:transition-all before:duration-500 hover:text-white hover:shadow-[#B391FF] hover:before:left-0 hover:before:w-full'>
				<span className='relative z-10 font-bold'>Download CV</span>
			</button>
		</a>
	);
}
