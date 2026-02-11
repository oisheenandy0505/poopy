(function () {
  const card = document.getElementById("card");
  const closeBtn = document.getElementById("closeBtn");
  const coverTapBtn = document.querySelector(".cover-tap-btn");
  const message = document.getElementById("message");

  if (!card || !closeBtn) {
    return;
  }

  function setOpen(isOpen) {
    card.dataset.open = String(isOpen);
    card.setAttribute("aria-pressed", String(isOpen));

    if (isOpen) {
      setTimeout(() => closeBtn.focus({ preventScroll: true }), 650);
    } else {
      card.focus({ preventScroll: true });
    }
  }

  // initial state
  setOpen(false);

  function toggleOpen() {
    const isOpen = card.dataset.open === "true";
    setOpen(!isOpen);
  }

  card.addEventListener("click", (e) => {
    if (
      e.target &&
      (e.target.id === "closeBtn" ||
        e.target.classList.contains("cover-tap-btn"))
    ) {
      return;
    }
    toggleOpen();
  });

  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleOpen();
    }
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    setOpen(false);
  });

  if (coverTapBtn) {
    coverTapBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleOpen();
    });
  }

  if (message) {
    message.addEventListener("scroll", () => {
      if (message.scrollTop > 2) {
        message.classList.add("message-scrolled");
      } else {
        message.classList.remove("message-scrolled");
      }
    });
  }
})();
