    let par = document.querySelector('p');
    par.innerHTML='<em>aqui agora vai o texto gerado pelo javascript</em>';
    par.style="background-color:red";

    let novoPar = document.createElement('p');
    novoPar.innerHTML='<h1>Oi, oi, oi</h1>';
    document.body.appendChild(novoPar);
