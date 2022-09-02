const handlerFAQ = function () {
  const questionsBtn = [...document.querySelectorAll(".faq__accordion")];
  const answersPanel = [...document.querySelectorAll(".faq__panel")];
  const icons = [...document.querySelectorAll(".faq__icon")];
  questionsBtn.forEach(function (accordion, i) {
    accordion.addEventListener("click", function () {
      if (answersPanel[i].style.maxHeight) {
        answersPanel[i].style.maxHeight = null;
        icons[i].classList.remove("faq__rotate");
      } else {
        answersPanel.forEach(function (answer, index) {
          answer.style.maxHeight = null;
          icons[index].classList.remove("faq__rotate");
        });
        answersPanel[i].style.maxHeight = answersPanel[i].scrollHeight + "px";
        icons[i].classList.add("faq__rotate");
      }
    });
  });
};

const handlerHeading2Animation = function () {
  const allHeading = document.querySelectorAll(".heading-2");
  const revealHeading = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("heading-2--hidden");
    observer.unobserve(entry.target);
  };

  const headingObserver = new IntersectionObserver(revealHeading, {
    root: null,
    threshold: 0.15,
  });

  allHeading.forEach(function (heading) {
    headingObserver.observe(heading);
    heading.classList.add("heading-2--hidden");
  });
};

const handlerIconAnimation = function () {
  const allIcons = document.querySelectorAll(".curriculum__image");
  const revealIcon = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("curriculum__image--hidden");
    observer.unobserve(entry.target);
  };

  const iconObserver = new IntersectionObserver(revealIcon, {
    root: null,
    threshold: 0.95,
  });

  allIcons.forEach(function (icon) {
    iconObserver.observe(icon);
    icon.classList.add("curriculum__image--hidden");
  });
};

const handlerResponsiveMenu = function () {
  const loginBtn = document.querySelector(".btn--login");
  const joinBtn = document.querySelector(".btn--join");
  const bp40em = 640;

  const responsiveMenu = function () {
    if (window.innerWidth < bp40em) {
      loginBtn.classList.add("btn--primary");
      joinBtn.classList.add("btn--hidden");
    } else {
      loginBtn.classList.remove("btn--primary");
      joinBtn.classList.remove("btn--hidden");
    }
  };

  responsiveMenu();
  window.addEventListener("resize", responsiveMenu);
};

const init = function () {
  handlerFAQ();
  handlerHeading2Animation();
  handlerIconAnimation();
  handlerResponsiveMenu();
};

init();
