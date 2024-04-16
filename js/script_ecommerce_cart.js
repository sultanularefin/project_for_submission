
let all_cart_items;


const deleteButtonClick=(item)=> {
    console.log('Delete button clicked!');
    // You can perform delete operation or any other action here
}


const deleteButtonClick66=(item)=> {
    console.log("item: ",item);


}


// Function to handle the click event with parameters
function deleteButtonClick99(item) {
    console.log('Delete button clicked with parameters: ', item );
    // You can perform delete operation or any other action here with the parameters




    const new_cart_items_after_removing_current_item = all_cart_items.filter((one_product,index)=>(
        one_product.index !==item.index

    ));
    // all_cart_items_with_previous_data.push(item);

    // console.log("new_cart_items_after_removing_current_item: ",new_cart_items_after_removing_current_item);

    all_cart_items = new_cart_items_after_removing_current_item;

    localStorage.setItem('carts',JSON.stringify(new_cart_items_after_removing_current_item));


    window.location.href = "./cart_page.html";



}

// Function to create a closure that captures parameters
function createDeleteButtonClickHandler(param1) {
    return function() {
        deleteButtonClick99(param1);
    };
}

const check_cart_storage = ()=> {

    console.log("at <<check_cart_storage>>");

    if ((typeof window !== "undefined")
        &&
        (window.localStorage)
        && (localStorage.getItem('carts') !== null) &&
        (localStorage.getItem('carts') !== undefined)) {


        all_cart_items = JSON.parse(localStorage.getItem('carts'));

        if (all_cart_items.length > 0) {


            const ol_Div = document.getElementById('myList');


           /* function deleteButtonClick55(item) {
                console.log("item: ",item);

                return;
            }
*/


            // Loop through the items array and create list items
            all_cart_items.forEach(function(itemText,index) {
                // Create a new list item element
                const list_item_Master_row_div = document.createElement('div');


                // Set the text content of the list item
                list_item_Master_row_div.textContent = `${index}. ${itemText.name}`;




                const imageContainer = document.createElement('div');

                // URL of the image
                const imageUrl = itemText.url;

                // Alt text for the image
                const altText =  itemText.name;

                // Create the img element
                const imgElement = document.createElement('img');

                // Set the src and alt properties
                imgElement.src = imageUrl;
                imgElement.alt = altText;

                imgElement.style.width =  "50px";
                imgElement.style.height = "50px";

                // Append the img element to the image container
                imageContainer.appendChild(imgElement);

                list_item_Master_row_div.appendChild(imageContainer);




                // price, type begins here
                const price_type_column_Container = document.createElement('div');


                price_type_column_Container.classList.add('column_in_row_div');

                // Create the img element
                const price_Element = document.createElement('span');
                // const type_Element = document.createElement('span');

                // Set the src and alt properties
                price_Element.textContent =  `Price: ${itemText.price}`;
                price_type_column_Container.appendChild(price_Element);
                // price_type_column_Container.appendChild(type_Element);

                list_item_Master_row_div.appendChild(price_type_column_Container);
                // price type ends here



                // delete button begins here
                const delete_button_Container = document.createElement('div');





                // Function to handle the click event

                // Create the button element
                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-button');
                deleteButton.textContent = 'Delete'; // Text for the button

                // Add onclick event handler
                // deleteButton.onclick = deleteButtonClick66(itemText);
                deleteButton.onclick = createDeleteButtonClickHandler(itemText);


                // Create the SVG element
                const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svgElement.setAttribute("width", "24");
                svgElement.setAttribute("height", "24");
                svgElement.setAttribute("viewBox", "0 0 24 24");
                svgElement.setAttribute("fill", "none");
                svgElement.setAttribute("stroke", "currentColor");
                svgElement.setAttribute("stroke-width", "2");
                svgElement.setAttribute("stroke-linecap", "round");
                svgElement.setAttribute("stroke-linejoin", "round");

                // Create the path element inside the SVG
                const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                pathElement.setAttribute("d", "M3 3l18 18M3 21l18-18");

                // Append the path element to the SVG
                svgElement.appendChild(pathElement);

                // Append the SVG element to the button
                deleteButton.appendChild(svgElement);

                // Append the button to the container
                delete_button_Container.appendChild(deleteButton);






                list_item_Master_row_div.appendChild(delete_button_Container);
                // delete button ends here





                // Append the list item to the ul element
                ol_Div.appendChild(list_item_Master_row_div);
            });


          /*  all_cart_items.forEach((user) => {
                createListItem(listview, template, user.id, user.name, user.role);
            });*/


        } else {
            console.log("no item found in cart");
            const ol_Div = document.getElementById('myList');
            const list_item_Master_row_div = document.createElement('div');


            // Set the text content of the list item
            list_item_Master_row_div.textContent = `No Item Found in Cart.`;
            ol_Div.appendChild(list_item_Master_row_div);

        }
    }

}


// ---begin codepen -list


// Clickbait
check_cart_storage();


