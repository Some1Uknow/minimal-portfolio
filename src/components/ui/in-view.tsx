'use client';

import { ReactNode, useRef, useMemo } from 'react';
import {
  motion,
  useInView,
  Variant,
  Transition,
  UseInViewOptions,
} from 'motion/react';

interface InViewProps {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
  as?: keyof React.JSX.IntrinsicElements;
  once?: boolean;
  className?: string;
}

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const motionComponents = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
  main: motion.main,
  nav: motion.nav,
  aside: motion.aside,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
} as const;

type SupportedElement = keyof typeof motionComponents;

function InView({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
  as = 'div',
  once = true,
  className,
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, ...viewOptions });

  const MotionComponent = useMemo(() => {
    return motionComponents[as as SupportedElement] || motion.div;
  }, [as]);

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

export { InView };
