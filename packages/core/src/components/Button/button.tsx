import { ButtonHTMLAttributes } from 'react';
import { useStyle } from '../../services/hooks';

import defaultClasses from './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  label?: string;
  classes?: Object;
}

const button: React.FC<ButtonProps> = (props) => {
  const { id, type, label, children, ...restProps } = props;
  const classes = useStyle({ defaultClasses, classes: props.classes });

  return (
    <div className={classes.root}>
      <label className={classes.label} htmlFor={id || label}>
        {label}
      </label>
      <button id={id || label} className={classes.button} {...restProps}>
        {children}
      </button>
    </div>
  );
};

export default button;
