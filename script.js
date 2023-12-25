document.addEventListener('DOMContentLoaded',function(){
    //REFERENCE TO GENERATE BUTTON
    const genButton = document.getElementById("genButton")
    //REFERENCE TO LEFT DIV
    const borderOne = document.getElementById("border1")
    //REFERENCE TO RIGHT DIV
    const bordertwo = document.getElementById("border2")
    //REFERENCE TO SUBMIT BUTTON
    const submitButton = document.getElementById("submitButton")
    //REFERENCE TO MESSGE IN MIDDLE OF PAGE
    const consoleOne = document.getElementById("console1")
    const genCounterButton = document.getElementById("genCounterButton")
    const genCounter = 0
    genCounterButton.innerHTML = genCounter
    genCounterButton
    function clearDivs(){
        borderOne.innerHTML = ""
        bordertwo.innerHTML = ""
    }
    function constructEq(){
        const rand1 = Math.floor(Math.random()*9)
        const rand2 = Math.floor(Math.random()*9)
        

    }
   
    //=====CLICK EVENT FOR GENERATE BUTTON=====//
    genButton.addEventListener('click',function(){
        console.log("GENERATE BUTTON PRESSED!")
        if(genCounter<=0)
        {
            return
        }
        fetch('http://localhost:3000/gundams')
        .then(resp =>{
            if(resp.ok)
            {
                return resp.json()
            }
            throw new Error("error at point #1")
            
        })
        .then(result=>{
            
            clearDivs();
            const rando = Math.floor(Math.random() * 5)
            const divItem = document.createElement('h3')
            const divItem1 = document.createElement('h3')
            const divItem2 = document.createElement('h3')
            const divItem3 = document.createElement('h3')
            
            
            divItem.textContent = `FRAME: ${result[rando].frame}`
            divItem1.textContent = `PILOT: ${result[rando].pilot}`
            divItem2.textContent = `MANUFACTURER: ${result[rando].manufacturer}`
            divItem3.textContent = `ANIME SERIES: ${result[rando]['anime-series']}`



            
            const imgElem = document.createElement('img')
            const imgElem2 = document.createElement('img')
            imgElem2.setAttribute("src", result[rando]['pilot-image'])

            imgElem2.classList.add("gundamImage2")
            imgElem2.style.visibility = "hidden"
            bordertwo.appendChild(imgElem2)
            imgElem.setAttribute('src', result[rando].image)
            imgElem.classList.add('gundamImage')
            //MOUSEOVER EVENT
            imgElem.addEventListener('mouseover',function(){
                console.log("mouse hovering!")
                imgElem2.style.visibility = "visible"
                imgElem.addEventListener('mouseleave',function(){
                    imgElem2.style.visibility = "hidden"
                })
            })
            borderOne.appendChild(divItem1)
            borderOne.appendChild(divItem)
            borderOne.appendChild(divItem2)
            borderOne.appendChild(divItem3)
            borderOne.appendChild(imgElem)
        
            
        })


    })
    //=====END OF CLICK EVENT FOR GENERATE BUTTON====//

    //SUBMIT EVENT
    submitButton.addEventListener('submit',function(event){
        event.preventDefault()
        console.log('SUBMIT BUTTON PRESSED!')
    })
})