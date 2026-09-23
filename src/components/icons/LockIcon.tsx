const LockIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="3"
        y="7"
        width="10"
        height="7.5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5 7V4.75a3 3 0 0 1 6 0V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="8" cy="10.75" r="1" fill="currentColor" />
    </svg>
  );
};
export default LockIcon;
