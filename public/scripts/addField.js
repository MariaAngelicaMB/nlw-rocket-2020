//Procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField)

//executar acao
function cloneField(){
    //duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo: limpar
    fields.forEach(function(field){
        //pega o fields do momento e limpa ele
        field.value = ""

    })


    //colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}