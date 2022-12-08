const menuItems = document.querySelectorAll(".menu-item");
console.log(menuItems);

function onMenuClick(){
    console.log("hello");
}

for(var i=0; i<menuItems.length; i++){
    menuItems[i].addEventListener("click", onMenuClick);
}