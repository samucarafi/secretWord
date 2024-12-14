import { useState, useRef } from "react";
import "./Game.css";
import PropTypes from "prop-types";

const Game = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null)
  const handleSubmit =(e)=>{
    e.preventDefault()
    verifyLetter(letter)
    //apagar letra do input
    setLetter('')
    //voltar foco para input
    letterInputRef.current.focus()
  }
  return (
    <div className="Game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blackSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente advinha uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};

Game.propTypes = {
  verifyLetter: PropTypes.func.isRequired,
  pickedWord: PropTypes.string.isRequired,
  pickedCategory: PropTypes.string.isRequired,
  letters: PropTypes.array.isRequired,
  guessedLetters: PropTypes.array.isRequired,
  wrongLetters: PropTypes.array.isRequired,
  guesses: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Game;
