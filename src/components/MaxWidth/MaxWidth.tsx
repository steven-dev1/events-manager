export default function MaxWidth({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-screen-lg w-full mx-auto ${className}`}>
      {children}
    </div>
  );
}