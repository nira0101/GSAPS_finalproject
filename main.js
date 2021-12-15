import './sass/style.scss'


window.addEventListener("DOMContentLoaded", init);


const formOne = document.querySelector("#form-c");
;


function init(){
  post();

/*   validateForm(); */
 
  }
  
  function post(data){
    const postData = JSON.stringify(data);
    fetch('https://gspscontact-a453.restdb.io/rest/contact-form', {
      method: "post",
      headers:  { 'cache-control': 'no-cache',
      'x-apikey': '61b0b1da72a03f5dae8221e9',
      'content-type': 'application/json;  charset=utf-8' },
      body: postData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  


  //validate form//
  function validateForm(){
    console.log(validateForm)
    
    if(!formOne.elements.name.checkValidity()){
      document.querySelector("#error-2").classList.add("hidden");
      document.querySelector("#error-1").classList.remove("hidden");
     }
     else if(!formOne.elements.email.checkValidity()){
      document.querySelector("#error-1").classList.add("hidden");
      document.querySelector("#error-2").classList.remove("hidden");
     }
     else{
      document.querySelector("#error-1").classList.add("hidden");
      document.querySelector("#error-2").classList.add("hidden");
     
    }
  }

  

    document.getElementById("c-submit").addEventListener("click", (e) => {
e.preventDefault();

validateForm();
contactDataPost();



    })



    function contactDataPost(){
      post({
        name: formOne.elements.name.value,
        email: formOne.elements.email.value,
       number: formOne.elements.number.value,
       desc:formOne.elements.desc.value
      });
      document.querySelector(".form-submit-c").classList.remove("hidden");
      document.querySelector("#form-c").classList.add("blur");
            document.querySelector(".close").addEventListener("click", ()=>{
              close();
              refreshPage();
            })
     
    }

    
    function close(){
      document.querySelector(".form-submit-c").classList.add("hidden");
      document.querySelector("#form-c").classList.remove("blur");
    }

    function refreshPage() {
      // window.location.href = window.location.href;
      location.reload();
    }


    


    
  
  
  
  
  
    

//mobile nav//


  

 
 

  formOne.setAttribute("novalidate", true);
 
  

