document.addEventListener('DOMContentLoaded',function(){
    //REFERENCE TO GENERATE BUTTON
    const genButton = document.getElementById("genButton")
    //REFERENCE TO LEFT DIV
    const borderOne = document.getElementById("border1")
    //REFERENCE TO RIGHT DIV
    const bordertwo = document.getElementById("border2")
    const b2Item1 = document.createElement('h3')
    const b2Item2 = document.createElement('h3')
    const b2Item3 = document.createElement('h3')
    const b2Item4 = document.createElement('h3')
    //bordertwo.appendChild(b2Img)
    bordertwo.appendChild(b2Item1)
    bordertwo.appendChild(b2Item2)
    bordertwo.appendChild(b2Item3)
    bordertwo.appendChild(b2Item4)

    const b2Img = document.createElement('img')

    //REFERENCE TO MESSGE IN MIDDLE OF PAGE
    const consoleOne = document.getElementById("console1")
    //REFERENCE TO FORM ELEMENT
    const gundamForm = document.getElementById("gundamForm")
    //REFERENCE TO GENERATE BUTTON
    const genCounterElem = document.getElementById("genCounter")
    let genCounter = 0
    let randAns 
    //GIVES GENERATOR COUNTER
    genCounterElem.innerHTML = genCounter
    
    function clearDivs(){
        borderOne.innerHTML = ""
        bordertwo.innerHTML = ""
    }

    function setDivs(data){
        
        data.forEach(function(elem){
            const gundamCard = document.createElement('div')
            borderOne.appendChild(gundamCard)
            
            const divItem1 = document.createElement('img')
            divItem1.id = data.indexOf(elem)
            
            console.log(data.indexOf(elem))
            divItem1.src = elem.image
            divItem1.style.visibility = "hidden"
            divItem1.addEventListener('mouseover',function(){

                b2Item1.textContent = `FRAME: ${elem.frame}`
                b2Item2.textContent =  `PILOT: ${elem.pilot}`
                b2Item3.textContent =  `MANUFACTURER: ${elem.manufacturer}`
                b2Item4.textContent = `ANIME-SERIES: ${elem['anime-series']}`


            })

            divItem1.classList.add('gundamImage')
            
            gundamCard.classList.add('gundamCard')
            
            gundamCard.appendChild(divItem1)
            

            
            

            
        })
    }


    //GENERATES RANDOM QUESTION ONTO PROMPT
    function constructEq(){
        const rand1 = Math.floor(Math.random()*9)
        const rand2 = Math.floor(Math.random()*9)
        let ans = rand1 * rand2
        consoleOne.innerHTML = `${rand1} * ${rand2} = __?`
        randAns = ans
    }
    constructEq()
    function decGenCounter()
    {
        genCounter = genCounter -1
        genCounterElem.innerText = genCounter
    }
    //INCREASE GENERATE COUNTER
    function incGenCounter()
    {
        genCounter = genCounter +1
        genCounterElem.innerText = genCounter
    }

    fetch('http://localhost:3000/gundams')
    .then(resp =>{
        if(resp.ok){
            return resp.json()
        }
        throw new Error('ERROR AT POINT #1')
    })

    .then(data =>{
        //OUTPUTS GUNDAM IMAGES FROM FETCHED DATA ONTO PAGE
        setDivs(data)
    })


    //=====CLICK EVENT FOR GENERATE BUTTON=====//
    genButton.addEventListener('click',function(){
        console.log("GENERATE BUTTON PRESSED!")
        if(genCounter<=0)
        {
            return
        }
     
        //DECREMENTS GENERATE COUNTER BY 1
        decGenCounter()

        const rando = Math.floor(Math.random() * 5)
        let counter1 = 0
        let gundamPick = document.getElementById(rando)
        while(gundamPick.style.visibility === "visible")
        {
            const rando2 = Math.floor(Math.random() * 5)
            gundamPick = document.getElementById(rando2)
            counter1++
            if(counter1 === 5)return

        }
        gundamPick.style.visibility = " visible"



        

    })
    //=====END OF CLICK EVENT FOR GENERATE BUTTON====//




    //SUBMIT EVENT
    gundamForm.addEventListener('submit',function(event){
        event.preventDefault()
        if(parseInt(event.target['answer'].value) === randAns)
        {
            incGenCounter()
            constructEq()
        }
        else{return}
    })
})