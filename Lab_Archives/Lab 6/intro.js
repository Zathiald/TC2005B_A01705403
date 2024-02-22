var price1=0;
var price2=0;
var price3=0;
var price4=0;

let wii=300;
let play=350;
let xbox=200;
let wiiu=100;

document.getElementById('quantity1').addEventListener('input', function() {
    updateValue(1, this.value);
});

document.getElementById('quantity2').addEventListener('input', function() {
    updateValue(2, this.value);
});

document.getElementById('quantity3').addEventListener('input', function() {
    updateValue(3, this.value);
});

document.getElementById('quantity4').addEventListener('input', function() {
    updateValue(4, this.value);
});

function saveQuantity1() {
    price1 = parseInt(document.getElementById('displayValue1').innerText);
    if (price1) {
        console.log(price1); // Imprime el valor en la consola para verificar
    } else {
        console.log('displayValue1 está vacío');
    }
}

function saveQuantity2() {
    price2 = parseInt(document.getElementById('displayValue2').innerText);
    if (price2) {
        console.log(price2); // Imprime el valor en la consola para verificar
    } else {
        console.log('displayValue1 está vacío');
    }
}

function saveQuantity3() {
    price3 = parseInt(document.getElementById('displayValue3').innerText);
    if (price3) {
        console.log(price3); // Imprime el valor en la consola para verificar
    } else {
        console.log('displayValue1 está vacío');
    }
}

function saveQuantity4() {
    price4 = parseInt(document.getElementById('displayValue4').innerText);
    if (price4) {
        console.log(price4); // Imprime el valor en la consola para verificar
    } else {
        console.log('displayValue1 está vacío');
    }
}

function calculateTotal(){
    var iva=0.16;
    var subtotal = (price1*wii) + (price2*play) + (price3*xbox) + (price4*wiiu);
    var totalIVA = subtotal * iva;
    var total = subtotal + totalIVA;

    var factura = document.getElementById('factura');
    factura.innerHTML = '';
    factura.innerHTML += '<div class="box"><figure class="image is-128x128"><img class="image-is-rounded" src="https://gamebroslb.com/cdn/shop/products/61cRuXhruLL._SL1200.jpg?v=1690967736&width=1445"></img></figure><h2 class="has-text-centered" readonly> Wii</h2> <h2 class="has-text-centered" readonly> Cantidad: '+ price1 +'</h2><h2 class="has-text-centered" readonly> Subtotal: ' +(price1*wii) +'</h2></div>';
    factura.innerHTML += '<div class="box"><figure class="image is-128x128"><img class="image-is-rounded" src="https://m.media-amazon.com/images/I/61C80byb-TL.jpg"></img></figure><h2 class="has-text-centered" readonly> Playstation 3</h2><h2 class="has-text-centered" readonly> Cantidad: '+ price2 + '</h2><h2 class="has-text-centered" readonly> Subtotal: '+(price2*play) +'</h2></div>';
    factura.innerHTML += '<div class="box"><figure class="image is-128x128"><img class="image-is-rounded" src="https://http2.mlstatic.com/D_Q_NP_834546-MLA50832788403_072022-O.webp"></img></figure><h2 class="has-text-centered" readonly> Xbox</h2><h2 class="has-text-centered" readonly> Cantidad: '+ price3 +'</h2><h2 class="has-text-centered" readonly> Subtotal: '+(price3*xbox)+'</h2></div>';
    factura.innerHTML += '<div class="box"><figure class="image is-128x128"><img class="image-is-rounded" src="https://i0.wp.com/agrlv.com/wp-content/uploads/2019/05/wiiu-ss-blk.jpg?fit=800%2C800"></img></figure><h2 class="has-text-centered" readonly> Wii U</h2><h2 class="has-text-centered" readonly> Cantidad: '+ price4 +'</h2><h2 class="has-text-centered" readonly> Subtotal: '+(price4*wiiu)+'</h2></div>';
    factura.innerHTML += '<div class="has-text-centered">IVA: ' + totalIVA + '<br></div>';
    factura.innerHTML += '<div class="has-text-centered">Total: ' + total + '<br></div>';
}

  
function cambiarEstilo() {
    document.getElementById("miParrafo").className = "is-size-1 has-text-danger";
    document.getElementById("miParrafo").innerHTML = "BOO! ah te espante";
}
  
function restaurarEstilo() {
    document.getElementById("miParrafo").className = "is-size-4";
    document.getElementById("miParrafo").innerHTML = "Pasa el cursor sobre este texto";
}

function mostrarAyuda(id) {
    document.getElementById('ayuda-' + id).classList.remove('is-hidden');
  }
  
  function ocultarAyuda(id) {
    document.getElementById('ayuda-' + id).classList.add('is-hidden');
  }








