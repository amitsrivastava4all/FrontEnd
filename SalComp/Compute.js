import React from 'react';
class Compute extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            hra:0,
            da:0,
            ta:0,
            ns:0,
            pf:1000
        };
    }

    computeHra(){
        //this.setState({hra: (parseInt(this.props.sal) * 0.30)});
        return parseInt(this.props.sal) * 0.30;
        //console.log("HRA is ",this.state.hra);
    }

    computeDA(){
       return parseInt(this.props.sal) * 0.20;
        //this.setState({da: (parseInt(this.props.sal) * 0.20)});
       // console.log("DA is ",this.state.da);
    }

    computeTA(){
        return parseInt(this.props.sal) * 0.10;
        //this.setState({ta: (parseInt(this.props.sal) * 0.10)});
        //console.log("TA is ",this.state.ta);
    }

    computeNS(){
        console.log("Inside ComputeNS");
       // this.computeHra();
       // this.computeDA();
       // this.computeTA();
       // console.log(this.state.hra+" "+this.state.da+" "+this.state.ta);
       var hra = this.computeHra();
       var da = this.computeDA();
       var ta = this.computeTA();
       console.log(hra +" "+da+" "+ta);
        let totalSal = parseInt(this.props.sal)+hra+ da + ta -this.state.pf; 
        console.log("total Sal ",totalSal);
        this.setState({ns: totalSal});
        //return this.state.ns;
        return totalSal;
    }

    render(){
            return(
                <div>
                 <button onClick={this.computeNS.bind(this)}>Compute Salary</button>
                    <p>Net Salary is {this.state.ns}</p>
                    <p>Basic Salary is {this.props.sal}</p>
                    <p>HRA  is {this.computeHra()}</p>
                    <p>DA  is {this.computeDA()}</p>
                    <p>TA  is {this.computeTA()}</p>
                    <p>PF  is {this.state.pf}</p>
                </div>
            );
    }

}
export default Compute;