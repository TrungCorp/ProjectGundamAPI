document.addEventListener('DOMContentLoaded',function(){
    //REFERENCE TO GENERATE BUTTON
    const genButton = document.getElementById("genButton")
    //REFERENCE TO LEFT DIV
    const borderOne = document.getElementById("border1")
    //REFERENCE TO RIGHT DIV
    const bordertwo = document.getElementById("border2")

    //=====CLICK EVENT FOR GENERATE BUTTON=====//
    genButton.addEventListener('click',function(){
        console.log("GENERATE BUTTON PRESSED!")
        fetch('http://localhost:3000/gundams')
        .then(resp =>{
            if(resp.ok)
            {
                return resp.json()
            }
            throw new Error("error at point #1")
            
        })
        .then(result=>{
            const rando = Math.floor(Math.random()*5) 
            borderOne.innerHTML = ""
            bordertwo.innerHTML = ""
            const divItem = document.createElement('h1')
            const divItem1 = document.createElement('h1')
            divItem1.textContent = `FRAME: ${result[rando].frame}`
            divItem.textContent = `PILOT: ${result[rando].pilot}`
            const imgElem = document.createElement('img')
            const imgElem2 = document.createElement('img')
            imgElem2.setAttribute("src",result[rando]['pilot-image'])
            imgElem2.classList.add("gundamImage")
            bordertwo.appendChild(imgElem2)
            imgElem.setAttribute('src',result[rando].image)
            imgElem.classList.add('gundamImage')
            imgElem.addEventListener('mouseover',function(){
                console.log("mouse hovering!")
            })
            borderOne.appendChild(divItem1)
            borderOne.appendChild(divItem)
            borderOne.appendChild(imgElem)
        
            
        })


    })
    //=====END OF CLICK EVENT FOR GENERATE BUTTON====//
})