
// ============constants variables=========

const get_buy_dialog = document.querySelector("#buy-dialog");
const listBookStore = JSON.parse(localStorage.getItem("listBook"));



// =====================loadBOOK from local====================

// =====================Contain all book ======================
let main_container = document.querySelector("#main-card");


function toCreat_card() {

    for (let index =0 ; index < listBookStore.length; index++) {

        let card_contain = document.createElement('div');
        card_contain.className = "card-contain";
        card_contain.dataset.index = index;
        let h2 = document.createElement('h2');
        h2.textContent = listBookStore[index].name_book;
        h2.id = 'title_buy_book';
        card_contain.appendChild(h2);

        let img_card = document.createElement('img');
        img_card.src = listBookStore[index].file_upload;

        card_contain.appendChild(img_card);
        
        let cerrency =document.createElement("div");
        cerrency.className = "cerrency";
        card_contain.appendChild(cerrency);

        let p1 = document.createElement("p");
        p1.textContent = listBookStore[index].price_book;
        p1.id = 'price_buy_book';
        cerrency.appendChild(p1);

        let p2 = document.createElement("p");
        p2.textContent = listBookStore[index].pay_book;
        p2.id = 'pay_buy_book';
        cerrency.appendChild(p2); 

        let type_book = document.createElement('div');
        type_book.className = 'type_book';
        card_contain.appendChild(type_book);
        

        let p = document.createElement("p");
        p.textContent = listBookStore[index].type_book;
        p.id = 'type_buy_book';
        type_book.appendChild(p);
        
        
        


        let card_footer = document.createElement("div");
        card_footer.className = "card-footer";

        card_contain.appendChild(card_footer);

        let star_icon = document.createElement("div");
        star_icon.className = "star-icon";

        card_footer.appendChild(star_icon);

       
        let checkbox =  document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id ="checkbox";
        checkbox.addEventListener("click", get_card_value);

        card_contain.appendChild(checkbox);

        for (let i=0; i<5; i++){
          let icon = document.createElement("ion-icon");
          icon.name = "star";
          star_icon.appendChild(icon);
        }
    
        let btn = document.createElement("div");
        btn.className = "btn";

        card_footer.appendChild(btn);


        let a_buy = document.createElement("a");
        a_buy.href = "../customer/buy/buy.html";
        a_buy.textContent= "Add to cart+";

        let button2 = document.createElement("button");
        button2.textContent  = 'Detail';
        btn.appendChild(a_buy);
        btn.appendChild(button2);

        button2.addEventListener("click",  book_Detail);
        button2.addEventListener("click",  get_buyer_card);
     
      
        main_container.appendChild(card_contain);
        console.log(card_contain);

        
       
  }
}   



// ========================searchBOOk===================
function searchBook(ev){
    let searchLetter = ev.target.value;

    let firstUpperLetter = searchLetter.toUpperCase();
    let book_search = document.querySelectorAll("#main-card .card-contain"); 
    // console.log(book_search);

    for (let value of book_search){
        // console.log(value);
        let showBook = value.firstElementChild.textContent.toUpperCase();
  
        // ===run in browser =====
        let toDisplay = '';
        // console.log(showBook.indexOf(firstUpperLetter))
          // Update the style of the span (i visible or hidden)

        if (showBook.indexOf(firstUpperLetter) == -1) {
          toDisplay = 'none';
        }else{
          toDisplay = 'block';
        }
        value.style.display = toDisplay;
         
    } 
}

let searchInput = document
    .getElementById("search")
    .querySelector("input");
searchInput.addEventListener("keyup" , searchBook);

// ====================diglog show and hide==================

function hide(element){
  element.style.display = "none";
}
function show(element){
  element.style.display = "block";
}


// =============show dialog Buy===========

function book_Detail(){
   show(get_buy_dialog);
}
// =======cancel diglog================

function btn_cancel(){
  hide(get_buy_dialog);
}


// ==========get data from card on customer page =================

function get_buyer_card(event){
  index = event.target.parentElement.parentElement.parentElement.dataset.index;
  let card_buyer = listBookStore[index];
  document.getElementById("name_book").textContent = card_buyer.name_book;
  document.getElementById("price_book").textContent = card_buyer.price_book;
  document.getElementById("pay_book").textContent = card_buyer.pay_book;
  document.getElementById("type_book").textContent = card_buyer.type_book;
  document.getElementById("file_upload").src = card_buyer.file_upload;

}



let nEw_book = [];
// ====================Newstorage=====================
function newLocalBookStore(){
  localStorage.setItem("nEw_book", JSON.stringify(nEw_book));
}

// ===========loadnewBook================

function loadNewLocalBookStore(){
  let listNewBookStore = JSON.parse(localStorage.getItem("nEw_book"));
  if (listNewBookStore !== null){
    nEw_book = listNewBookStore;
  }
}


function  get_card_value(ev){
 
  index = ev.target.parentElement.dataset.index;
  console.log(index);
  let newBookStore = listBookStore[index];

  nEw_book.push(newBookStore);
  // console.log(newBookStore);

  newLocalBookStore();

}

// =======MAIN=====================
toCreat_card();