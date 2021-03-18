const mblPrice = parseInt(document.getElementById("mblPrice").innerText);
const casePrice = parseInt(document.getElementById("casePrice").innerText);

document.getElementById("mblMinus").addEventListener("click",()=>{
    setMblValue("mblValue",-1,"mblPrice");
});
document.getElementById("mblPlus").addEventListener("click",()=>{
    setMblValue("mblValue",1,"mblPrice");
});
document.getElementById("caseMinus").addEventListener("click",()=>{
    setMblValue("caseValue",-1,"casePrice");
});
document.getElementById("casePlus").addEventListener("click",()=>{
    setMblValue("caseValue",1,"casePrice");
});
document.getElementById("mblClose").addEventListener("click",()=>{
    updater("mblPrice",0,0,0);
    document.getElementById("mblValue").value = 0;
    finalUpdate();
});
document.getElementById("caseClose").addEventListener("click",()=>{
    updater("casePrice",0,0,0);
    document.getElementById("caseValue").value = 0;
    finalUpdate();
});

function setMblValue(id,cnt,priceId){
    const k = parseInt(document.getElementById(id).value);
    let currPrice = parseInt(document.getElementById(priceId).innerText);
    let total = k+cnt;
    if(cnt<0) if(k==0) total = 0;
    document.getElementById(id).value = total;
    if(priceId=="mblPrice"){
        if(total!=0) updater(priceId,currPrice,mblPrice,cnt);
        else updater(priceId,0,0,cnt);
    }else{
        if(total!=0) updater(priceId,currPrice,casePrice,cnt);
        else updater(priceId,0,0,cnt);
    }
    finalUpdate();

}
function updater(priceId,price,add,cnt){
    if(cnt>0)
        document.getElementById(priceId).innerText = price+add;
    else document.getElementById(priceId).innerText = price-add;
}
function finalUpdate(){
    const totalPrice = parseInt(document.getElementById("mblPrice").innerText)+parseInt(document.getElementById("casePrice").innerText)
    document.getElementById("subTotalId").innerText = totalPrice;
    document.getElementById("totalId").innerText = totalPrice;
}