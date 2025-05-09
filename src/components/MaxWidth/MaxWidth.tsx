export default function MaxWidth({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-screen-lg p-2 w-full mx-auto ${className}`}>
      {children}
    </div>
  );
}