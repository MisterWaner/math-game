import Menu from "../components/Menu/Menu";
import Score from "../components/Score/Score";

export default function Home() {
    return (
        <>
            <main className="w-full grid grid-cols-1 lg:grid-cols-[1fr_20%] ">
                <Menu />
                <Score />
            </main>
        </>
    );
}
