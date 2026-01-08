'use client';

import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  motion,
  Variants,
  Transition,
} from 'motion/react';
import React, { useMemo } from 'react';

type PresetType = 'blur-sm' | 'fade-in-blur' | 'scale' | 'fade' | 'slide';

export type TextEffectProps = {
  children: string;
  per?: 'word' | 'char' | 'line';
  as?: keyof React.JSX.IntrinsicElements;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?: PresetType;
  delay?: number;
  trigger?: boolean;
  onAnimationComplete?: () => void;
  onAnimationStart?: () => void;
  segmentWrapperClassName?: string;
  style?: React.CSSProperties;
  containerTransition?: Transition;
  segmentTransition?: Transition;
  speedReveal?: number;
  speedSegment?: number;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  'blur-sm': {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(4px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
      exit: { opacity: 0, filter: 'blur(4px)' },
    },
  },
  'fade-in-blur': {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
      visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
      exit: { opacity: 0, filter: 'blur(12px)', y: 12 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: defaultItemVariants,
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
  },
};

const motionComponents = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
} as const;

type SupportedElement = keyof typeof motionComponents;

function TextEffect({
  children,
  per = 'word',
  as = 'p',
  variants,
  className,
  preset = 'fade',
  delay = 0,
  trigger = true,
  onAnimationComplete,
  onAnimationStart,
  segmentWrapperClassName,
  style,
  containerTransition,
  segmentTransition,
  speedReveal = 1,
  speedSegment = 1,
}: TextEffectProps) {
  const selectedVariants = variants || presetVariants[preset];

  const MotionTag = useMemo(() => {
    return motionComponents[as as SupportedElement] || motion.p;
  }, [as]);

  const segments = useMemo(() => {
    if (per === 'line') return children.split('\n');
    if (per === 'word') return children.split(/(\s+)/);
    return children.split('');
  }, [children, per]);

  const baseStagger = 0.05 / speedReveal;
  const baseSegmentDuration = 0.3 / speedSegment;

  const containerVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: baseStagger,
          delayChildren: delay,
          ...containerTransition,
        },
      },
      exit: {
        transition: {
          staggerChildren: baseStagger,
          staggerDirection: -1,
        },
      },
    }),
    [baseStagger, delay, containerTransition]
  );

  const itemVariants: Variants = useMemo(
    () => ({
      hidden: selectedVariants.item?.hidden ?? { opacity: 0 },
      visible: {
        ...(selectedVariants.item?.visible ?? { opacity: 1 }),
        transition: {
          duration: baseSegmentDuration,
          ...segmentTransition,
        },
      },
      exit: selectedVariants.item?.exit ?? { opacity: 0 },
    }),
    [selectedVariants.item, baseSegmentDuration, segmentTransition]
  );

  return (
    <AnimatePresence mode="popLayout">
      {trigger && (
        <MotionTag
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className={cn('whitespace-pre-wrap', className)}
          onAnimationComplete={onAnimationComplete}
          onAnimationStart={onAnimationStart}
          style={style}
        >
          {segments.map((segment, index) => (
            <motion.span
              key={`${segment}-${index}`}
              variants={itemVariants}
              className={cn(
                per === 'line' ? 'block' : 'inline-block',
                segmentWrapperClassName
              )}
            >
              {segment}
            </motion.span>
          ))}
        </MotionTag>
      )}
    </AnimatePresence>
  );
}

export { TextEffect };
