import cn from "classnames";
import InputMask from "react-input-mask";
import cl from "./Input.module.scss";

type TInputMasks = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  mask: string;
  title: string;
  error?: boolean;
};
export const InputMasks = ({
  className,
  mask,
  title,
  error,
  ...rest
}: TInputMasks) => {
  return (
    <div className={className}>
      <h3 className={cl.header}>{title}</h3>
      <div>
        <InputMask
          className={cn(cl.input, error ? cl.error : cl.normal)}
          mask={mask}
          maskChar={null}
          {...rest}
        />
      </div>
    </div>
  );
};
