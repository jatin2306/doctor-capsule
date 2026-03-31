const SearchIcon = (props: { className?: string; stroke?: string; strokeWidth?: number }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? 2}
        strokeLinecap="round"
      />
      <path
        d="M16.5 16.5L21 21"
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? 2}
        strokeLinecap="round"
      />
    </svg>
  );
  export default SearchIcon;