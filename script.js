
 var passvalue=''
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
    }
    // =============funtion for update=============
    function updatedata(idnumber){      
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
    }
    // ====================function for editdata==========
    function editdata(id,contactname,email,message){
      document.getElementById("Nameid").value=contactname;
      document.getElementById("Emailid").value=email;
      document.getElementById("messageid").value=message;
      passvalue=id
      
    }
    // function to change button
    function changename(){
  document.getElementById("change").innerHTML="update";
    }
    // code to fetch data and show in a front end
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(json => {
        html=''
        json.forEach(e => {
            html+=
          `<tr>
              <td>${e.contactname}</td>
              <td>${e.email}</td>
              <td><button type="button" onclick="editdata('${e.id}','${e.contactname}','${e.email}','${e.message}')"> <i class="fa-solid fa-pen-to-square"></i></button><button type="button" onclick="deletedata('${e.id}')"> <i class="fa-solid fa-trash"></i></button></td>
          </tr>`
        });
        console.log(html)
  document.getElementById('data').innerHTML=html
    })

// let checkIdnumber= document.getElementById("data")[0].innerHTML
// console.log(checkIdnumber);
    // ===========function for delete==============
    function deletedata(id){   
      // if(id===document.getElementById("data"))
      // fetch('http://localhost:3000/delete', {      
      //   method: 'delete',       
      //   body: JSON.stringify({
      //     id:document.getElementById("id").value,       
      //     contactname: document.getElementById("Nameid").value,       
      //     email: document.getElementById("Emailid").value,       
      //     message: document.getElementById("messageid").value,
      //   }),
      //   headers: {       
      //   'Content-type': 'application/json; charset=UTF-8',       
      //   },       
      //  })       
      //   .then((response) => response.json())       
      //   .then((json) => console.log(json));
    }



 
