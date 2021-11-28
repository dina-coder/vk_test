import React from "react";
import cl from "./Input.module.scss";
import cn from 'classnames';

type TInput = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  title: string;
  error?: boolean;
};

const Input = ({ title, error, className, ...rest }: TInput) => {
    console.log(error);
  return (
    <div className={className}>
      <h3 className={cl.header}>{title}</h3>
      <div>
        <input className={cn(cl.input, error ? cl.error : cl.normal)} {...rest}></input>
      </div>
    </div>
  );
};

export default Input;
