import GameAPI from "./GameAPI";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import useGetTriviaData from "../components/hooks/use-get-trivia-data";

function PlayQuizAPIPage() {

    const [isLoading, errorMessage, data] = useGetTriviaData(5, "easy");

    let contents;
    if (isLoading) contents = <LoadingSpinner/>;
    else if (errorMessage !== "") contents = <ErrorMessage> { errorMessage } </ErrorMessage>;
    else contents = <GameAPI triviaData={ data }/>;

    return(
        <main>
            { contents }
        </main>
    );
}

export default PlayQuizAPIPage;