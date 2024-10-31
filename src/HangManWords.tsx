type HangManWordProps = {
	guessedLetters: string[];
	wordsToGuess: string;
	reveal?: boolean;
};

const HangManWords = ({ guessedLetters, wordsToGuess, reveal = false }: HangManWordProps) => {
	return (
		<div className='flex gap-[0.25em] text-[6rem] font-bold uppercase font-mono'>
			{wordsToGuess.split('').map((letter, index) => (
				<span className='border-b-[0.1em] border-b-solid border-b-black' key={index}>
					<span
						className={`${guessedLetters.includes(letter) || reveal ? 'opacity-100' : 'opacity-0'} ${
							!guessedLetters.includes(letter) && reveal ? 'text-red-700' : 'text-black'
						}`}>
						{letter}
					</span>
				</span>
			))}
		</div>
	);
};

export default HangManWords;
