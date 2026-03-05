import React from 'react';
import './Buttons.css';

// Button component with variants
function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

// Button variants
export const ButtonPrimary = (props) => (
  <Button variant="primary" {...props} />
);

export const ButtonSecondary = (props) => (
  <Button variant="secondary" {...props} />
);

export const ButtonDanger = (props) => (
  <Button variant="danger" {...props} />
);

export const ButtonSuccess = (props) => (
  <Button variant="success" {...props} />
);

// Button sizes
export const ButtonSmall = (props) => (
  <Button size="sm" {...props} />
);

export const ButtonMedium = (props) => (
  <Button size="md" {...props} />
);

export const ButtonLarge = (props) => (
  <Button size="lg" {...props} />
);

export default Button;