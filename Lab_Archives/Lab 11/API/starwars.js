let request = "https://sw-api.starnavi.io/planets/1"


fetch(request).then((response) => {
    return response.json();
})
.then((data) => {
    let p = document.getElementById("text");
    console.log(data);
    p.innerHTML = JSON.stringify(data.name);
})