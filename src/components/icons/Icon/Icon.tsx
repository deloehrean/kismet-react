import clsx from 'clsx';

import { IconStyles as s, LockIcon, StarIcon, TargetIcon } from 'src/components';
import ChevronIcon from 'src/components/icons/ChevronIcon';

export type IconName =
  | 'starIcon'
  | 'targetIcon'
  | 'chevronDownIcon'
  | 'chevronUpIcon'
  | 'chevronRightIcon'
  | 'chevronLeftIcon'
  | 'lockIcon'
  | 'placeholder';

type IconProps = {
  name: IconName;
  size?: 'x-large' | 'large' | 'medium' | 'small' | 'inherit';
};

const defaultProps: IconProps = {
  name: 'starIcon',
  size: 'medium',
};

const Icon = (props = defaultProps) => {
  const { name, size = 'medium' } = props;
  const Icons: Record<IconProps['name'], React.ReactNode> = {
    starIcon: <StarIcon />,
    targetIcon: <TargetIcon />,
    chevronDownIcon: <ChevronIcon direction={'down'} />,
    chevronUpIcon: <ChevronIcon direction={'up'} />,
    chevronLeftIcon: <ChevronIcon direction={'left'} />,
    chevronRightIcon: <ChevronIcon direction={'right'} />,
    lockIcon: <LockIcon />,
    placeholder: null,
  };

  return <div className={clsx(s[size], s.root)}>{Icons[name]}</div>;
};

export default Icon;
