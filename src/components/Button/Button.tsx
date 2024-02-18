interface ButtonProps {
    title: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
    return (
        <button
            className="w-full bg-transparent border border-white rounded text-black py-2 px-1 text-center inline-block text-base cursor-pointer hover:border-black"
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
