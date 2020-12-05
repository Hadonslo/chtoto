class Macine {
    constructor(){
        this.marka
        this.date
        this.Stoimost
        this.Familia
        this.Imya
        this.Otchestvo
        this.Vid
    }
    Zapic(){
    this.marka="Марка Автомобиля добавлена"
    this.date="Дата Изменена"
    this.Stoimost="Стоимость"
    this.Familia="Фамилия добавлена"
    this.Imya="Имя добавлено"
    this.Otchestvo="Отчество добавлено"
    this.Vid="Добавлен Вид работ"
}
}
let mater=new Macine();
document.getElementById("for1").addEventListener("change",(e)=>{
    mater.Zapic();
    console.log(mater.Familia);
},false);
document.getElementById("for2").addEventListener("change",(e)=>{
    mater.Zapic();
    console.log(mater.Imya);
},false);
document.getElementById("for3").addEventListener("change",(e)=>{
    mater.Zapic();
    console.log(mater.Otchestvo);
},false);
document.getElementById("for4").addEventListener("change",(e)=>{
    mater.Zapic();
    console.log(mater.marka);
},false);
document.getElementById("for5").addEventListener("change",(e)=>{
    mater.Zapic();
    console.log(mater.Stoimost);
},false);
document.getElementById("for6").addEventListener("change",(e)=>{
    mater.Zapic();
    console.log(mater.date);
},false);
document.getElementById("for7").addEventListener("change",(e)=>{
    mater.Zapic();
    console.log(mater.Vid);
},false);
let tenor = document.querySelector('#tenor');
tenor.onclick = function (event){
    event.preventDefault();
    let meter = new Macine();
    meter.Zapic();
     alert('Заказ отправлен');
}
