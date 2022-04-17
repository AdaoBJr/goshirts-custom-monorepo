import { ComponentType, MouseEvent, MouseEventHandler } from 'react';
import { IconBaseProps } from 'react-icons';
import { useStyle } from '../../services/hooks';
import defaultClasses from './icon.css';

interface IconProps {
  icon: ComponentType<IconBaseProps>;
  id: string;
  size?: number;
  width?: number;
  active?: boolean;
  onClick?: any;
  styleIcon?: Object;
  classes?: Object;
}

const Icon: React.FC<IconProps> = (props) => {
  const { id, icon: IconRender, active, size, width, onClick, styleIcon } = props;
  const classes = useStyle({ defaultClasses, classes: props.classes });

  return (
    <span className={classes.root}>
      {IconRender && (
        <IconRender
          id={id}
          onClick={onClick}
          style={{ fontSize: size || width, ...styleIcon }}
          className={active ? classes.iconActive : classes.icon}
        />
      )}
    </span>
  );
};

export default Icon;
