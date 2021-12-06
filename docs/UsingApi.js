const pic = document.getElementById("pic");
const btn = document.getElementById("btn");
btn.addEventListener('click', getInput);
function getInput(){
  window.d = document.getElementById('date').value;
  getPic(d);
}

function getPic(d) {
  fetch('https://api.nasa.gov/planetary/apod?api_key=DMUzNEAjQqyGJcY2dM2sTiG0FAuM3DbuIkevMnLK&date='+d)
    .then((res) => res.json())
    .then((data) => {
      pic.innerHTML = ` <img src= "${data.url}"/>`;
    });
}
