let me = {firstName: 'Tristan', lastName: 'Rosario', age: 15};

window.addEventListener('load',() => {
    let context = document.getElementById("content");
    Content.innerHTML = me.firstName; + "<br / "
    Content.innerHTML += me.lastname; + " "
    content.innerHTML += me.age;
});