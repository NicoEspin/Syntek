export const premiumEase = [0.16, 1, 0.3, 1];

export const subtleEase = [0.22, 1, 0.36, 1];

export const fadeUp = ({
  distance = 40,
  duration = 0.9,
  delay = 0,
  scale = 1,
} = {}) => ({
  hidden: {
    opacity: 0,
    y: distance,
    scale,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: premiumEase,
    },
  },
});

export const staggerChildren = ({
  delayChildren = 0,
  staggerChildren = 0.1,
} = {}) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});

export const navMenuVariants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 0 100% 0 round 28px)",
    transition: {
      duration: 0.3,
      ease: [0.7, 0, 0.84, 0],
    },
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0 round 28px)",
    transition: {
      duration: 0.5,
      ease: premiumEase,
    },
  },
};

export const getFadeUp = (shouldReduceMotion, options = {}) => {
  if (shouldReduceMotion) {
    return fadeUp({ ...options, distance: 0, duration: 0.24, scale: 1 });
  }

  return fadeUp(options);
};

export const getStaggerChildren = (shouldReduceMotion, options = {}) => {
  if (shouldReduceMotion) {
    return staggerChildren({ ...options, delayChildren: 0, staggerChildren: 0.04 });
  }

  return staggerChildren(options);
};

export const getNavMenuVariants = (shouldReduceMotion) => {
  if (shouldReduceMotion) {
    return {
      hidden: {
        opacity: 0,
        transition: {
          duration: 0.18,
          ease: subtleEase,
        },
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.22,
          ease: subtleEase,
        },
      },
    };
  }

  return navMenuVariants;
};
