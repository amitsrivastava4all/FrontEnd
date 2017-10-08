class ParentCalc {
    protected firstNumber:number ;
    private message:string;
    private attendance : boolean;
    private temp:any;
    constructor(firstNumber: number){
        this.firstNumber = firstNumber;
    }
    disp():void{
        //this.firstNumber = "Hello";
        this.temp = 1000;
        this.temp = "Hello";
    }
}
class Calc extends ParentCalc{
    //private firstNumber:number;
    //secondNumbe:number;
    constructor(firstNumber:number, private secondNumber:number){
        super(firstNumber);
        //this.firstNumber = firstNumber;

    }
    addition():number{
        return this.firstNumber  + this.secondNumber;
    }
   private  show():void{
        console.log("this is show");
    }
    subtract():number{
        this.show();
        return this.firstNumber - this.secondNumber;
    }
}

window.addEventListener("load",init);
function init(){
    document.getElementById("add").addEventListener("click",doAdd);
}
function doAdd(){
    var fno = parseInt(document.querySelector("#firstno").value);
    var sno = parseInt(document.querySelector("#secondno").value);
    var calc = new Calc(fno , sno);
    var result =  calc.addition();
    document.getElementById("result").innerHTML = ""+result;


}