import { cn } from '@/lib/utils';

const MaxW = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className={cn('mx-auto max-w-[1440px]', className)} style={style}>
      {children}
    </div>
  );
};

export default MaxW;
