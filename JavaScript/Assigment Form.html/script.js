// function sumbit(){

    // const batch= document.querySelectorAll("input[name='batch']: checked");
    // console.log(batch);

//     const fn=document.getElementById("fullname").value;
//     const sr=document.getElementById("score").value;
//     const sc=document.getElementById("course").value;
//     const em=document.getElementById("email").value;
//     const dob=document.getElementById("dob").value;
//     const mob=document.getElementById("mob").value;

//     let pb=[];


//     let selectedBatchTiming =[];

//     document
//     .querySelectorAll("input[name='batch']: checked")
//     batch.forEach((element)=>{
//       selectedBatchTiming.push(element.value)
//     });

    
//     console.log(selectedBatchTiming);

//     const selectedBatch =document.querySelector(
//         "input[name='batch']: checked")
//         .value;

//     console.log(selectedBatch);
    
//     function clearForm(){
//         window.location.reload();
//     }



// }

function submit() {
  // Personal Information
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let dob = document.getElementById("dob").value;

  // Academic Details
  let qualification = document.getElementById("qualification").value;
  let score = document.getElementById("score").value;

  // Course Information
  let course = document.getElementById("course").value;

  // Batch selection (multiple checkbox)
  let batches = [];
  document.querySelectorAll("input[name='batch']:checked").forEach((item) => {
    batches.push(item.value);
  });

  // Validation (example)
  if (fullName === "" || email === "" || mobile === "" || dob === "") {
    alert("Please fill all required personal information!");
    return;
  }

  // Final Output
  console.log("Full Name:", fullName);
  console.log("Email:", email);
  console.log("Mobile:", mobile);
  console.log("DOB:", dob);

  console.log("Qualification:", qualification);
  console.log("Score:", score);

  console.log("Selected Course:", course);
  console.log("Preferred Batch:", batches);

  alert("Form Submitted Successfully!");
}
