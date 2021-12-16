const myInterval = window.setInterval(() => {
    var table = document.getElementsByTagName("table")[0];
    if (table != null && table != undefined){
        const newTd = document.createElement('td');
        table.rows[0].appendChild(newTd);

        for (var i = 1, row; row = table.rows[i]; i++) {
            addButton(row)
        }       
        clearInterval(myInterval);
    }
}, 2000);

function addButton(row) {
    const btn = document.createElement("button");
    btn.innerHTML = "Add ao mercado";
    btn.onclick = function(){
        var obj = {
            company: row.cells[0].innerHTML,
            contact: row.cells[1].innerHTML,
            country: row.cells[2].innerHTML
        }
        console.log(obj);
    };

    const cell = document.createElement('td');
    cell.appendChild(btn);
    row.appendChild(cell);
}
// document.addEventListener("DOMSubtreeModified", function(event){
//     var email = document.getElementById("email");
//     if(email != null && email != undefined) {
//         alert(email.value)
//     }
// });
// var table = document.getElementsByTagName("table")[05];

function reloadMethod() {
    alert("content")
}