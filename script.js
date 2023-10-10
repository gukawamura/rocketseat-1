function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')



    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode, acionar a img light
        img.setAttribute("src", "./assets/avatar-light.png")
    }else{
        img.setAttribute("src" , "./assets/avatar.png")
    }


    // a função comentada é a mesma q a função toggle

    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // }else{
    //     html.classList.add('light')
    // }
}