'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useAnimate, useReducedMotion } from 'motion/react';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const [scope, animate] = useAnimate();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || previousPathname.current === pathname) {
      previousPathname.current = pathname;
      return;
    }

    previousPathname.current = pathname;

    void animate(
      scope.current,
      { opacity: [0.82, 1] },
      { duration: 0.22, ease: 'easeOut' }
    );
  }, [animate, pathname, reducedMotion, scope]);

  return (
    <div ref={scope}>
      {children}
    </div>
  );
}
