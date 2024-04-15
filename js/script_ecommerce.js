const products = [
    {
        index: 0,
        name: 'Sony Playstation 5',
        url: 'images/playstation_5.png',
        type: 'games',
        price: 499.99,
    },
    {
        index: 1,
        name: 'Samsung Galaxy',
        url: 'images/samsung_galaxy.png',
        type: 'smartphones',
        price: 399.99,
    },
    {
        index: 2,
        name: 'Cannon EOS Camera',
        url: 'images/cannon_eos_camera.png',
        type: 'cameras',
        price: 749.99,
    },
    {
        index: 3,
        name: 'Sony A7 Camera',
        url: 'images/sony_a7_camera.png',
        type: 'cameras',
        price: 1999.99,
    },
    {
        index: 4,
        name: 'LG TV',
        url: 'images/lg_tv.png',
        type: 'televisions',
        price: 799.99,
    },
    {
        index: 5,
        name: 'Nintendo Switch',
        url: 'images/nintendo_switch.png',
        type: 'games',
        price: 299.99,
    },
    {
        index: 6,
        name: 'Xbox Series X',
        url: 'images/xbox_series_x.png',
        type: 'games',
        price: 499.99,
    },
    {
        index: 7,
        name: 'Samsung TV',
        url: 'images/samsung_tv.png',
        type: 'televisions',
        price: 1099.99,
    },
    {
        index: 8,
        name: 'Google Pixel',
        url: 'images/google_pixel.png',
        type: 'smartphones',
        price: 499.99,
    },
    {
        index: 9,
        name: 'Sony ZV1F Camera',
        url: 'images/sony_zv1f_camera.png',
        type: 'cameras',
        price: 799.99,
    },
    {
        index: 10,
        name: 'Toshiba TV',
        url: 'images/toshiba_tv.png',
        type: 'televisions',
        price: 499.99,
    },
    {
        index: 11,
        name: 'iPhone 14',
        url: 'images/iphone_14.png',
        type: 'smartphones',
        price: 999.99,
    },
];

// Get DOM elements
const productsWrapperEl = document.getElementById('products-wrapper');
const checkEls = document.querySelectorAll('.check');
const filtersContainer = document.getElementById('filters-container');
const searchInput = document.getElementById('search');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');

// Initialize cart item count
let cartItemCount = 0;

// Initialize products
const productsEls = [];

// Loop over the products and create the product elements
products.forEach((product) => {
    const productEl = createProductElement(product);
    productsEls.push(productEl);
    productsWrapperEl.appendChild(productEl);
});

// Add filter event listeners
filtersContainer.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);

// Create product element
function createProductElement(product) {



    const productEl = document.createElement('div');

    // productEl.className = 'item space-y-2';
    // productEl.className= "single_item_outer_div"
    /*border-width: 1px;
    border-width: 4px;*/
    // "marginTop":"0.5rem"
    productEl.className = 'item';
    // productEl.style= "marginTop:0.1rem;"
    productEl.innerHTML = `<div
    className="group"
   class="single_item"
>
  <img
    src="${product.url}"
    alt="${product.name}"
    class="image_style"
  />
  <span
    class="status"    
    // style={"position":"relative","right":"0","bottom":"0","left":"0","display":"none"}
    >Add To Cart</span
  >
</div>
<p class={"fontSize":"1.25rem","lineHeight":"1.75rem"}>${product.name}</p>
<strong>$${product.price.toLocaleString()}</strong>`;

    // productEl.querySelector('.status').addEventListener('click', addToCart_item_style_update);

    /*document.getElementById("myBtn").addEventListener("click", function() {
        myFunction(p1, p2);
    });*/

    productEl.querySelector('.status').addEventListener("click", function() {

        console.log("event.target: ",event.target);
        insert_item_to_cart(event.target,product);
    });

    return productEl;




}


function insert_item_to_cart(eventTarget,item) {

    console.log('item : ',item);
    // const statusEl = e.target;


    console.log('e : ',eventTarget);
    const statusEl = eventTarget;

    if (statusEl.classList.contains('added')) {
        // Remove from cart
        statusEl.classList.remove('added');
        statusEl.innerText = 'Add To Cart';


        // ---localStorage operation begins here


        if ((typeof window !== "undefined") && window.localStorage) {

            const all_cart_items = localStorage.getItem('carts');
            if (!all_cart_items) {



                console.log("shouldn't come to this condition, check for errors");

            } else {

                const all_cart_items_with_previous_data = JSON.parse(all_cart_items);


                const new_cart_items_after_removing_current_item = all_cart_items_with_previous_data.filter((one_product,index)=>(
                    one_product.index !==item.index

                ));
                // all_cart_items_with_previous_data.push(item);

                console.log("new_cart_items_after_removing_current_item: ",new_cart_items_after_removing_current_item);

                localStorage.setItem('carts',JSON.stringify(new_cart_items_after_removing_current_item));

                // localStorage.setItem('carts', JSON.stringify(driver_vault));

            }
        }


        // localStorage operation ends here


        cartItemCount--;
    } else {
        // Add to cart
        statusEl.classList.add('added');
        statusEl.innerText = 'Remove From Cart';


        // ---localStorage operation begins here


        if ((typeof window !== "undefined") && window.localStorage) {

            const all_cart_items = localStorage.getItem('carts');
            if (!all_cart_items) {



                localStorage.setItem('carts',JSON.stringify([item]));

                // return;
            } else {
                console.log("all_cart_items found",)
                const all_cart_items_with_previous_data = JSON.parse(all_cart_items);
                console.log("all_cart_items_with_previous_data", all_cart_items_with_previous_data);

                all_cart_items_with_previous_data.push(item);

                localStorage.setItem('carts',JSON.stringify(all_cart_items_with_previous_data));

            }
        }


        // localStorage operation ends here

        cartItemCount++;

        // Update cart item count
        cartCount.innerText = cartItemCount.toString();
    }






}


const cartButton_Pressed =()=>{

    console.log("at here <<cartButton_Pressed>>");
    window.location.href = "./cart_page.html";

// Simulate an HTTP redirect:
//         window.location.replace("./cart_page.html");

}

// Filter products by search or checkbox
function filterProducts() {
    // Get search term
    const searchTerm = searchInput.value.trim().toLowerCase();
    // Get checked categories
    const checkedCategories = Array.from(checkEls)
        .filter((check) => check.checked)
        .map((check) => check.id);

    // Loop over products and check for matches
    productsEls.forEach((productEl, index) => {
        const product = products[index];

        // Check to see if product matches the search or checked items
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
        const isInCheckedCategory =
            checkedCategories.length === 0 ||
            checkedCategories.includes(product.type);

        // Show or hide product based on matches
        if (matchesSearchTerm && isInCheckedCategory) {
            // productEl.classList.remove('hidden');

            productEl.classList.remove('isolated_item_style_hidden');

        } else {
            // productEl.classList.add('hidden');
            productEl.classList.add('isolated_item_style_hidden');
        }
    });
}
