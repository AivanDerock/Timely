function carregar() {
  let msg = document.querySelector('div#msg')
  let img = document.querySelector('img#imagem')
  let dataAtual = new Date()
  let hora = dataAtual.getHours()

  // Dia da semana
  let msgDia = document.querySelector('#msgDia')
  let dias = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
  ]
  let diaSemana = dias[dataAtual.getDay()]
  msgDia.innerHTML = `Hoje é ${diaSemana}`

  // Data atual
  let dia = dataAtual.getDate().toString().padStart(2, '0')
  let mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0')
  let ano = dataAtual.getFullYear()
  let dataMsg = document.querySelector('#data')
  dataMsg.innerHTML = `Dia ${dia}/${mes}/${ano}`

  let saudacao = ''
  if (hora >= 0 && hora < 12) {
    msg.style.color = '#E38357'
    saudacao = 'Bom dia!'
    img.src =
      'https://images.pexels.com/photos/6120456/pexels-photo-6120456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    img.style.border = '3px solid #E38357'
  } else if (hora >= 12 && hora < 18) {
    msg.style.color = '#C39161'
    saudacao = 'Boa tarde!'
    img.src =
      'https://images.pexels.com/photos/13549506/pexels-photo-13549506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    img.style.border = '3px solid #C39161'
  } else {
    msg.style.color = '#ff35a8'
    saudacao = 'Boa noite!'
    img.src =
      'https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    img.style.border = '3px solid #ff35a8'
  }

  msg.innerHTML = `${saudacao}`

  // Iniciar atualização da hora
  atualizarHora()
  setInterval(atualizarHora, 1000)
}

function atualizarHora() {
  let horaMsg = document.querySelector('#hora')
  let agora = new Date()
  let horaFormatada = agora.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  })
  horaMsg.innerHTML = `Agora é ${horaFormatada}`
}
