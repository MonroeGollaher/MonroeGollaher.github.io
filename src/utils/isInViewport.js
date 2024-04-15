export const isInViewport = (element) => {
  return new Promise((resolve, reject) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          resolve(true);
        }
      });
    });

    observer.observe(element);
  });
};
