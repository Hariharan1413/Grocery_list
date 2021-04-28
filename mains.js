function addItem(){

    var ul = document.getElementById("buyproducts");
    var products = document.getElementById("products");
    var li = document.createElement("li");
    li.setAttribute('id',products.value);
    li.appendChild (document.createTextNode(products.value));
    ul.appendChild(li);
}

function removeItem(){

    var ul = document.getElementById("buyproducts");
    var products = document.getElementById("products");
    var item = document.getElementById(products.value);
    ul.removeChild(item);
}

function graspItem() {
    var mylist = document.getElementById("products");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
     }