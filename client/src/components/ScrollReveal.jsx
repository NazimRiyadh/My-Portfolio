import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../utils/motion';

function ScrollReveal({
  children,
  className = '',
  variants = fadeUp,
  delay = 0,
  as = 'div',
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

export default ScrollReveal;
