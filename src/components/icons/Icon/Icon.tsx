import clsx from 'clsx';

import { IconStyles as s, StarIcon, TargetIcon, ChevronUpIcon } from 'src/components';

type IconProps = {
  name: 'starIcon' | 'targetIcon' | 'chevronDownIcon';
  size?: 'x-large' | 'large' | 'medium' | 'small' | 'inherit';
};

const defaultProps: IconProps = {
  name: 'starIcon',
  size: 'medium',
};

const Icon = (props = defaultProps) => {
  const { name, size = 'medium' } = props;
  const Icons: Record<IconProps['name'], any> = {
    starIcon: <StarIcon />,
    targetIcon: <TargetIcon />,
    chevronDownIcon: <ChevronUpIcon />,
  };
  
  return <div className={clsx(s[size], s.root)}>{Icons[name]}</div>;
};

export default Icon;
