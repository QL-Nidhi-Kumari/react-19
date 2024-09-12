import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  title?: string;
  variant?: string;
}

const Button: React.FC<ButtonProps> = ({ title, variant, isLoading, disabled, ...rest }) => {
  return (
    <button {...rest} disabled={isLoading || disabled} style={{
      backgroundColor: variant
    }}>
      {isLoading ? 'Loading...' : title}
    </button>
  );
};

export default Button;
