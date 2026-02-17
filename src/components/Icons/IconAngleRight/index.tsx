type Props = {
  className?: string;
};

export default function IconAngleRight({ className }: Props) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="m6.757 3.219 4.25 4.25a.748.748 0 0 1-.003 1.062l-4.25 4.25a.747.747 0 0 1-1.06 0l-.703-.712a.747.747 0 0 1 0-1.06L8.004 8 4.991 4.987a.747.747 0 0 1 0-1.059l.706-.706a.747.747 0 0 1 1.06 0z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
