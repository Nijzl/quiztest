import QuizStats from "../components/QuizStats";
import TriviaItem from "../components/TriviaItem";
import EndScreen from "../components/EndScreen";
import { useState } from "react";
import triviaData from "../helpers/trivia-data";

function Quiz(){

    const [gameState, setGameState] = useState({
        score: 0,
        triviaIndex: 0,
        isGameOver: false
    });

    const { score, triviaIndex, isGameOver } = gameState;
    const questionNumber = triviaIndex + 1;
    const numQuestions = triviaData.length;

    const triviaQuestion = triviaData[triviaIndex];
    const {correct_answer, incorrect_answers, question} = triviaQuestion;


    return(
        <>
            <QuizStats score={ score } questionNumber={ questionNumber } totalQuestions={ numQuestions }/>
            <TriviaItem/>
            <EndScreen score={ score } bestScore={0}/>
        </>
    );
}

export default Quiz;