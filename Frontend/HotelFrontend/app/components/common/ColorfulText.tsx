import { type PropsWithChildren } from 'react';
interface ColorfulTitleProps extends PropsWithChildren {
  colorfulContent?: string | number;
  className?: string;
}

const ColorfulText = ({
  colorfulContent,
  children,
  className,
}: ColorfulTitleProps) => {
  return (
    <div className={`${className} flex-1`}>
      <span className="text-primary mx-2">{colorfulContent}</span>
      {children}
    </div>
  );
};

export default ColorfulText;
