
// ==========variables buy====================

let listNewBookStore = JSON.parse(localStorage.getItem("nEw_book"));

function newLocalBookStore(){
    localStorage.setItem("nEw_book", JSON.stringify(listNewBookStore));
}


let all_contain = document.querySelector(".buy_product");


function customerOrder(){
    let main_cart = document.querySelector(".main_buy");
    console.log(main_cart);
    main_cart.remove();
    main_cart= document.createElement("div");
    main_cart.className = "main_buy";

    for (let index = 0; index < listNewBookStore.length; index ++){
        let order_contain = document.createElement("div");
        order_contain.className = 'order-contain';
        order_contain.dataset.index = index;

        let img = document.createElement("img");
        img.id = "img_on_buy";
        img.src = listNewBookStore[index].file_upload;
        order_contain.appendChild(img);

        // let qauntity = document.createElement("input");
        // qauntity.type = "number";
        // qauntity.className = "qauntity_on_buy";
        // qauntity.value = "1";
        
        // order_contain.appendChild(qauntity);

        let main_title = document.createElement("div");
        main_title.className = "main-title";

        order_contain.appendChild(main_title);

        let title_book = document.createElement("div");
        title_book.className = "title-book";

        main_title.appendChild(title_book);

        let p = document.createElement("p");
        p.id = "name_book";
        p.textContent = listNewBookStore[index].name_book;

        title_book.appendChild(p);

        let price = document.createElement("div");
        price.className = "price";

        main_title.appendChild(price);

        

        let p1 = document.createElement("p");
        p1.id = "price_book";
        p1.textContent = listNewBookStore[index].price_book;

        let p2 = document.createElement("p");
        p2.id = "pay_book";
        p2.textContent = listNewBookStore[index].pay_book;

        price.appendChild(p1);
        price.appendChild(p2);

        let type_of_book = document.createElement("div");
        type_of_book.id = "typeOfBook";


        main_title.appendChild(type_of_book);

        let p3 = document.createElement("p");
        p3.id ="type_book";
        p3.textContent = listNewBookStore[index].type_book;
    

        type_of_book.appendChild(p3);

        let delete_cart = document.createElement("img");
        delete_cart.className = "delete-cart";
        delete_cart.src = "../../../../img/DELETE BUY.png";
        delete_cart.addEventListener("click", removeCart);

        order_contain.appendChild(delete_cart);

        main_cart.appendChild(order_contain);
    }
    all_contain.appendChild(main_cart);
}
customerOrder();
// ==================getvalue from click ===============

function get_order(evt){
    
   index = evt.target.parentElement.parentElement.parentElement.dataset.index;
 
    let book_on_buy = listNewBookStore[index];
    document.getElementById("img_on_buy").src = book_on_buy.file_upload;
    document.getElementById("name_book").textContent = book_on_buy.name_book;
    document.getElementById("price_book").textContent = book_on_buy.price_book;
    document.getElementById("pay_book").textContent = book_on_buy.pay_book;
    document.getElementById("type_book").textContent = book_on_buy.type_book;
    
}

function removeCart(eve){
    let index = eve.target.parentElement.dataset.index;
    console.log(index);
    listNewBookStore.splice(index, 1);
    newLocalBookStore()
    
    customerOrder();
    
    
}

// =========================total  from order ======================
let price_total = document.querySelector(".total_price");

// total change====================
let total = 0;
for (let price of listNewBookStore){

    retulTotal = price.price_book;
    total += parseInt(retulTotal)
}
price_total.textContent = total + "$";




// ==========MAIN======================

get_order();
pay_money();

// newLocalBookStore();


