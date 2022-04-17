import { InputHTMLAttributes } from 'react';
import { useStyle } from '../../services/hooks';
import defaultClasses from './inputText.css';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  text?: string;
  classes?: Object;
}

const InputText: React.FC<InputTextProps> = (props) => {
  const { id, type, label, text, children, ...restProps } = props;

  const classes = useStyle({ defaultClasses, classes: props.classes });

  return (
    <div className={classes.root}>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id || label}
        type={type || 'text'}
        className={classes.input}
        {...restProps}
      />
      <span className={text || children ? classes.textVisible : classes.textInvisible}>
        {text || children}
      </span>
    </div>
  );
};

export default InputText;
