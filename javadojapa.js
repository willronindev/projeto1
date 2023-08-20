function togglemode () {
 const html = document.documentElement
html.classList.toggle("noite")

/* vamos agora trabalhar com a mudança de imagem */
const img = document.querySelector("#profile img")
if(html.classList.contains("noite") ) {
    img.setAttribute( "src", "./avatarblack.png" )
}
else {img.setAttribute ("src", "./ToriiGateLogo.png")}

}

