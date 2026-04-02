interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}
const Button = ({ children, onClick, className, type, disabled }: ButtonProps) => {

    return (
        <button className={`${className}`} onClick={onClick} type={type} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;