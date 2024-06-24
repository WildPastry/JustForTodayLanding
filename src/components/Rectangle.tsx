export interface IRectangle {
  colour: string;
  height: string;
  width: string;
}

const Rectangle: React.FC<IRectangle> = (props: IRectangle): JSX.Element => {
  return (
    <div
      style={{
        background: `var(--${props.colour})`,
        height: `${props.height}px`,
        width: `${props.width}px`
      }}
      className='absolute top-6'
    />
  );
};

export default Rectangle;
