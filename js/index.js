const handleClickMenu = (selectorClick, selectorMenu) => {
  const clickElement = document.querySelector(selectorClick);
  if (!clickElement) return;

  const menuElement = document.querySelector(selectorMenu);
  if (!menuElement) return;

  clickElement.addEventListener("click", () => {
    clickElement.classList.toggle("active");
    menuElement.classList.toggle("active");
  });
};

const handleLazyLoading = () => {
  if ("IntersectionObserver" in window) {
    const listElement = document.querySelectorAll(".item");
    if (!listElement) return;

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(callback, options);

    listElement.forEach((item) => {
      observer.observe(item);
    });
  }
};

(() => {
  handleClickMenu(".header__menu", ".menu");
  handleLazyLoading();
})();
