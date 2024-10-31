import { useCallback, useEffect, useState } from 'react';
import words from './wordList.json';
import HangManDrawing from './HangManDrawing';
import HangManWords from './HangManWords';
import Keyboard from './Keyboard';

const getWord = () => {
	return words[Math.floor(Math.random() * words.length)];
};

const App = () => {
	const [wordsToGuess, setWordsToGuess] = useState(getWord);
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	const inCorrectLetters = guessedLetters.filter((letter) => !wordsToGuess.includes(letter));

	const isLoser = inCorrectLetters.length >= 6;
	const isWinner = wordsToGuess.split('').every((letter) => guessedLetters.includes(letter));

	const addGuessedLetter = useCallback(
		(letter: string) => {
			if (guessedLetters.includes(letter) || isLoser || isWinner) return;

			setGuessedLetters((currentLetters) => [...currentLetters, letter]);
		},
		[guessedLetters, isLoser, isWinner]
	);
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;

			if (key.match(/^(a-z)$/)) return;

			e.preventDefault();
			addGuessedLetter(key);
		};

		document.addEventListener('keypress', handler);

		return () => {
			document.removeEventListener('keypress', handler);
		};
	}, [guessedLetters]);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;
			if (key !== 'Enter') return;

			e.preventDefault();
			setGuessedLetters([]);
			setWordsToGuess(getWord());
		};

		document.addEventListener('keypress', handler);

		return () => {
			document.removeEventListener('keypress', handler);
		};
	}, []);

	console.log(wordsToGuess);

	return (
		<div className='max-w-[800px] flex flex-col gap-[2rem] mt-0 mx-auto items-center'>
			<div className='text-[2rem] text-center '>
				{isWinner && 'Winner! - Refresh to try again'}
				{isLoser && 'Nice Try! - Refresh to try again'}
			</div>
			<HangManDrawing numberOfGuesses={inCorrectLetters.length} />
			<HangManWords reveal={isLoser} guessedLetters={guessedLetters} wordsToGuess={wordsToGuess} />
			<div className='self-stretch'>
				<Keyboard
					disabled={isWinner || isLoser}
					activeLetters={guessedLetters.filter((letter) => wordsToGuess.includes(letter))}
					inactiveLetters={inCorrectLetters}
					addGuessedLetter={addGuessedLetter}
				/>
			</div>
		</div>
	);
};

export default App;
