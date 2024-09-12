import { useTransition } from 'react';

import Button, {
  ButtonProps,
} from '../components/Button';
import React from 'react';

interface TabButtonProps extends ButtonProps {}

const TabButton = ({
  onClick,
  ...rest
}: TabButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = (e: any) => {
    startTransition(() => {
      onClick?.(e);
    });
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  return <Button {...rest} onClick={handleClick} />;
};

export default TabButton;