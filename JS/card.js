var URSS = document.getElementById("URSS-card");
var Diss = document.getElementById("Diss-card");
var Sum = document.getElementById("Sum-card");

var URSSDesc = document.getElementById("URSSDesc");
var DissDesc = document.getElementById("DissDesc");
var SumDesc = document.getElementById("SumDesc");

URSS.addEventListener("mouseover", function() {
    URSSDesc.style.visibility = "visible";
});

URSS.addEventListener("mouseout", function() {
    URSSDesc.style.visibility = "hidden";
});

URSSDesc.addEventListener("mouseover", function() {
    URSSDesc.style.visibility = "visible";
});

URSSDesc.addEventListener("mouseout", function() {
    URSSDesc.style.visibility = "hidden";
});

Diss.addEventListener("mouseover", function() {
    DissDesc.style.visibility = "visible";
});

Diss.addEventListener("mouseout", function() {
    DissDesc.style.visibility = "hidden";
});

DissDesc.addEventListener("mouseover", function() {
    DissDesc.style.visibility = "visible";
});

DissDesc.addEventListener("mouseout", function() {
    DissDesc.style.visibility = "hidden";
});

Sum.addEventListener("mouseover", function() {
    SumDesc.style.visibility = "visible";
});

Sum.addEventListener("mouseout", function() {
    SumDesc.style.visibility = "hidden";
});

SumDesc.addEventListener("mouseover", function() {
    SumDesc.style.visibility = "visible";
});

SumDesc.addEventListener("mouseout", function() {
    SumDesc.style.visibility = "hidden";
});