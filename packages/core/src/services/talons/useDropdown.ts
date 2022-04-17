import { useState, useRef, useCallback } from 'react';
import { useEventListener } from '../hooks';

export interface dropdownData {
  key: number | string;
  label: string;
  value: number | string | boolean;
}

export interface useDropdownProps {
  id: string;
  items: dropdownData[];
  onValueChange: Function;
}

const useDropdown = (props: useDropdownProps) => {
  const { id, items, onValueChange } = props;

  const elementRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const [expanded, setExpanded] = useState<boolean>(false);
  const [itemActive, setItemActive] = useState<string>('Selecione');

  const handleClick = useCallback(
    (value: string | number | boolean) => {
      const findOption = items.find(item => item.value == value);
      if (findOption) {
        setItemActive(findOption.label);
        onValueChange({ id, itemActive: findOption.value });
      }
      setExpanded(false);
    },
    [items]
  );

  const closeMenu = useCallback(({ target }: any) => {
    const isOutsideElement = !elementRef.current || !elementRef.current.contains(target);
    const isOutsideTrigger = !triggerRef.current || !triggerRef.current.contains(target);

    if (isOutsideElement && isOutsideTrigger) setExpanded(false);
  }, []);

  useEventListener({ target: window, event: 'click', listener: closeMenu });

  return {
    elementRef,
    triggerRef,
    itemActive,
    expanded,
    setExpanded,
    handleClick
  };
};

export default useDropdown;
