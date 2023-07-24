var add = document.getElementById('add')
var product_name = document.getElementById('name')
var price = document.getElementById('price')
var description = document.getElementById('description')
var img = document.getElementById('img')


var data = [];
var old_product_data = JSON.parse(localStorage.getItem('products'));
if (old_product_data != null){
   data.push(old_product_data)
}

add.onclick = ()=>{
    var last_id = 0;
    var old_product_data = JSON.parse(localStorage.getItem('products'))
    if (old_product_data != null) {
        last_id = old_product_data[old_product_data.length-1].id
    }

    var product = {id: last_id+1 , name: product_name.value , price: price.value , description: description.value , img: img.value}
    data.push(product);
    localStorage.setItem('products' ,JSON.stringify(data));

}