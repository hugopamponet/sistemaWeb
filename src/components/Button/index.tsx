type ButtonProps = {
    children: string;
    className: string;
    type?: "submit" | "button" | "reset";
    disabled?: boolean;
    onClick?: () => void;
} & React.ComponentProps<"button">;

export function Button({ children, className, type, disabled, onClick, ...rest }: ButtonProps) {
    return (
        <button 
            className={className} 
            type={type}
            disabled={disabled}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}