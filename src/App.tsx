import QuizzList from "./components/QuizzList/QuizzList";
import Playground from "./components/Playground/Playground";

function App() {
    return (
        <>
            <header>
                <h1>Quizz Mathématique</h1>
            </header>

            <main>
                <QuizzList />
                <Playground />
            </main>
        </>
    );
}

export default App;
