var form=document.getElementById('sheetdb-form');
form.addEventListener("submit",e=>{
    e.preventDefault();
    fetch(form.action,{
        method:"POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html)=>{
        // window.open("thank_you.html",'blank')
        alert("Your words means a lot to me | I will contact you soon | Thank You!!")

    });

});

