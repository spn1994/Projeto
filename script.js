function toggleMode() {
  /* document é a pagina inteira em si */
  const html =
    document.documentElement /* acesso meu documento html atraves do .documentElement */
  html.classList.toggle("light")
  //pegar tag imagem
  const img = document.querySelector("#profile img")
  //se tiver liight mode, add light imagem
  if (html.classList.contains("light")) {
    //subtituir a imagem
    img.setAttribute("src", "./assets/Mobile/Avatar-light.jpg")
  } else {
    img.setAttribute("src", "./assets/Mobile/avatar.png")
  
  }

  //if (html.classList.contains("light")) {
  // html.classList.remove("light")
  //} else {
  //html.classList.add("light")
  //} pode ser toggle no lugar

 
}