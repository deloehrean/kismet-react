export const isPasswordProtected = () => {
  return document.body.classList.contains('password-protected');
};

/**
 * Keyboard support for elements acting as buttons
 *
 * @param action
 * @returns {Function}
 */
export const onEnterOrSpace = (action: () => void) => (event: React.KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    action();
  }
};
