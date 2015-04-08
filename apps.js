function sLoan()
{
/*
  p  : Principal
  ar : Annual interest rate
  t  : Total time period (in Years)
  ppy: Payments or Periods per year
*/
    var p=0.0, ar=0.0, t=0.0, ppy=0.0, pi=0.0, n=0.0, oneprd=0.0, installment, interest, amount;	
	
		var	p      = document.getElementById("LoanAmount").value;
		var	ar     = document.getElementById("AnnualInterestRate").value;
		var t      = document.getElementById("LoanPeriod").value;
		var oneprd = document.getElementById("PeriodOnePayment").value;			
	
	if( p>0.0 && ar>0.0 && t>0.0 && oneprd>0.0 )
	{
		ar  = ar/100.0;
		ppy = 12.0/oneprd;
		pi  = ar/ppy;  // pi: Periodic interest rate
		n   = t*ppy;   // n : Total number of payments

		installment = (p*pi)/(1.0 -	Math.pow( 1.0+pi , -n )); //regular withdrawals or size of each installment

		amount   = installment * n;
		interest = amount - p;

		//Each installment:installment
		//Total Interest  :interest
		//Total Amount    :amount
		  
		 installment = installment.toFixed(2);
		 document.getElementById('sval').innerHTML = (installment);
	}
	else
	{
		 document.getElementById('sval').innerHTML = ("Improper Data!");
	}
}




$(document).ready(function(){
	  $("#App1").click(function(){
		$("#LoanCalc").slideToggle("slow");
		   });
	});
