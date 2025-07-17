let me = {title: 'story 1', body: '', link: 15};
let you = 
window.addEventListener('load' , () => {
  let content = document.getElementById("content");
  content.innerHTML = me.firstname + "<br />";
  content.innerHTML = me.lastname + "<br />";
  content.innerHTML = me.age;
});

function goToLocation(path) {
  window.location.href = path;
}
function checkKeyPress(e) {
  if (e.keyCode === 32) {
    e.preventDefault();
    goToLocation('http://my.marist.edu');
  }
}
window.onload = function () {
  document.body.setAttribute("tabindex", "0");
  document.body.focus();
  document.body.addEventListener("keydown", checkKeyPress);
  const clickTarget = document.getElementById('portal_button');
  if (clickTarget) {
    clickTarget.style.cursor = 'pointer';
    clickTarget.addEventListener('click', () => {
      goToLocation('http://my.marist.edu');
    });
  }
};