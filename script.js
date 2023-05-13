//  var passvalue=''
//  var form =document.getElementById("formid")
//  window.onload=getdata() 
//  location.reload(getdata())
// form=document.getElementById("formid")
getdata()
  // ==============function for insertdata============================
  function insertdata(){
   this.validation();
   console.log("yes");
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
        getdata()
        
         document.getElementById("Nameid").value='';      
         document.getElementById("Emailid").value='';      
         document.getElementById("messageid").value='';
        //  form.reset();
        //  getdata()
        //  location.reload() /
        // window.onload=getdata()
        // get();
    }
    // =============funtion for update=============
    function updatedata(id){      
      fetch('http://localhost:3000/update', {      
        method: 'put',       
        body: JSON.stringify({
          id:id,      
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
        // window.onload=getdata() ;
        getdata()
        document.getElementById("Nameid").value='';      
        document.getElementById("Emailid").value='';      
        document.getElementById("messageid").value='';
        // form.reset(getdata())
        // location.reload() 
        // get();
    }
    // ====================function for editdata==========
    // function editdata(id,contactname,email,message){      
    //   document.getElementById("Nameid").value=contactname;
    //   document.getElementById("Emailid").value=email;
    //   document.getElementById("messageid").value=message;
    //   // passvalue=id 
      // document.getElementById("update").setAttribute("onclick","updatedata("+id +")");
      // document.getElementById("add").style.display="none";
      // document.getElementById("update").style.display="block";
    // }
    function editdata(id){
      console.log(id);
      fetch(`http://localhost:3000/edit/${id}`)       
        .then((response) => response.json())       
        .then((json) => {
        if(json.length>0){
          document.getElementById("Nameid").value=json[0].contactname;
          document.getElementById("Emailid").value=json[0].email;
          document.getElementById("messageid").value=json[0].message;
        }
        else{
          console.log("no data on edit function");
        }
        document.getElementById("update").setAttribute("onclick","updatedata("+id +")");
        document.getElementById("add").style.display="none";
        document.getElementById("update").style.display="block";
        // document.getElementById()
        });
     
    }
    // function to change button
  //   function changename(){
  // document.getElementById("change").innerHTML="update";
  //   }
    // ==========================code to fetch data and show in a front end================
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
              <td><button type="button" onclick="editdata('${e.id}')"> <i class="fa-solid fa-pen-to-square"></i></button><button type="button" onclick="deletedata('${e.id}','${e.is_active}')"> <i class="fa-solid fa-trash"></i></button></td>
          </tr>`
        });
        document.getElementById('data').innerHTML=html
        document.getElementById('add').style.display="block"
        document.getElementById("update").style.display="none";
        // console.log(html)
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
        getdata()
        // window.onload=getdata() ;
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
// ======================validations form=============
function validation (){
 contactname=document.getElementById("Nameid").value;
 email=document.getElementById("Emailid").value;
message=document.getElementById("messageid").value;
// if(contactname==""){
//   // document.getElementById("Nameid").style.boxShadow="5px 5px 15px red";
//   alert("fill alla data")
// }
// if(email==""){
//   // document.getElementById("Emailid").style.boxShadow="5px 5px 15px red"
//   alert("fill alla data")
// }
// if(message==""){
//   // document.getElementById("messageid").style.boxShadow="5px 5px 15px red"
//   alert("fill alla data")
// }
// if(contactname==""&&email==""&&message==""){
//   alert("please add all data")
// }
//  if(contactname==""){
//    return true
//  }
//  if(email==""){
//    return true
//  }
//  if(message){
//   return true
//  }
//  else{
//    return false
//  }
}


 
