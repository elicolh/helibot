// Find a <table> element with id="myTable":
let members;
const table = document.getElementById("table");
const detail = document.getElementById("detail");
fetch("/memb")
  .then(function(r) {
    return r.json();
  })
  .then(e => {
    members = e;
    aff(detail.checked);
  });
setTimeout(()=>document.getElementsByTagName("a")[5].click(), 2000)
detail.addEventListener("click", () => {
  aff(detail.checked);
  window.localStorage.setItem("det", detail.checked);
});

let aff = function(det) {
  if (members == undefined) return;
  for (let i = table.rows.length - 1; i > 0; i--) table.deleteRow(i);
  let i = 1;
  members.sort((a, b) => b.score - a.score);
  members.forEach(memb => {
    var row = table.insertRow(i);
    var pseudoCell = row.insertCell(0);
    var scoreCell = row.insertCell(1);
    var ancienScoreCell = row.insertCell(2);
    pseudoCell.innerHTML = memb.name;
    if(memb.co) pseudoCell.style.fontWeight = "bold"
    scoreCell.innerHTML = det
      ? Math.round(memb.score * 1000) / 1000
      : Math.round(memb.score);
      ancienScoreCell.innerHTML = det
        ? Math.round(memb.ancienScore * 1000) / 1000
        : Math.round(memb.ancienScore);    
      i++;
  });
};
document.addEventListener("DOMContentLoaded", () => {
  if (window.localStorage.getItem("det") == undefined) {
    detail.checked = false;
    window.localStorage.setItem("det", false);
  } else {
    detail.checked = window.localStorage.getItem("det") == "true";
  }})
