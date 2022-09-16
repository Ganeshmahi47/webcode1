async function foo() {

    try {

        let container =document.createElement("div");
        container.setAttribute("class","container");
        container.innerHTML=`<h1>Makeup Products</h1>`
        let row=document.createElement("div");
        row.setAttribute("class","row")
        container.append(row)

        var country =("http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick")
        let res=await fetch(country);
        let value=await res.json();
        console.log(value)

        for(var i=0;i<value.length;i++){
            row.innerHTML+=`
            <div class="col-lg-6">
            <div class="card text-white bg-primary mb-3" style="max-width: 80rem;">
       <div class="card-header">${value[i].name}</div>
       <div class="card-body">
       <img src="${value[i].image_link}" class="card-img-top" alt="...">
       <div><a href="${value[i].product_link}" target="_blank">Visit Product</a><div>
        <div class="card-title">Brand:${value[i].brand} </div>
         <div class="card-title">Price:${value[i].price}$</div>
         <div class="card-title">Description:${value[i].description} </div>
       
         
       </div>
       </div>
       </div>
       </div>
       `;
       document.body.append(container)

        }

    } catch (error) {
        console.log(error);
    }

}
foo();