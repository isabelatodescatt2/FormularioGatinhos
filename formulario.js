function Enviar(){
    let nomeUsuario = document.getElementById('nome').value
    let emailUsuario = document.getElementById('email').value
    let celularUsuario = document.getElementById('celular').value
    let residenciaUsuario = document.querySelector("input[name='residencia']:checked").value
    let exeperienciaGatoUsuario = document.querySelector("input[name='experiencia']:checked").value
    let idadeGatoUsuario = document.querySelector("input[name='idade']:checked").value
    let sexoGatoUsuario = document.querySelector("input[name='sexo']:checked").value

    alert('Seu nome é: ' + nomeUsuario + '\n' +
          'Seu email é: ' + emailUsuario + '\n' +
          'Seu telefone é: ' + celularUsuario + '\n' +
          'Sua residencia é: ' + residenciaUsuario + '\n' +
          'Você considera que ' + exeperienciaGatoUsuario + '\n' +
          'Você considera que ' + idadeGatoUsuario + '\n' +
          'Você considera que ' + sexoGatoUsuario)

    window.location.href='index.html'

}

