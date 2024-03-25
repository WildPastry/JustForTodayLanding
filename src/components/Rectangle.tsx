export interface IRectangle {
  colour: string;
  width: string;
}

const Rectangle: React.FC<IRectangle> = (props: IRectangle): JSX.Element => {
  return (
    <div
      style={{ width: `${props.width}px` }}
      className={`absolute top-5 h-5 bg-${props.colour}`}
    />
  );
};

export default Rectangle;
