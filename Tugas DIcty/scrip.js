const button = document.getElementById("btn");
const tabel = document.getElementById("tbl");

button.addEventListener ("click",() =>{
if (tabel.style.display == "none") {
    tabel.style.display = "block";
} else { tabel.style.display = "none";
}
});


