class Manager {
    constructor() {
        this.Summa;
        this.add;
        this.del;
        this.change;
    }
    oklad(){
        this.Summa;
        let num1 = 0.05
        let num2 = 20000
        let num3 = document.getElementById("for1").value;
        this.Summa=num1 * num3;
    }
    sostoyanie_zakaza(){
        this.add;
        this.del;
        this.change;
        this.add="Заказ добавлен";
        this.del="Заказ удален"
        this.change="Заказ изменён"
    }
    delete(){
        this.del="Заказ удален"
    }
}
let mater=new Manager();
document.getElementById("for1").addEventListener("change",(e)=>{
    mater.oklad();
    alert(mater.Summa);
},false);
let rest = new Manager();
document.getElementById("for2").addEventListener("change", (e)=>{
rest.sostoyanie_zakaza();
    alert(rest.add)
},false);
document.getElementById("for3").addEventListener("change",(e)=>{
    rest.delete();
    alert(rest.del);
},false);
document.getElementById("for4").addEventListener("change", (e)=>{
rest.sostoyanie_zakaza();
    alert(rest.change)
},false);


