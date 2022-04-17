import * as CSS from 'csstype';
import { FiChevronDown } from 'react-icons/fi';

import { useStyle } from '../../services/hooks';
import { useDropdown } from '../../services/talons';
import { useDropdownProps } from '../../services/talons/useDropdown';
import Icon from '../Icon';
import defaultClasses from './dropdown.css';

interface StyleIcon extends CSS.Properties {
  size: number;
}

interface DropdownProps extends useDropdownProps {
  icon?: React.ComponentType;
  label?: string;
  styleIcon?: StyleIcon;
  classes?: Object;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { id, label, items, icon, styleIcon, onValueChange } = props;

  const { itemActive, expanded, elementRef, triggerRef, setExpanded, handleClick } =
    useDropdown({
      id,
      items,
      onValueChange,
    });

  const classes = useStyle({ defaultClasses, classes: props.classes });

  return (
    <div className={classes.root}>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <div
        id={id}
        ref={triggerRef}
        className={classes.selected}
        onClick={() => setExpanded((prevState) => !prevState)}
      >
        <span>{itemActive}</span>
        <Icon
          id={id}
          icon={icon || FiChevronDown}
          size={styleIcon?.size || 22}
          active={expanded}
          classes={{ icon: classes.icon }}
          styleIcon={styleIcon}
        />
      </div>
      <div ref={elementRef} className={expanded ? classes.itemsActive : classes.items}>
        <div className={expanded ? classes.openMenu : classes.closeMenu}>
          {items.map(({ key, label, value }) => {
            return (
              <div
                aria-hidden
                key={key}
                className={itemActive === label ? classes.itemActive : classes.item}
                onClick={() => handleClick(value)}
              >
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
