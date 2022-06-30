export const slideLeft = {
  show: {
    x: "100%",
  },
  hidden: {
    x: "0%",
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
};

export const fadeIn = {
  show: {
    opacity: 0,
  },
  hidden: {
    opacity: 1,

    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export const slideTop = {
  show: {
    y: 300,
  },
  hidden: {
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

export const scaleOut = {
  show: {
    scale: 1.1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  hidden: {
    scale: 1,

    transition: {
      duration: 0.5,
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
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "tween",
      duration: 0.5,
      when: "beforeChildren",
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
    y: [300, 0],
    transition: {
      type: "tween",
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  closed: {
    y: 300,
    transition: {
      type: "tween",
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
