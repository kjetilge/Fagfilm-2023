'use client';
import { useRouter } from 'next/navigation';

function BackButton({
  className,
  children,
}: React.PropsWithChildren<{
  className?: string;
  back?: true
}>) {
  const router = useRouter();
  return (
    <button aria-label="Tilbake til forrige side" className={className} onClick={() => router.back()}>
      {children}
    </button>
  );
}

export default BackButton;