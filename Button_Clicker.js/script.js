console.log("page loaded...")

function message() {
    alert("ninja was liked")

}

function login(element) {
    if(element.innerText=="Login") {
        element.innerText="Logout";
    } else {
    element.innerText ="Login";
    }
}
 
function hide(el) {
    el.remove();
}
