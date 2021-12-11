import './sass/style.scss'
window.addEventListener("DOMContentLoaded", init);
const formTwo= document.querySelector("#form-j");



function init(){

 jobPost();
/*   validateForm(); */
 
  }

  function jobPost(data){
    const postData = JSON.stringify(data);
    fetch('https://gsapsjob-dc46.restdb.io/rest/job-form', {
      method: "post",
      headers:  { 'cache-control': 'no-cache',
      'x-apikey': '61b3c57372a03f5dae8222ab	',
      'content-type': 'application/json;  charset=utf-8' },
      body: postData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }


  function validateForm(){

    console.log(validateForm)
    if(!formTwo.elements.name.checkValidity()){
        document.querySelector("#error-2").classList.add("hidden");
        document.querySelector("#error-1").classList.remove("hidden");
       }
       else if(!formTwo.elements.email.checkValidity()){
        document.querySelector("#error-1").classList.add("hidden");
        document.querySelector("#error-2").classList.remove("hidden");
       }
       else{
        document.querySelector("#error-1").classList.add("hidden");
        document.querySelector("#error-2").classList.add("hidden");
      }
  }


  document.getElementById("jsubmit").addEventListener("click", (e) => {
    e.preventDefault();
    
    validateForm();
    jobData();
    
    
        })


        function jobData(){
           jobPost({
              name: formTwo.elements.name.value,
              email: formTwo.elements.email.value,
              age:  formTwo.elements.age.value,
             number: formTwo.elements.number.value,
             cpr: formTwo.elements.cpr.value,
            interest: formTwo.elements.interest.value, 
            });

            document.querySelector(".form-submit").classList.remove("hidden");
          
            document.querySelector("#form-j").classList.add("blur");
            document.querySelector(".close").addEventListener("click", ()=>{
              close();
              refreshPage();
            })
          }


          function close(){
            document.querySelector(".form-submit").classList.add("hidden");
            document.querySelector("#form-j").classList.remove("blur");
          }

          function refreshPage() {
            // window.location.href = window.location.href;
            location.reload();
          }


  formTwo.setAttribute("novalidate", true);
  