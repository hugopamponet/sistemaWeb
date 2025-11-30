type DefaultInputProps = {
  children: string;
  className: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentProps<"input">;

export function DefaultInput({ 
  children, 
  className, 
  value, 
  type = "text",
  onChange,
  ...rest 
}: DefaultInputProps) {
  return (
    <div>
      <label>{children}</label>
      <input 
        className={className} 
        value={value} 
        type={type}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}