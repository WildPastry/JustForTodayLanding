export interface IRectangle {
  colour: string;
  width: string;
}

const Rectangle: React.FC<IRectangle> = (props: IRectangle): JSX.Element => {
  return (
    <div
      style={{
        background: `var(--${props.colour})`,
        width: `${props.width}px`
      }}
      className='absolute top-6 h-5'
    />
  );
};

export default Rectangle;
