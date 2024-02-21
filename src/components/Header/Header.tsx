import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    return (
        <header className="w-full h-[100px] grid grid-cols-[20%_1fr_20%]">
            <div className="w-full flex justify-center items-center">
                <Button title="Retour" onClick={() => navigate("/")} />
            </div>
            <h1 className="w-full flex justify-center items-center text-xl font-bold md:text-2xl lg:text-3xl">Math Quiz</h1>
            <div className="w-full flex justify-center items-center">
                <Button title="Aide" onClick={() => navigate("/help")} />
            </div>
        </header>
    );
}
