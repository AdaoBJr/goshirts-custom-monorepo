import { shallowMerge } from '../utils';

interface useStyleProps {
  defaultClasses: Object;
  classes?: Object;
  className?: string;
}

const useStyle = (props: useStyleProps) => {
  const { defaultClasses, classes, className } = props;
  const hasClassName = className ? { root: className } : null;

  return shallowMerge(defaultClasses, classes, hasClassName);
};

export default useStyle;
