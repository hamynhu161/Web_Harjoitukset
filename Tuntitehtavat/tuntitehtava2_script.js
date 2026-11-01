"user stricts";

lista = [];
for (let i = 1; i < 6; i++) {
    const nimi = prompt("Anna nimi: ")
    lista.push(nimi);
}

document.querySelector("#target1").innerHTML += lista.join(", ");

document.querySelector("#target2").innerHTML =`${lista[lista.length-1]}`

lista_sort = lista.sort()
document.querySelector("#target3").innerHTML =`${lista_sort[0]}`

document.querySelector("#target4").textContent += lista_sort.join(", ");
