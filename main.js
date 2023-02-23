const url = "https://islomapi.uz/api/monthly?region=Toshkent&month=4";
const select = document.getElementById("select");
const joyi = document.getElementById("joyi");
const vaqt_list = document.querySelector(".vaqt_list");

function getPraytime(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let displeymenu = data.map((item) => {
                return `<article>
            <h2 class="kun">Oyning ${item.day}-kuni</h2>
            <h2 class="hafta">Haftaning ${item.weekday} kuni</h2>
             <h2 class="oy">${item.month}</h2>
            <h2 class="region">${item.region}</h2>
            <span class="times">
           <p class="asr">${item.times.asr} asr vaqti</p>
           <p class="hufton">${item.times.hufton} hufton vaqti</p>
           <p class="peshin">${item.times.peshin} peshin vaqti</p>
           <p class="quyosh">${item.times.quyosh} quyosh chiqishi</p>
           <p class="shom_ifto">${item.times.shom_iftor} shom iftor vaqti</p>
           <p class="tong_saharlik">${item.times.tong_saharlik} tong saharlik vaqti</p>
            </span>
        </article>`;
            });
            displeymenu = displeymenu.join("");
            vaqt_list.innerHTML = displeymenu;
        });
}

let vaqt = new Date();
let month = vaqt.getMonth();

select.addEventListener("change", function (e) {
    console.log(e.target.value);
    let url = `https://islomapi.uz/api/monthly?region=${e.target.value}&month=${
    month + 1
  }`;
    console.log(url);
    getPraytime(url);
});