class Logic{
    constructor(salary,pf){
        this.salary = parseInt(salary);
        this.pf = pf;
        this.hra = this.computeHra();
        this.da = this.computeDa();
        this.ta = this.computeTa();
        this.gs = this.grossSalary();
        this.ns = this.netSalary();
    }
    computeHra(){
        return this.salary * 0.30;
    }
    computeDa(){
        return this.salary * 0.20;
    }
    computeTa(){
        return this.salary * 0.10;

    }
    grossSalary(){
        return this.salary + this.computeHra() + this.computeDa() + this.computeTa();
    }
    netSalary(){
        return this.grossSalary() - this.pf;
    }

}
export default Logic;