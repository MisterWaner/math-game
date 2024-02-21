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
                <h2 className="text-lg md:text-xl font-semibold">Choisi un quizz</h2>
            </div>
            <div className="w-full grid grid-cols-1 grid-rows-[45%_1fr] md:grid-cols-2 md:grid-rows-1 md:mt-10">
                <div className="w-full h-fit flex justify-center items-center md:items-start">
                    <div className="w-full h-fit grid grid-cols-1 grid-rows-2 gap-2.5 ">
                        <div className="w-2/3 place-self-center md:place-self-start md:ml-5">
                            <label
                                htmlFor="userName"
                                className="w-full mb-2 text-xs md:text-sm lg:text-base"
                            >
                                Choisi ton pseudo :
                            </label>
                            <input
                                className="w-full px-2.5 py-1.5 text-sm md:text-base rounded outline-amber-200"
                                type="text"
                                id="userName"
                                onChange={handleInputChange}
                                value={playerName}
                            />
                        </div>
                        <div className="w-2/3 place-self-center md:place-self-start md:ml-5">
                            <Button title="Valider" onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-start">
                    <div className="w-full grid grid-cols-1">
                        <div className="dropdown inline-block relative w-2/3 place-self-center md:place-self-start md:ml-5">
                            <Button
                                title="Choisi un quizz"
                                onClick={() => {}}
                            />
                            <ul className="dropdown-menu absolute hidden pt-1 ">
                                {Links.map((link, index) => (
                                    <li
                                        key={index}
                                        className="py-2 px-4 text-xs block whitespace-no-wrap bg-amber-300 first:rounded-t last:rounded-b hover:bg-amber-200 md:text-sm lg:text-base"
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => {
                                                selectQuizz(link.title, true);
                                                handleClick(
                                                    link.title.toLowerCase()
                                                );
                                            }}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
