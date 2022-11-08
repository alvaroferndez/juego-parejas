function iniciarContador(){
      segundos = document.getElementsByTagName("span")[0];
      milisegundos = document.getElementsByTagName("span")[2];

      function contarMilisengundos(){
            if(m<99){
                  m++;
            }else{
                  m=0;
            }
            if(m==0){
                  s++;
            }
            resultado = []
            resultado.push(m,s)
            return resultado;
      
      }
      
      m=0;
      s=0;

      contador = setInterval(()=>{milisegundos.innerHTML = contarMilisengundos()[0];segundos.innerHTML = contarMilisengundos()[1]},20);
}

function detenerContador(){
      clearInterval(contador);
}


function iniciar(){
      imagenes = document.getElementsByTagName("img");

      lista_alt_imagenes = [
            "java",
            "python",
            "css",
            "html",
            "php",
      ]

      lista_img = {
            "php":"https://www.php.net/images/logos/new-php-logo.svg",
            "java":"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            "html":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
            "css":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
            "python":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
      }

      function generarNumero(max){
            return Math.floor(Math.random() * max);
      }

      function asignarAlt(valor_alt){
            numero = generarNumero(imagenes.length);
            if(imagenes[numero].alt == ""){
                  imagenes[numero].alt = valor_alt;
            }else{
                  asignarAlt(valor_alt);
            }
      }

      for(let i=0; i<lista_alt_imagenes.length; i++){
            for (j=0; j<2; j++){
                  asignarAlt(lista_alt_imagenes[i]);
            }
      }

      function asignarImagen(e){
            claves = Object.keys(lista_img);
            for (let i=0; i<claves.length; i++){
                  if(e.target.alt == claves[i]){
                        e.target.src = lista_img[claves[i]];
                  }
            }
      }

      function voltearImagen(lista){
            for(let i=0; i<imagenes.length; i++){
                  if ((imagenes[i].alt == lista[0]) || (imagenes[i].alt == lista[1])){
                        imagenes[i].src = "caudro.png";
                  }
            }
            comprobar = []
      }

      function compararImagenes(lista){
            if(lista.length == 2){
                  if(lista[0] != lista[1]){
                        setTimeout(() => voltearImagen(lista),1000);
                  }else if(lista[0] == lista[1]){
                        comprobar = [];
                  }
            }
            for(let i=0; i<imagenes.length; i++){
                  if(imagenes[i].src != "https://alvaroferndez.github.io/juego-parejas/caudro.png"){
                        lista_resueltas.push("");
                  }
            }
            if(lista_resueltas.length == 10){
                  detenerContador()
            }else{
                  lista_resueltas=[];
            }
      }

      comprobar = [];
      lista_resueltas = [];

      function cambiarImagen(e){
            asignarImagen(e)
            comprobar.push(e.target.alt);
            compararImagenes(comprobar);
      }

      contador = undefined;
      for(let i=0; i<imagenes.length; i++){
            imagenes[i].addEventListener("click",cambiarImagen);
      }
}


window.addEventListener("load", () =>{
      iniciar();
      iniciarContador();
})