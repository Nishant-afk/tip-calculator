

custom = document.getElementById("custom");

function check_val(event){
  let value = event.charCode || event.keyCode;
  if((value >= 48 && value <= 57) || value==46){}
  else{
    event.preventDefault();

    return false;
  }
}

function check_num(event){
  let value = event.charCode || event.keyCode;
  if(value >= 48 && value <= 57){}
  else{
    event.preventDefault();

    return false;
  }
}

function check_zero(){

  if(document.getElementById("Bill").value == 0)
  { 
    document.getElementById("s_Bill").innerHTML = "Can\'t be zero";
    document.getElementById("Bill").style.border = "1px solid red";
  }
  else{
    document.getElementById("s_Bill").innerHTML = "";
    document.getElementById("Bill").style.border = "none";
  }

  if(document.getElementById("people").value == 0)
  {
    document.getElementById("s_ppl").innerHTML = "Can\'t be zero";
    document.getElementById("people").style.border = "1px solid red";
  }
  else{
    document.getElementById("s_ppl").innerHTML = "";
    document.getElementById("people").style.border = "none";
  }
}

custom.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();

    per = document.getElementById("custom").value;
    bill_amt = document.getElementById("Bill").value;
    num_ppl = document.getElementById("people").value;

    per = per/100;

    let total_tip = per*bill_amt;
    let tip_amt_person = total_tip/num_ppl;
    let total_bill = (per+1)*bill_amt;
    let total_bill_person = total_bill/num_ppl;
  
    document.getElementById("tip_person_amt").innerHTML = "$"+tip_amt_person.toFixed(2);
    document.getElementById("tip_total_amt").innerHTML = "$"+total_bill_person.toFixed(2);
  }
}); 

function tip_cal(per){

  bill_amt = document.getElementById("Bill").value;
  num_ppl = document.getElementById("people").value;

  check_zero();

  let total_tip = per*bill_amt;
  let tip_amt_person = total_tip/num_ppl;
  let total_bill = (per+1)*bill_amt;
  let total_bill_person = total_bill/num_ppl;

  console.log(tip_amt_person);
  console.log(total_bill_person);

  document.getElementById("tip_person_amt").innerHTML = "$"+(tip_amt_person.toFixed(2));
  document.getElementById("tip_total_amt").innerHTML = "$"+(total_bill_person.toFixed(2));

}


function reset(){
  document.getElementById("Bill").value = "";
  document.getElementById("people").value = "";
  document.getElementById("custom").value = "";

  document.getElementById("s_Bill").innerHTML = "";
  document.getElementById("Bill").style.border = "none";

  document.getElementById("s_ppl").innerHTML = "";
  document.getElementById("people").style.border = "none";

  document.getElementById("tip_person_amt").innerHTML = "$"+"0.00";
  document.getElementById("tip_total_amt").innerHTML = "$"+"0.00";

}

function reset_chk(){
  if(  
  document.getElementById("Bill").value == "" &&
  document.getElementById("people").value == "" &&
  document.getElementById("custom").value == "")
  {
    document.getElementsByClassName("reset").disabled = false;
  }
  else{
    document.getElementsByClassName("reset").disabled = true;
  } 
}
