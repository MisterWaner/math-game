interface ButtonProps {
    title: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
    return (
        <button
            className="w-fit bg-transparent border border-black rounded text-black py-2 px-6 text-center inline-block text-base cursor-pointer hover:bg-amber-200"
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
