export interface IRectangle {
  colour: string;
  width: string;
}

const Rectangle: React.FC<IRectangle> = (props: IRectangle): JSX.Element => {
  return (
    <div className={`absolute top-5 h-5 bg-${props.colour} w-${props.width}`} />
  );
};

export default Rectangle;
