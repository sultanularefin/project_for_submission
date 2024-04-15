// load posts by search

/*window.document.getElementById("header");
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 150) {
        $("#main-navbar").addClass("navbar-scroll")
    }
    else {
        $("#main-navbar").removeClass("navbar-scroll")
    }
});*/


const loadPosts = async(searchText) =>{
    const url=`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);   //all post objects

    const postArr= data.posts;
    // console.log(postArr);    //all posts array
    displayPosts(postArr);

}

const logout_button_pressed = ()=>{

    console.log("at <<logout_button_pressed>>");
    if((typeof window !== "undefined")
        &&
        (window.localStorage)){
        localStorage.removeItem('user');

        window.location.href = "./index.html";

// Simulate an HTTP redirect:
//         window.location.replace("./index.html");

    }

    else{

        console.log("at else of logout_button_pressed");
    }
}


const populate_profile_button = ()=>{

    console.log("at <<populate_profile_button>>");
    if((typeof window !== "undefined")
        &&
        (window.localStorage) ){

        const user_data= localStorage.getItem('user');
        if(!user_data){
            return;
        }
        else{
            console.log("user data found",)
            const customer_storage_data =JSON.parse(user_data);
            console.log("user data",customer_storage_data);


            // 999



            const customer_name_BTN= document.getElementById("customer_name");
            const customer_email_BTN= document.getElementById("customer_email");
            const customer_password_BTN= document.getElementById("customer_password");
            const customer_gender_BTN= document.getElementById("customer_gender");


            const female_BTN= document.getElementById("female");
            const male_BTN= document.getElementById("male");







            console.log("customer_name_BTN: ",customer_name_BTN);

            if(customer_name_BTN && customer_gender_BTN && customer_email_BTN && customer_password_BTN && female_BTN && male_BTN){
                customer_name_BTN.textContent= `Name: ${customer_storage_data.name}`;
                customer_gender_BTN.textContent= `Gender: ${customer_storage_data.gender}`;
                customer_email_BTN.textContent= `Email: ${customer_storage_data.email}`;
                customer_password_BTN.textContent= `Password: ${customer_storage_data.password}`;




                if(customer_storage_data.gender==="female"){

                    female_BTN.style.visibility="visible";

                    female_BTN.style.display = "inline";

                    female_BTN.hidden=false;
                }else if(customer_storage_data.gender==="male"){

                    male_BTN.style.visibility="visible";
                    male_BTN.style.display = "inline";
                    male_BTN.hidden=false;
                }



                customer_name_BTN.hidden=false;
                customer_email_BTN.hidden=false;
                customer_password_BTN.hidden=false;
                customer_gender_BTN.hidden=false;
            }


        }
    }

    else{

        console.log("at else of populate_profile_button");
    }
}
const check_local_storage = ()=>{


    if((typeof window !== "undefined")
        &&
        (window.localStorage)
        && (localStorage.getItem('user')!==null) &&
        (localStorage.getItem('user')!== undefined)) {
        const user_data = JSON.parse(localStorage.getItem('user'));

        console.log("user_data: ",user_data);

        if(user_data.email.trim()!==""){



            const account_BTN= document.getElementById("account_button");




            account_BTN.style.display = "inline";

            console.log("account_BTN inline");



            const logout_BTN= document.getElementById("logout_button");

            console.log("logout_BTN inline");
            // to clear the previous search
            // delete_BTN.textContent="Log out";
            logout_BTN.style.display = "inline";




            /*  account_button
              logout_button*/



        }


    }else{
        console.log("user not found!");
        // const cardContainer= document.getElementById("account_status");

        const login_BTN= document.getElementById("login_button");


        console.log("login_BTN inline");
        // to clear the previous search
        // delete_BTN.textContent="Log out";
        login_BTN.style.display = "inline";

    }
}

// load the default posts before search 
const main = async () => {


    check_local_storage();

    populate_profile_button();

    
}
main();






let count = 0;
