export const PageTransition = {
  hidden: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      delayChildren: 0.5,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      delayChildren: 0.5,
    },
  },
};

export const slideLeft = {
  hidden: {
    x: "100%",
  },
  show: {
    x: "0%",
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export const slideTop = {
  hidden: {
    y: 300,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

export const scaleOut = {
  hidden: {
    scale: 1.1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  show: {
    scale: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

export const slideBar = {
  open: {
    x: "0%",
    transition: {
      type: "tween",
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "tween",
      duration: 0.4,
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

export const HeaderAnimation = {
  open: {
    scale: [1.2, 0.8],
    opacity: [0, 1],
    transition: {
      type: "tween",
    },
  },
  closed: {
    scale: 0,
    opacity: 0,
    transition: {
      type: "tween",
    },
  },
};

export const TitleAnimation = {
  open: {
    y: [200, 0],
    opacity: [0, 1],
    transition: {
      type: "tween",
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  closed: {
    y: [0, 200],
    opacity: [, 0],
    transition: {
      type: "tween",
      duration: 0.4,
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};
