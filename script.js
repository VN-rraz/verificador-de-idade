function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formuAno = document.querySelector('#textoano')
    var res = document.getElementById('res')

    if(formuAno.value.lentgth == 0 || Number(formuAno.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formuAno.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 12){
                //criança
                img.setAttribute('src','imagens/menino.png')
            }else if(idade <= 21 ){
                //rapaz
                img.setAttribute('src','imagens/rapaz.png')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src','imagens/adulto.png')
            }else {
                //idoso
                img.setAttribute('src','imagens/senhor.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 12){
                //criança
                img.setAttribute('src','imagens/menina.png')
            }else if(idade <= 21 ){
                //moça
                img.setAttribute('src','imagens/moça.png')
            }else if(idade < 60){
                //adulta
                img.setAttribute('src','imagens/mulher.png')
            }else {
                //idosa
                img.setAttribute('src','imagens/senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}