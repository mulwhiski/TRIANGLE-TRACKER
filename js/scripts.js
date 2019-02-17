var triangleType=["equlateral", "isoceles", "scalenes"]
var sideA=prompt("enter number")
var sideB=Prompt("enter number")
var sidec=prompt("enter number")
if (sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA)
{alert("NOT A TRIANGLE! PLEASE RE-INPUT")}
}else if(sideA===sideB && sideB == sideC){
  alert("equilateral");
}else if (sideA===sideB || sideA == sideC || sideB == sideC) {
  alert("isoceles");
}else {
  alert("scalene");
}    
