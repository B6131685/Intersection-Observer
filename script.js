let target = document.querySelectorAll(".box"); //NodeList

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.bottom = 0;
      entry.target.style.right = 0;
      observer.unobserve(entry.target);
      observer2.observe(entry.target);
    }
  });
};

const callback2 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.bottom = 0;
      entry.target.style.right = 0;
    } else {
      entry.target.style.opacity = 0;
      entry.target.style.right = "-50px";
    }
  });
};

let observerinit = new IntersectionObserver(callback, options);
let observer2 = new IntersectionObserver(callback2, options);
target.forEach((box) => {
  observerinit.observe(box);
});
