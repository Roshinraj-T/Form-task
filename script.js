 var passvalue=''
 window.onload=getdata() 
//  location.reload(getdata())
  // ==============function for insertdata============================
  function insertdata(){
      fetch('http://localhost:3000/insert', {      
        method: 'POST',       
        body: JSON.stringify({       
        contactname: document.getElementById("Nameid").value,       
        email: document.getElementById("Emailid").value,       
          message: document.getElementById("messageid").value,
        }),
        headers: {       
        'Content-type': 'application/json; charset=UTF-8',       
        },       
       })    
        .then((response) => response.json())       
        .then((json) => console.log(json));
         document.getElementById("Nameid").value='';      
         document.getElementById("Emailid").value='';      
         document.getElementById("messageid").value='';
        //  location.reload() 
        window.onload=getdata()
        // get();
    }
    // =============funtion for update=============
    function updatedata(){      
      fetch('http://localhost:3000/update', {      
        method: 'put',       
        body: JSON.stringify({
          id:passvalue,      
          contactname: document.getElementById("Nameid").value,       
          email: document.getElementById("Emailid").value,       
          message: document.getElementById("messageid").value,
        }),
        headers: {       
        'Content-type': 'application/json; charset=UTF-8',       
        },       
       })       
        .then((response) => response.json())       
        .then((json) => console.log(json));
        document.getElementById("Nameid").value='';      
        document.getElementById("Emailid").value='';      
        document.getElementById("messageid").value='';
        window.onload=getdata() 
        // location.reload() 
        // get();
    }
    // ====================function for editdata==========
    function editdata(id,contactname,email,message){
      document.getElementById("Nameid").value=contactname;
      document.getElementById("Emailid").value=email;
      document.getElementById("messageid").value=message;
      passvalue=id   
      document.getElementById("add").style.display="none";
      document.getElementById("update").style.display="block";
    }
    // function to change button
  //   function changename(){
  // document.getElementById("change").innerHTML="update";
  //   }
    // code to fetch data and show in a front end
   function getdata(){
   fetch('http://localhost:3000/get')
    .then(response => response.json())
    .then(json => {
        html=''
        json.forEach(e => {
            html+=
          `<tr>
              <td>${e.contactname}</td>
              <td>${e.email}</td>
              <td><button type="button" onclick="editdata('${e.id}','${e.contactname}','${e.email}','${e.message}')"> <i class="fa-solid fa-pen-to-square"></i></button><button type="button" onclick="deletedata('${e.id}','${e.is_active}')"> <i class="fa-solid fa-trash"></i></button></td>
          </tr>`
        });
        document.getElementById('data').innerHTML=html
        document.getElementById('add').style.display="block"
        document.getElementById("update").style.display="none";
        console.log(html)
    })
   
  }
//  calldata();
// let checkIdnumber= document.getElementById("data")[0].innerHTML
// console.log(checkIdnumber);
    // ===========function for delete==============
    function deletedata(id,is_active,calldata){ 
      fetch('http://localhost:3000/delete', {      
        method: 'put',       
        body: JSON.stringify({
          id:id,
          is_active:"0"
        }),
        headers: {       
        'Content-type': 'application/json; charset=UTF-8',       
        },       
       })       
        .then((response) => response.json())       
        .then((json) => console.log(json));
        window.onload=getdata() ;
                //  getdata();
        // calldata();
      //  this.calldata()
        // this.calldata();
        // get();
        // location.reload()   
             // getdata()
        // fetch('http://localhost:3000/get')
      //   .then(response => response.json())
      //   .then(json => {
      //       html=''
      //       json.forEach(e => {
      //           html+=
      //         `<tr>
      //             <td>${e.contactname}</td>
      //             <td>${e.email}</td>
      //             <td><button type="button" onclick="editdata('${e.id}','${e.contactname}','${e.email}','${e.message}')"> <i class="fa-solid fa-pen-to-square"></i></button><button type="button" onclick="deletedata('${e.id}','${e.is_active}')"> <i class="fa-solid fa-trash"></i></button></td>
      //         </tr>`
      //       });
      //       console.log(html)
      // document.getElementById('data').innerHTML=html
      //   })
      // is_active=0;
      // console.log(is_active);
      // fetch('http://localhost:3000/update', {      
      //   method: 'put',       
      //   body: JSON.stringify({
      //     id:id,
      //     is_active:0
      //   }),
      //   headers: {       
      //   'Content-type': 'application/json; charset=UTF-8',       
      //   },       
      //  })       
      //   .then((response) => response.json())       
      //   .then((json) => console.log(json));

      // console.log(is_active);
    // document.querySelectorAll("#table tbody tr")[id].style.display="none";
    //  let deletedata= document.getElementsByTagName('tbody')[0];
      // console.log(deletedata);
      // if(id===document.getElementById("data"))

      // fetch('http://localhost:3000/delete', {      
      //   method: 'delete',       
      //   body: JSON.stringify({
      //     id:id             
      //   }),
      //   headers: {       
      //   'Content-type': 'application/json; charset=UTF-8',       
      //   },       
      //  })       
      //   .then((response) => response.json())       
      //   .then((json) => console.log(json));

    }



 
