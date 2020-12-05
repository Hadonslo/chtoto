class AVT {
    constructor(){  
        this.procent=0
        this.sms=''
      }
      hopa(){
        this.procent+=5;
        
      }
      psp(){
    this.sms="GOOD"
    alert(this.sms);
    }

}

var pain=new AVT();


document.getElementById("foo_bar").value=pain.procent;
    setTimeout(function tick(){
        console.log(pain);
        pain.hopa();
      document.getElementById("foo_bar").value=window.pain.procent;
      if (pain.procent<100){
        setTimeout(tick, 1000);
      } else{
          alert('Ваша машина готова!');
      }
      
    }, 1000);
     
    