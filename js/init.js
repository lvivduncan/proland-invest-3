
// init

const body = document.getElementsByTagName('body')[0]

{
    window.addEventListener('scroll', () => {

        if(window.pageYOffset > 50){

            body.classList.add('scroll')
        } else {

            body.classList.remove('scroll')
        }
    });
}

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
        items: 1
      },
      900: {
        items: 2
      }
    }
});




// TODO: bug
/* const cover = document.createElement('div')
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
}) */
// TODO: bug


// switch color theme
{
    const switcher = document.getElementById('switcher')

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

{
    // const body = document.getElementsByTagName('body')[0];

    // create global element for phone and mobile menu and order-form
    const cover = document.createElement('div');
    cover.setAttribute('id', 'cover');

    // phone icon from nav
    const phone = document.getElementById('phone');

    // mobile phones
    const phoneUl = phone.getElementsByTagName('ul')[0];

    // check resize
    let flag = false;

    // check phone click
    let clickPhone = false;

    // check menu click
    let clickMenu = false;

        const order = document.getElementById('order');

        const form = document.getElementById('order-form');
        
        if(order !== null){

            // show/hide
            window.addEventListener('scroll', () => {
                if(window.pageYOffset < 50){
                    order.className = '';
                } else if(window.pageYOffset > 100) {
                    setTimeout( () => {
                        order.className = 'active';
                    }, 10);
                }
            });

            order.addEventListener('click', () => {

                // insert cover and wiev mobile menu
                body.append(cover);

                form.classList.add('active');
            });
        }       

    phone.addEventListener('click', () => {

        if(clickPhone === false && clickMenu === false){

            // insert cover and wiev mobile menu
            body.append(cover);

            // show mobile phones
            phoneUl.classList.add('active');

            clickPhone = true;
        } else if(clickPhone === false && clickMenu === true) {

            // show mobile phones
            phoneUl.classList.add('active');

            // hide mobile nav if open
            navUl.classList.remove('active');

            clickMenu = false;
            clickPhone = true;
        } else {
            
            // hide mobile phones
            phoneUl.classList.remove('active');

            // delete cover
            cover.remove();

            // set null
            clickPhone = false;
        }

        // close order form (if exists)
        form && form.classList.remove('active');
    });

    // menu
    const nav = document.getElementById('nav');

    // mobile menu
    const navUl = nav.getElementsByTagName('ul')[0];

    // menu icon
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    mobileMenu();

    window.addEventListener('resize', mobileMenu);

    menu.addEventListener('click', () => {

        if(clickMenu === false && clickPhone === false){

            // insert cover and wiev mobile menu
            body.append(cover);

            // show mobile phones
            navUl.classList.add('active');

            clickMenu = true;
        } else if(clickMenu === false && clickPhone === true){

            // show mobile nav
            navUl.classList.add('active');

            // hide moblile phones
            phoneUl.classList.remove('active');

            clickPhone = false;
            clickMenu = true;
        } else {

            // hide mobile phones
            navUl.classList.remove('active');

            // delete cover
            cover.remove();

            // set null
            clickMenu = false;
        }

        // close order form (if exists)
        form && form.classList.remove('active');
    });

    document.addEventListener('click', e => {

        if(e.target.id === 'cover'){

            closeAll();
        }
    });

    document.addEventListener('keydown', e => {

        if(e.code === 'Escape' || e.key === 'Escape'){

            closeAll();
        }
    });

    function mobileMenu(){

        if(window.innerWidth < 996){

            nav.append(menu);

            flag = true;
        } else {

            menu.remove();
            flag = false;
        }
    }

    function closeAll(){

        // delete cover
        cover.remove();

        // hide mobile menu
        navUl.classList.remove('active');

        // hide mobile phones
        phoneUl.classList.remove('active');

        // hide order form
        form && form.classList.remove('active');
        
        // set null
        clickPhone = false;

        // set null
        clickMenu = false;
    }
}









// 16-12-2021