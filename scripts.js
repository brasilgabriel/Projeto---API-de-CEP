function template(repositorio) {
    document.getElementById('informacoes').style.visibility = 'visible';

    return `
        <div class="divs_cep">
            <p><span>Rua:</span> ${repositorio.logradouro}</p>
        </div>
        <div class="divs_cep">
            <p><span>Bairro:</span> ${repositorio.bairro}</p>
        </div>
        <div class="divs_cep">
            <p><span>Cidade:</span> ${repositorio.localidade}</p>
        </div>
        <div class="divs_cep">
            <p><span>Estado:</span> ${repositorio.uf}</p>
        </div>
    `
}

function informacoes(propriedades) {
    document.getElementById('informacoes').innerHTML = '';

    document.getElementById('informacoes').innerHTML += template(propriedades)
}

document.getElementById('input_cep').addEventListener('blur', function (event) {
    const url = `https://viacep.com.br/ws/${event.target.value}/json/`;

    fetch(url).then(function (respostaJSON) {
        respostaJSON.json().then(function (resposta) {
            informacoes(resposta);
        })
    })
})