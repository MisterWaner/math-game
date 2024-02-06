import ButtonList from "./components/ButtonList/ButtonList";
import Playground from "./components/Playground/Playground";

function App() {
    return (
        <>
            <header>
                <h1>Quizz Mathématique</h1>
            </header>

            <main>
                <ButtonList />
                <Playground />
            </main>
        </>
    );
}

export default App;
