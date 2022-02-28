const form = $("#formulario > form");

form.on("submit", async event => {

    event.preventDefault();
    const body = form.serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});

    const request = await fetch("https://backend-flexivel.herokuapp.com/", {
        method: "POST",
        body: JSON.stringify(body),
        headers: new Headers({
            Authorization: 'rm86538@fiap.com.br',
            'Content-Type': 'application/json',
        }),
    });

    const json = await request.json();
    alert("Formulário enviado com sucesso!")
    document.location.reload(true);
    console.log({ json });
});