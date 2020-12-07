class Footer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML =`
        <div class="flex bg-gray-900 p-8 mt-32">
  <div class="w-1/3  p-4">
    <img src="/assets/logo.png" alt="" class="w-32 inline-block">
    <h1 class="text-3xl text-white font-bold inline-block ">Online-Doctor</h1>
    <p class="text-white px-4 pb-4">Lorem ipsum dolor amet consectetur adipisicing elitiuim sete eiusmod tempor incididunt ut labore etnalom dolore magn aiqua udiminimate veniam quis </p>
    <p class="text-white px-4 pb-2 mt-4"><i class="icon-footer fas fa-phone-alt mr-2"></i>+252907751122</p>  <p class="text-white px-4 pb-2"><i class="icon-footer fas fa-envelope mr-2"></i>mohamedabdirahman204@gmail.com</p> <p class="text-white px-4 pb-2"><i class="icon-footer fas fa-map-marker-alt mr-2"></i>Garowe, Somalia</p>
  </div>

  <div class="w-1/3  mx-8 p-4">
    <h1 class="text-3xl text-white font-bold mt-8 mb-10  ">Latest Blogs</h1>
    <p class="text-white px-2 pb-4 font-medium">Lorem ipsum dolor amet consectetur adipisicing elitiuim sete eiusmod tempor incididunt </p>
    <p class="text-white px-2 pb-4 font-medium">Lorem ipsum dolor amet consectetur adipisicing elitiuim sete eiusmod tempor incididunt </p>
    <p class="text-white px-2 pb-4 font-medium">Lorem ipsum dolor amet consectetur adipisicing elitiuim sete eiusmod tempor incididunt </p>
     </div>

     <div class="w-1/3  mx-4 p-4">
      <h1 class="text-3xl text-white font-bold mt-8 mb-10  ">Latest Blogs</h1>
      <ul class="text-white text-xl ">
        <li class="py-2"><a href="#" class="">Home</a></li>
        <li class="py-2"><a href="#">Doctors</a></li>
        <li class="py-2"><a href="#">Hospitals</a></li>
        <li class="py-2"><a href="#">Blogs</a></li>
        <li class="py-2"><a href="#">Contact</a></li>
      </ul>
      <input type="text" class="p-4 w-72 rounded-md mt-4" placeholder="your email"> <i class="fas fa-arrow-right fa-1x bg-yellow-300 p-4 ml-2"></i>
       </div>
</div>
        
        `        
        
    };
};


customElements.define('footer-component', Footer)