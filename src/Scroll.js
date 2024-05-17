const handleOffset = (height) => {
  window.scrollTo({
    top: height,
    behavior: "smooth",
  });
};

export const handleScroll = (e) => {
  if (e.target.id === "home") {
    handleOffset(0);
  } else if (e.target.id === "about") {
    handleOffset(480);
  } else if (e.target.id === "portfolio") {
    handleOffset(1050);
  } else if (e.target.id === "skills") {
    handleOffset(2250);
  } else if (e.target.id === "contact") {
    handleOffset(3260);
  }
};
