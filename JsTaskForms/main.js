let btn = document.getElementById("saveData");
const first_name = document.getElementById("first_name");
const email = document.getElementById("email");
const gender = document.getElementById("gender");
let isCheckTerm = document.getElementById("checkTerm").checked;
const listUser = document.getElementById("list__user");


let user = [];
addStudent = (e) => {
    e.preventDefault();
  

    if (first_name.value.trim().toString() == '') {
        document.getElementById("myToast").classList.remove("hidden");
        setTimeout(function () {
            document.getElementById("myToast").classList.add("hidden");
        }, 2000);
    }
    if (email.value.trim().toString() == '') {
        document.getElementById("myToast").classList.remove("hidden");
        setTimeout(function () {
            document.getElementById("myToast").classList.add("hidden");
        }, 2000);
    }
    if (email.value.trim().toString() == '') {
        document.getElementById("myToast").classList.remove("hidden");
        setTimeout(function () {
            document.getElementById("myToast").classList.add("hidden");
        }, 2000);
    }
    if(!isCheckTerm ){
          alert('Sertleri qebul edin')
    }
    
    else {
        let data = {
            name: first_name.value,
            email: email.value,
            gender: gender.value
        }
        user.push(data);
        console.log(user);
        // listUser.innerHTML=JSON.stringify(user);


        var mytable = [];
        for (var obj of user) { mytable += "<tbody><tr> <td>" + obj.name + "</td><td>" + obj.email + "</td><td>" + obj.gender + "</td> </tr></tbody>"; 
        mytable += "</tr></table>";
        listUser.innerHTML = mytable;
       
        clearValues();
    }


    }




}

clearValues = () => {
    first_name.value = "";
    email.value = "";
    gender.value = "";
}

function handleChange(e) {
    const { checked } = e.target;
    if(checked) {document.getElementById("terms").classList.remove("hidden"); isCheckTerm=true;}
     else {
        document.getElementById("terms").classList.add("hidden");
        isCheckTerm=false;
     }
      

}

btn.addEventListener("click", addStudent);