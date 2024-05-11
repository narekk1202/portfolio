type Props = {
	name: string;
	image: JSX.Element;
};

export default function SkillCard(props: Props) {
	return (
		<div className='w-[200px] h-[200px] flex flex-col gap-y-2 items-center justify-center rounded-3xl'>
			{props.image}
			<span className='font-semibold text-white'>{props.name}</span>
		</div>
	);
}
