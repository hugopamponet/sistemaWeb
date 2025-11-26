type ButtonProps = {
    children: string,
    className: string,
    type?: "submit"
}

export function Button({ children, className, type }: ButtonProps) {
    return (
        <button className={className} type={type}>
            {children}
        </button>
    );
}