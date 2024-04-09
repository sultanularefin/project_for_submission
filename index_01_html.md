



<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Blogs</title>
    <link rel="shortcut icon" href="./images/logo.png" type="image/x-icon">

    <!-- css link  -->
    <link rel="stylesheet" href="style.css">

    <!-- daisyUI cdn  -->
<!--    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.7.2/dist/full.min.css" rel="stylesheet" type="text/css" />-->
<!--<script src="https://cdn.tailwindcss.com"></script>-->

    <!-- google font  -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">


</head>
<body class="font-mulish">

<!--
<header>
    <nav id="main-navbar" class="navbar navbar-default navbar-fixed-top">
        <div class="container navbar-container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Frrk.io</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Random</a></li>
                    <li><a href="#about">Happiness</a></li>
                    <li><a href="#portfolio">Hacking</a></li>
                    <li><a href="#contact">News</a></li>
                    <li><a href="#blog">Technology</a></li>
                    </li>
                </ul>
            </div>
            <div class="top-social">
                <ul id="top-social-menu">
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Investors</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>

<section class="full-width-img">

</section>-->


    <!--<main class="lg:w-4/5 mx-auto my-24">
       &lt;!&ndash; lets discuss section  &ndash;&gt;
       <section class="my-8">
        <div class="text-center space-y-6">
          <h1 class="text-4xl text-[#12132D] font-extrabold">Let’s Discuss</h1>
          <p class="text-lg text-[#12132D99] lg:w-3/5 mx-auto">Engage with our community and share your insights. Whether it's about programming, technology, or any other topic, we value your opinions. Join the conversation and connect with fellow enthusiasts!</p>
        </div>
        <div class="text-center my-6">
          <span class="loading loading-dots loading-lg hidden"></span>
        </div>

        &lt;!&ndash; section container  &ndash;&gt;
        <div id="sectionContainer" class="flex flex-col lg:flex-row gap-6">
           &lt;!&ndash; card container  &ndash;&gt;
           <div class="lg:w-2/3" id="card-container">
            </div>
            &lt;!&ndash; View card  &ndash;&gt;
            <div class="bg-[#12132D0D] rounded-xl lg:w-1/3 p-8">
              <div class="flex flex-row justify-between">
                <h1 class="text-[#12132D]
                          text-xl font-semibold">Title</h1>
                <div class="flex flex-row gap-1">
                  <img src="./images/tik.png" alt="">
                  <p>Mark as read(<span id="readCount">0</span>)</p>
                </div>
              </div>
              <div id="view-container" class="my-6">
              </div>
            
            
            </div>
            
           </div>
        </div>
       </section>

        &lt;!&ndash; bannerTwo section  &ndash;&gt;

        <section>
            <div class="hero rounded-[32px] p-4 lg:p-10 bg-[#12132D]">
                <div class="text-white hero-content flex-col lg:flex-row-reverse">
                  <img src="./images/joinforum.png" class="max-w-sm rounded-lg shadow-2xl" />
                  <div>
                    <h1 class="text-4xl font-extrabold ">Join Our Forum</h1>
                    <p class="lg:py-6 text-xl">Share your favorite opinion and win and wp forum coffee mug! Yes, you can run unit tests and view the results directly within the app. </p>
                    <button class="btn rounded-[50px] text-xl font-semibold btn-outline px-8 bg-[#797DFC] text-white ">Register Now</button>
                  </div>
                </div>
              </div>
        </section>

        &lt;!&ndash; Latest cards section  &ndash;&gt;
        <section class="my-12">
          <div class="text-center space-y-6">
            <h1 class="text-4xl text-[#12132D] font-extrabold">Latest Posts</h1>
            <p class="text-lg text-[#12132D99] lg:w-3/5 mx-auto">Engage with our community and share your insights. Whether it's about programming, technology, or any other topic, we value your opinions. Read the latest blogs.</p>
          </div>
          &lt;!&ndash; cards container  &ndash;&gt;
          <div id="latestContainer" class="rounded-3xl flex flex-col lg:flex-row gap-4">
            &lt;!&ndash; first card  &ndash;&gt;
            <div>
            </div>

          </div>
        </section>

    </main>
    <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded"> 
        <nav>
            <div class="space-y-4 lg:w-2/5">
                <h1 class="text-4xl font-extrabold">Random Blogs</h1>
                <p class="text-base text-[#12132DB2]">Explore the world of technology, programming, and innovation with Random Blogs. 
                  Stay informed, connected, and inspired.</p>
            </div>
          <div class="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav> 
        <div class="my-8 w-full">
            <hr class="border-t border-gray-300 w-full">
          </div>
        <aside>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
      </footer>-->

    <script src="./js/script.js"></script>
</body>
</html>
