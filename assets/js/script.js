let novaTarefa = document.querySelector('[data-form-button]')

//criando o evento de clique
novaTarefa.addEventListener('click', (evento) =>{

    evento.preventDefault()
    //pegando o input do html
    const input = document.querySelector('[data-form-input]')
    const lista = document.querySelector('[data-list]')
    //pegando o valor de input (o que o usuário vai digitar)
    const valor = input.value
    //apagando a mensagem do input
    //criando o elemento li 
    const tarefa = document.createElement('li')
   
    //colando a variavel valor dentro de conteudo 
    tarefa.classList.add('task')
    const conteudo = `<p class='content'>${valor}</p>`
    tarefa.innerHTML = conteudo
    lista.appendChild(tarefa)
    input.value = ''
    
})