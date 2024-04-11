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

            /*<a href="#about">Log out</a>*/


            const account_BTN= document.getElementById("account_button");

            // to clear the previous search
            account_BTN.textContent="Log out";

            account_BTN.style.display = "inline";




            /*  account_button
              logout_button*/



        }


    }else{
        console.log("user not found!");
        // const cardContainer= document.getElementById("account_status");
        const delete_BTN= document.getElementById("logout_button");


        // to clear the previous search
        delete_BTN.textContent="Log out";
        delete_BTN.style.display = "inline";

    }
}

// load the default posts before search 
const loadAllPosts = async () => {
    const url = "https://openapi.programming-hero.com/api/retro-forum/posts";
    const res = await fetch(url);
    const data = await res.json();

    const postArr = data.posts;
    // displayPosts(postArr);
    loadLatestPosts();

    check_local_storage();
}
loadAllPosts();






let count = 0;

// displaying the posts 
const  displayPosts = (posts) =>{


    // 1: get the container Element
    const cardContainer= document.getElementById("card-container");

    // to clear the previous search
    cardContainer.textContent='';

    posts.forEach(post =>{
        // console.log(post);

        // 2: create a div
        const postCard=document.createElement('div');
        postCard.classList = `bg-[#F3F3F5] p-6 lg:p-10 rounded-3xl my-8`;

        // 3:set innerHTML
        postCard.innerHTML = `
        <div class="flex gap-4 flex-col lg:flex-row w-full">
                <div class="lg:w-20 w-16 rounded-[30px] relative">
                  <div class="circle rounded-full bg-green-500 h-4 w-4 absolute -top-2 -right-2"></div>
                  <img src="${post.image}" alt="">
                </div>
                <div class="w-full">
                  <div class="flex flex-row gap-5 text-[#12132DCC] text-base">
                    <p><span>#</span>${post.category}</p>
                    <p>Author: ${post.author.name}</p>
                  </div>
                  <h2 class="text-[#12132D] text-xl font-bold">${post.title}</h2>
                  <p class="text-[#12132D99] text-lg">${post.description}</p>
                  <div class="divider"></div>
                  <div class="flex flex-row justify-center items-center">
                    <div class="flex flex-row w-full gap-4 text-[#12132D99] text-lg">
                      <div class="flex flex-row justify-center items-center gap-3">
                        <img src="./images/comment.png" alt="">
                        <p>${post.comment_count}</p>
                      </div>
                      <div class="flex flex-row justify-center items-center gap-3">
                        <img src="./images/eye.png" alt="">
                        <p>${post.view_count}</p>
                      </div>
                      
                      <div class="flex flex-row justify-center items-center gap-3">
                        <img src="./images/clock.png" alt="">
                        <p>${post.posted_time}</p>
                      </div>

                    </div>
                    <div>
                    
                      <button class="btn" onclick="markRead(\`${post.title}\` , ${post.view_count})">
                      <img src="./images/email.png" alt=""></button>
                      
                    </div>
                    
                  </div>

                </div>
              </div>`;

        // change the color of status on the basis of active
        const activeStat=post.isActive;
        console.log(activeStat);
        const activeBtn = postCard.querySelector('.circle');
        if (!activeStat) {
            activeBtn.classList.replace('bg-green-500', 'bg-red-600');
        }


        // 4: appendChild
        cardContainer.appendChild(postCard);



        const button = document.createElement('button');

        button.onclick = () => markRead(post.title, post.view_count);
        button.title = `${post.title}`;
        button.classList = "btn";
        button.innerHTML = `<img src="./images/email.png" alt="">`;
        cardContainer.appendChild(postCard);


    });
}

const markRead = (title, views) => {

    // update the count everytime the button is clicked
    count=count+1;
    const readCount = document.getElementById('readCount');
    readCount.innerText = count;

// the title and view is appended everytime the button is clicked
    const viewContainer = document.getElementById("view-container");
    const viewCard = document.createElement('div');
    viewCard.classList = `bg-white rounded-xl p-2 lg:p-4 my-4 flex flex-row justify-between`;

    viewCard.innerHTML = `
      <p class="text-lg font-bold">${title}</p>
      <div class="flex flex-row justify-center items-center">
          <img src="./images/eye.png" alt="">
          <p class="text-lg font-bold">${views}</p>
      </div>`;

    viewContainer.appendChild(viewCard);
}

// handel search 

const handleSearch = () =>{
    const searchField=document.getElementById('searchField');
    const searchText=searchField.value;
    loadPosts(searchText);

    // show loading dots
    const loadingDots = document.querySelector('.loading-dots');
    loadingDots.style.display = 'inline-block';

    // hide the cards container
    const cardContainer = document.getElementById('card-container');
    cardContainer.style.display = 'none';


    // simulate loading for 2 seconds
    setTimeout(async () => {

        await loadPosts(searchText);

        // Hide loading dots
        loadingDots.style.display = 'none';

        // Show the cards container
        cardContainer.style.display = 'block';

    }, 2000);
}

// latest section load data 
const loadLatestPosts = async () => {
    const url = "https://openapi.programming-hero.com/api/retro-forum/latest-posts";
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    data.forEach(singleData =>{
        const latestCard=document.createElement('div');

        latestCard.innerHTML = `
    <div class="card w-full bg-white border-[#12132D26] shadow-xl">
    <figure class="px-10 pt-10">
      <img src="${singleData.cover_image}" class="rounded-xl" />
    </figure>
    <div class="card-body">
      <div class="flex flex-row gap-2">
        <img src="./images/calender.png" class="rounded-full" alt="">
        <p class="text-[#12132D99] text-base">${singleData?.author?.posted_date || 'No Published Date'}</p>
      </div>
      <h2 class="text-[#12132D] text-xl font-extrabold">${singleData.title}</h2>
      <p class="text-[#12132D99] text-base">${singleData.description}</p>
      <div class="flex flex-row gap-6">
        <div class="rounded-full w-11">
          <img src="${singleData.profile_image}" alt="">
        </div>
        <div>
          <h3 class="text-base text-[#12132D] font-bold">${singleData.author.name}</h3>
          <p class="text-[#12132D99] text-base">${singleData?.author?.designation || 'Unknown'}</p>
        </div>
        <div class="divider"></div>
        
        
      </div>
    </div>
  </div>
    
    `;
        /*  const latestContainer= document.getElementById('latestContainer');
          latestContainer.appendChild(latestCard);*/

    });

}
