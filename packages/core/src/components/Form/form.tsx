import { FormHTMLAttributes } from 'react';

import { useStyle } from '../../services/hooks';
import defaultClasses from './form.css';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  classes?: Object;
}

const Form: React.FC<FormProps> = (props) => {
  const { children, ...restProps } = props;

  const classes = useStyle({ defaultClasses, classes: props.classes });

  return (
    <form className={classes.form} {...restProps}>
      {children}
    </form>
  );
};

export default Form;
