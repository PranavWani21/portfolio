console.log("script running")
// console.log(r);

function randomNumber() {
    let r=Math.floor(1+Math.random()*7)
    console.log(r);
    
    return r
}


async function msg1() {
    return new Promise((resolve,reject) => { 
        setTimeout((p) => {
            console.log('hecking');
            let html=`<div class="messages">
                        <div class="text" id="msg5"><b>Initializing Hacking</b></div>
                        <div id="workingAnimation"><span>.</span><span>.</span><span>.</span>
                        </div></div>`
            
            let div=document.querySelector(".container")
            console.log(div);
            
            div.insertAdjacentHTML("beforeend",html)
            resolve(1)
        }, 1000);
     })
}



async function msg2() {
    return new Promise((resolve,reject) => { 
        setTimeout((p) => {
            console.log('hecking');
            
            let html=`<div class="messages">
            <div class="text" id="msg5"><b>Reading your Files</b></div>
            <div id="workingAnimation"><span>.</span><span>.</span><span>.</span>
            </div></div>`
            let div=document.querySelector(".container")
            console.log(div);
            
            div.insertAdjacentHTML("beforeend",html)
            resolve(2)
        }, randomNumber()*1000);
     })
}


async function msg3() {
    return new Promise((resolve,reject) => { 
        setTimeout((p) => {
            console.log('hecking');
            
            let html=`<div class="messages">
            <div class="text" id="msg5"><b>Password files Detected</b></div>
            <div id="workingAnimation"><span>.</span><span>.</span><span>.</span>
            </div></div>`
            let div=document.querySelector(".container")
            console.log(div);
            
            div.insertAdjacentHTML("beforeend",html)
            resolve(3)
        }, randomNumber()*1000);
     })
}



async function msg4() {
    return new Promise((resolve,reject) => { 
        setTimeout((p) => {
            console.log('hecking');
            
            let html=`<div class="messages">
            <div class="text" id="msg5"><b>Sending all password and personal files to server</b></div>
            <div id="workingAnimation"><span>.</span><span>.</span><span>.</span>
            </div></div>`
            let div=document.querySelector(".container")
            console.log(div);
            
            div.insertAdjacentHTML("beforeend",html)
            resolve(4)
        }, randomNumber()*1000);
     })
}



async function msg5() {
    return new Promise((resolve,reject) => { 
        setTimeout((p) => {
            console.log('hecking');
            
            let html=`<div class="messages">
            <div class="text" id="msg5"><b>Cleaning up</b></div><div id="workingAnimation">
                <span>.</span><span>.</span><span>.</span>
                </div></div>`
            let div=document.querySelector(".container")
            console.log(div);
            
            div.insertAdjacentHTML("beforeend",html)
            resolve(5)
        }, randomNumber()*1000);
     })
}




async function main(){
    await msg1()
    await msg2()
    await msg3()
    await msg4()
    await msg5().then(() => { 
        
        setTimeout(() => { 

            // document.body.style.backgroundColor="red"
            document.body.style.backgroundColor="black"
         },5000)
     })
    
}

main()







