document.addEventListener('DOMContentLoaded',function(){
    
    const genButton = document.getElementById("genButton")
    const borderOne = document.getElementById("border1")

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
            const rando = Math.floor(Math.random()*4) 
            console.log(rando)
            console.log(result[rando].frame)
            console.log(result[rando].pilot)
            console.log("")

            const divItem = document.createElement('h1')
            const divItem1 = document.createElement('h1')
            divItem1.textContent = result[rando].frame
            divItem.textContent = result[rando].pilot
            const imgElem = document.createElement('img')
            imgElem.setAttribute('src',result[rando].image)
            imgElem.classList.add('gundamImage')
            borderOne.appendChild(divItem1)
            borderOne.appendChild(divItem)
            borderOne.appendChild(imgElem)
        
            
        })


    })
    //=====END OF CLICK EVENT FOR GENERATE BUTTON====//
})