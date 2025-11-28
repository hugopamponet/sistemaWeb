type DefaultInputPrps = {
  children: string;
  className: string;
} & React.ComponentProps<"input">;

export function DefaultInput({ children, className }: DefaultInputPrps) {
  return (
    <>
      <div>
        <div>
          <label>{children}</label>
          <input type="text" className={className} />
        </div>
      </div>
    </>
  );
}
