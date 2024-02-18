import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuizzStore } from "../../store/QuizzStore";

import Button from "../Button/Button";

export default function ButtonList() {
    const Links: Array<{ title: string; path: string }> = [
        { title: "Addition", path: "/addition" },
        { title: "Soustraction", path: "/soustraction" },
        { title: "Multiplication", path: "/multiplication" },
        { title: "Division", path: "/division" },
    ];

    const [playerName, setPlayerName] = useState<string>("");

    const selectQuizz = useQuizzStore((state) => state.selectQuizz);
    const generateQuestion = useQuizzStore((state) => state.generateQuestion);
    const setPlayer = useQuizzStore((state) => state.setPlayer);

    const handleClick = (type: string) => {
        generateQuestion(type);
        console.log(type);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(event.target.value);
    };

    const handleSubmit = () => {
        setPlayer(playerName);
        setPlayerName("");
        console.log(playerName);
    };
    return (
        <div className="h-full px-4 grid grid-rows-[50px_1fr]">
            <div className="flex flex-row justify-center items-center">
                <h2>Choisi un quizz</h2>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2">
                <div className="w-full flex justify-center items-center">
                    <div className="w-full grid grid-col-1 gap-2.5">
                        <div className="w-1/2 flex flex-col items-center justify-center">
                            <label htmlFor="userName" className="text-base md:text-lg">
                                Choisi ton pseudo :
                            </label>
                            <input
                                className="h-[50px] px-2.5 py-1.5 text-lg rounded outline-black"
                                type="text"
                                id="userName"
                                onChange={handleInputChange}
                                value={playerName}
                            />
                        </div>
                        <div className="w-1/2 flex justify-center items-center">
                            <Button title="Valider" onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
                <div className="w-full h-full">
                    <ul className="menu w-full flex justify-around items-center rounded cursor-pointer">
                        {Links.map((link, index) => (
                            <li key={index} className="list-none w-full text-center">
                                <Link to={link.path}>
                                    <Button
                                        title={link.title}
                                        onClick={() => {
                                            handleClick(link.title.toLowerCase());
                                            selectQuizz(link.title, true);
                                        }}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
