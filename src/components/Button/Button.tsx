interface ButtonProps {
    title: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
    return (
        <button
            className="w-fit bg-transparent border border-black rounded text-black py-1 px-3 text-center inline-block text-xs cursor-pointer hover:bg-amber-200 md:text-sm lg:text-base"
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
