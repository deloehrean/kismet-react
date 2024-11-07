import clsx from 'clsx';

import ChevronIcon from 'src/assets/images/process/chevron';
import { IconStyles as s, StarIcon, TargetIcon } from 'src/components';

type IconProps = {
  name:
    | 'starIcon'
    | 'targetIcon'
    | 'chevronDownIcon'
    | 'chevronUpIcon'
    | 'chevronRightIcon'
    | 'chevronLeftIcon'
    | 'placeholder';
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
    chevronDownIcon: <ChevronIcon direction={'down'} />,
    chevronUpIcon: <ChevronIcon direction={'up'} />,
    chevronLeftIcon: <ChevronIcon direction={'left'} />,
    chevronRightIcon: <ChevronIcon direction={'right'} />,
    placeholder: null,
  };

  return <div className={clsx(s[size], s.root)}>{Icons[name]}</div>;
};

export default Icon;
