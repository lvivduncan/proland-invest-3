
// init

{
    // перший слайдер
    const slider = document.getElementById('slider'),
          slides = slider.querySelectorAll('figure'),
          length = slides.length

    for(let i = 0; i < slides.length; i++){

        slides[i].classList.remove('active')
        slides[0].classList.add('active')
    }
    
    let counter = 0
    const delay = 5000
    
    // start
    let interval = setInterval( () => {

        if(counter !== length-1){

            counter++
            
            for(let i = 0; i < length; i++){
    
                slides[i].className = ''
            }

            slides[counter].className = 'active'

        } else {

            counter = 0
            
            for(let i = 0; i < length; i++){
    
                slides[i].className = ''
            }

            slides[counter].className = 'active'
        }

    }, delay)

    // pause
    slider.addEventListener('mouseover', () => {

        clearInterval(interval)
    })

    // go
    slider.addEventListener('mouseout', () => {

        interval = setInterval( () => {

            if(counter !== length-1){
    
                counter++
                
                for(let i = 0; i < length; i++){
        
                    slides[i].className = ''
                }
    
                slides[counter].className = 'active'
    
            } else {
    
                counter = 0
                
                for(let i = 0; i < length; i++){
        
                    slides[i].className = ''
                }
    
                slides[counter].className = 'active'
            }
    
        }, delay)
    })
}

// компанії, які нам довіряють
const slider2 = tns({
    container: '#company .content',
    mouseDrag: true,
    items: 1,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3
      }
    }
});

// питання-відповідь
const slider3 = tns({
    container: '#faq .content',
    mouseDrag: true,
    items: 1,
    controls: false,
    navPosition: 'bottom',
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 2
      }
    }
});




// TODO: bug
const cover = document.createElement('div')
cover.setAttribute('id', 'cover')

const body = document.getElementsByTagName('body')[0]

let phone = false

// phone
document.getElementById('phone').addEventListener('click', () => {

    if(phone === false){

        document.querySelector('#phone ul').className = 'active'
        body.append(cover)
        phone = true
    } else {
        
        document.querySelector('#phone ul').className = ''
        cover.remove()
        phone = false
    }

})

cover.addEventListener('click', () => {

    document.querySelector('#phone ul').className = ''
    cover.remove()
})
// TODO: bug


// switch color theme
{
    const switcher = document.getElementById('switcher'),
          body = document.getElementsByTagName('body')[0]

    if(localStorage.getItem('theme-color') === 'light'){

        body.classList.add('active')
    } else {

        body.classList.remove('active')
    }

    switcher.addEventListener('click', () => {

        switcher.classList.toggle('active')
        body.classList.toggle('active')

        if(localStorage.getItem('theme-color') === 'light'){

            localStorage.removeItem('theme-color')
        } else {

            localStorage.setItem('theme-color', 'light')
        }        
    })
}











// 13-12-2021