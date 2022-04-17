import { HTMLAttributes } from 'react';
import { useStyle } from '../../services/hooks';
import defaultClasses from './label.css';

interface LabelTextProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  text?: string;
  classes?: Object;
}

const Label: React.FC<LabelTextProps> = (props) => {
  const { id, label, text, children, ...restProps } = props;

  const classes = useStyle({ defaultClasses, classes: props.classes });

  return (
    <div className={classes.root} {...restProps}>
      <label className={classes.label} htmlFor={id}>
        {label}
        <span className={classes.content}>{children && children}</span>
      </label>
    </div>
  );
};

export default Label;
