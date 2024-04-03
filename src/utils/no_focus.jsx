const removeFocus = (e) => {
  e.currentTarget.blur();
};

const toTopSmooth = (e) => {
    window.scrollTo({
    top: 100,
    left: 100,
    behavior: "smooth",
  });
  e.currentTarget.blur();
};
export { toTopSmooth, removeFocus };
