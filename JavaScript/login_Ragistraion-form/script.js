function login(){
    console.log("login button Clicked");

    const em=document.getElementById("LoginEmail").Value;
    const ps=document.getElementById("LoginEmail").Value;
    console.log("email:"+em);
    console.log("password:,"+ps);

    alert("login Done");

    document.getElementById("Loginemail").Value="";
    document.getElementById("Logipassword").Value="";
}
function registration(){
    console.log("Registration button Clicked");


    const un=document.getElementById("username").Value;
    const em=document.getElementById("LoginEmail").Value;
    const ps=document.getElementById("Loginpassword").Value;

    console.log("username:"+un);
    console.log("email:,"+em);
}

