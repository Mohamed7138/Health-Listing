class Search extends HTMLElement{
    constructor(){
        super();
    }
        connectedCallback(){
            this.innerHTML = `
            <form action="" class="bg-gray-900 py-8  flex justify-evenly">
            <div>
                <input type="text" placeholder="Hospital Name" class="  rounded-md py-4 px-8 focus:outline-none focus:bg-gray-50 focus:border-gray-500 mr-4">
                <select name="categories" id="" class=" rounded-md py-4 px-8 mr-4">
                    <option value="" selected>Select Category</option>
                    <option>Dentist</option>
                    <option>Gyn & OPS</option>
                    <option>Gen. Sergion</option>
                </select>
                <input type="text" placeholder="Location/Region" class=" rounded-md py-4 px-8 mr-4 focus:outline-none focus:bg-gray-50 focus:border-gray-500 ">

                <input type="text" placeholder="Location City" class=" rounded-md py-4 px-8 focus:outline-none focus:bg-gray-50 focus:border-gray-500 mr-4 ">

                <button class="py-4 px-8 bg-yellow-500 text-white rounded"><i class="fas fa-search pr-4"></i>Search</button>
            </div>
        </form>
            
            `
        }
          
    }


customElements.define('search-component', Search)