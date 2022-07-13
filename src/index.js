import './less/index.less'

// Your code goes here!

//1-load
window.onload = function(evt){
    const head = document.querySelector('h1')
    head.textContent = "Foo Bus/Fun Bus"

    //2-copy
    window.addEventListener('copy',() =>{
        navigator.clipboard.readText()
            .then(text => {
                head.textContent += text
         })
    })

    //3-click
    document.body.addEventListener('click', evt =>{
        evt.target.classList.toggle('mirror')
    })

    //4-doubleclick
    document.body.addEventListener('dblclick', evt =>{
        evt.target.outerHTML = ''
    })

    //5-keydown
    window.addEventListener('keydown', evt =>{
        if(evt.key == '4'){
            document.body.innerHTML = "BOO!"
        }
    })

    //6-mousemove
    document.body.addEventListener('mousemove', evt =>{
        const {clientX, clientY} = evt
    })

    //7-mouseenter
    //8-mouseleave
    const destinations = document.querySelectorAll('.destination')
    for(let destination of destinations) {
        destination.addEventListener('mouseenter', () =>{
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () =>{
            destination.style.fontWeight = 'initial'
        })
    }
    
    //9-resize
    let x = 0;
    window.addEventListener('resize', evt =>{
        let text = x += 1
        document.getElementsByClassName('logo-heading').innerHTML = text
    })

    //10-wheel
    document.body.addEventListener('wheel', evt =>{
        evt.style.fontSize = '20px';
    })

}

