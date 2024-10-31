type KeyboardProps = {
	activeLetters: string[];
	inactiveLetters: string[];
	addGuessedLetter: (letter: string) => void;
	disabled?: boolean;
};

const KEYS = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

const Keyboard = ({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false }: KeyboardProps) => {
	const button =
		'border-[3px] border-solid border-black aspect-square text-[2.5rem] font-bold p-[0.5rem] text-black rounded-md hover:[&:not(:disabled)]:bg-[hsl(200,100%,75%)] focus:[&:not(:disabled)]:bg-[hsl(200,100%,75%)]';
	const activeButton = 'bg-[hsl(200,100%,50%)] text-white';

	return (
		<div className='grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-[0.5rem]'>
			{KEYS.map((key) => {
				const isActive = activeLetters.includes(key);
				const isInactive = inactiveLetters.includes(key);

				return (
					<button
						disabled={isInactive || isActive || disabled}
						onClick={() => addGuessedLetter(key)}
						key={key}
						className={`${button} ${isActive ? activeButton : ''} ${isInactive ? 'opacity-[0.3]' : ''} `}>
						{key.toUpperCase()}
					</button>
				);
			})}
		</div>
	);
};

export default Keyboard;
