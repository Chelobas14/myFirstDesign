let i = 0;
b4.onclick = () => {
  if (i % 2 == 0) {
    information.style.color = "white";
    header.style.backgroundColor = "#212121";
    body.style.backgroundColor = "#212121";
    header.style.boxShadow = "0px 0px 30px #ffff00, inset 0px 0px 15px #ffff00";
    logo.style.color = "white";
    logo.style.textShadow = "0px 0px 5px white";
    search.style.backgroundColor = "#212121";
    search.style.boxShadow = "0px 0px 30px #ff0000, inset 0px 0px 15px #ff0000";
    search.style.color = "white";
    for (let i = 0; i < sim.length; i++) {
      sim[i].style.color = "#eee";
    }
    themeIcon.src = "./icons/sun.png";
    thBut.style.left = "0.2vw";
  } else {
    information.style.color = "black";
    thBut.style.left = "0.15vw";
    themeIcon.src = "./icons/moon.png";
    header.style.backgroundColor = "white";
    body.style.backgroundColor = "white";
    logo.style.color = "black";
    header.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.55)";
    search.style.backgroundColor = "white";
    search.style.color = "black";
    search.style.boxShadow = "none";
    search.style.boxShadow = "0px 0px 20px #00000066";
    for (let i = 0; i < sim.length; i++) {
      sim[i].style.color = "black";
    }
  }
  i++;
};
