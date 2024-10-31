const head = (
	<div className='w-[50px] h-[50px] rounded-full border-[10px] border-solid border-black absolute top-[50px] right-[-20px]'></div>
);
const body = <div className='w-[10px] h-[100px] absolute top-[99px] right-[0px] bg-black'></div>;

const rightArm = (
	<div className='w-[100px] h-[10px] absolute top-[150px] right-[-100px] bg-black rotate-[-30deg] origin-bottom-left'></div>
);

const leftArm = (
	<div className='w-[100px] h-[10px] absolute top-[150px] right-[10px] bg-black rotate-[30deg] origin-bottom-right'></div>
);

const rightLeg = (
	<div className='w-[100px] h-[10px] absolute top-[190px] right-[-90px] bg-black rotate-[60deg] origin-bottom-left'></div>
);

const leftLeg = (
	<div className='w-[100px] h-[10px] absolute top-[190px] right-[0px] bg-black rotate-[-60deg] origin-bottom-right'></div>
);

const bodyParts = [head, body, rightArm, leftArm, rightLeg, leftLeg];

type HangManDrawingProps = {
	numberOfGuesses: number;
};

const HangManDrawing = ({ numberOfGuesses }: HangManDrawingProps) => {
	return (
		<div className='relative'>
			{bodyParts.slice(0, numberOfGuesses)}
			<div className=' h-[50px] w-[10px] bg-black absolute top-0 right-0'></div>

			<div className='h-[10px] w-[250px] bg-black ml-[120px]'></div>

			<div className=' h-[400px] w-[10px] bg-black ml-[120px]'></div>
			<div className='h-[10px] w-[250px] bg-black'></div>
		</div>
	);
};

export default HangManDrawing;
