export const onAppear = (el, cb, op) => {
  // set elements

  // set options

  const callback = (entries) => {
    entries.forEach((element) => {
      cb(element.target);
    });
  };

  const observer = new IntersectionObserver(callback);
  observer.observe(el);
};
