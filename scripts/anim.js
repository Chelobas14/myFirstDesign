let k = 0;

info.onclick = () => {
  if (k % 2 == 0) {
    information.style.animationDuration = "0.3s";
    information.style.animationName = "animShow";
    setTimeout(() => {
      information.style.animationDuration = "none";
      information.style.animationName = "none";
      information.style.top = "-50vh";
    }, 280);
  } else {
    information.style.animationDuration = "0.3s";
    information.style.animationName = "animHide";
    setTimeout(() => {
      information.style.animationDuration = "none";
      information.style.animationName = "none";
      information.style.top = "0vh";
    }, 280);
  }
  k++;
};
