
// =======================seller dilog =======================
const get_book_dilog = document.querySelector("#book-dialog");
const get_all_book = document.querySelector("#contian_all");



let listBook = [
    {
        name_book:'Nice book',
        price_book: '$3.7'
    },
    {
        name_book:'life long',
        price_book: '$3.99'
    },
    {
        name_book:'happy life',
        price_book: '$3.5'
    },
];

let booktoEdit = null;


// ===========hide and show diglog =================
function hide(element){
    element.style.display = "none";
}
function show(element){
    element.style.display = "block";
}

// ===================saveBook=====================

function saveBook() {
    localStorage.setItem("listBook", JSON.stringify(listBook));
}
  
function loadBook() {
    let listBookStore = JSON.parse(localStorage.getItem("listBook"));
    if (listBookStore !== null) {
      listBook = listBookStore;
    }
  }





// =============display Book =============================

function display_Book(){

    let contain_listbook = document.querySelector("#card-container");
    contain_listbook.remove();

    contain_listbook = document.createElement("div");
    contain_listbook.id = "card-container";
    
    for(let index = 0; index < listBook.length; index++){
        let book = listBook[index];
        
        let card_display_contain = document.createElement("div");
        card_display_contain.className = "card-display";
        card_display_contain.dataset.index = index;
        
        contain_listbook.appendChild(card_display_contain);
        
        let title_price = document.createElement("div");
        title_price.className = "book_describe";
        card_display_contain.appendChild(title_price);

        let span = document.createElement("span");
        span.textContent = book.name_book;
        title_price.appendChild(span);

        let cerrency = document.createElement("div");
        cerrency.className = 'cerrency';
        title_price.appendChild(cerrency);
        
        let p1 = document.createElement("p");
        p1.textContent = book.price_book;
        cerrency.appendChild(p1);
        let p2 = document.createElement("p");
        p2.textContent = book.pay_book;
        cerrency.appendChild(p2);
        
        
    
        let edit_delete = document.createElement("div");
        edit_delete.className = "edit_delete";
    
        let edit_img = document.createElement("img");
        edit_img.src = "../../img/edit.png";
        edit_img.addEventListener("click", editBook);

        let delete_img = document.createElement("img");
        delete_img.src = "../../img/delete.png";
        delete_img.addEventListener("click", removeBook);
    
        edit_delete.appendChild(edit_img);
        edit_delete.appendChild(delete_img);

        card_display_contain.appendChild(edit_delete);
        
    }
    get_all_book.appendChild(contain_listbook);
    
}




// ============click on addBook===============

function addBook(){
    clear()
   show(get_book_dilog);
    
}
function btn_cancel(){
    hide(get_book_dilog);
}


// ===================Create a new book =================

let input_check =[name_book,price_book,type_book,pay_book,file_upload];

function create_book(){
    hide(get_book_dilog);
    if(booktoEdit !== null){
        let bookedit = listBook[booktoEdit];
        bookedit.name_book = document.getElementById("name_book").value;
        bookedit.price_book = document.getElementById("price_book").value;
        bookedit.type_book = document.getElementById("type_book").value;
        bookedit.pay_book = document.getElementById("pay_book").value;
        bookedit.file_upload = document.getElementById("file_upload").value;

    }else{
        let newBook = {};
        newBook.name_book = document.getElementById("name_book").value;
        newBook.price_book = document.getElementById("price_book").value;
        newBook.type_book = document.getElementById("type_book").value;
        newBook.pay_book = document.getElementById("pay_book").value;
        newBook.file_upload = document.getElementById("file_upload").value;
        if (newBook.name_book !=="" && newBook.price_book >= 0 && newBook.type_book !== "" && newBook.pay_book !=="" &&  newBook.file_upload !==""){
            listBook.push(newBook);
            
        }else {    
            window.confirm("Input all please🙄");
           
            }
        
    }
    
    saveBook(); 
    display_Book();
    document.querySelector("#createEditButton").textContent = "Create Book";
 
}


// =====================edit book =====================
function editBook(event){
    index = event.target.parentElement.parentElement.dataset.index;
    
    let book = listBook[index];
    document.getElementById("name_book").value = book.name_book;
    document.getElementById("price_book").value = book.price_book;
    document.getElementById("pay_book").value = book.pay_book;
    document.getElementById("type_book").value = book.type_book;
    document.getElementById("file_upload").value = book.file_upload;
    
    
    saveBook();
    // delete before edit ===========
    listBook.splice(index, 1);
    
    // ========show dialog ========
    document.querySelector("#createEditButton").textContent = "Edit Book";
    show(get_book_dilog)

}

// ===============remove card============================
function removeBook(e){
    let index = e.target.parentElement.parentElement.dataset.index;
    console.log(index);
    listBook.splice(index, 1);
    saveBook();
    display_Book();
}

// ==========to clear data =================

function clear(){
    document.getElementById("name_book").value = "";
    document.getElementById("price_book").value = "";
    document.getElementById("type_book").value = "";
    document.getElementById("pay_book").value = "";
    document.getElementById("file_upload").value = "";
}

// //////////////////////////////////////////////////
function searchBook(ev){
    let searchLetter = ev.target.value;

    let firstUpperLetter = searchLetter.toUpperCase();
    let book_search = document.querySelectorAll("#card-container .card-display"); 
    console.log(book_search);

    for (let value of book_search){
        console.log(value)
        let showBook = value.firstChild.textContent.toUpperCase();
        console.log(showBook);
        // ===run in browser =====
        let toDisplay = '';
        console.log(showBook.indexOf(firstUpperLetter));

          // Update the style of the span (i visible or hidden)

        if (showBook.indexOf(firstUpperLetter) == -1) {
          toDisplay = 'none';
        }else{
          toDisplay = 'block';
        }
        value.style.display = toDisplay;
          console.log(value)
    } 
}

let searchInput = document
    .getElementById("search")
    .querySelector("input");
searchInput.addEventListener("keyup" , searchBook);



// ==================getvalue from click ===============


// ========MAIN=====================

loadBook();
display_Book();



