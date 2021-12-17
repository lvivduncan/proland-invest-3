
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


// перший слайдер
if(document.getElementById('slider') !== null){

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

if(document.querySelectorAll('.tns').length > 0)
{
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
}

// switch color theme
{
    const switcher = document.getElementById('switcher')

    if(localStorage.getItem('theme-color') === 'light'){

        body.classList.add('active')
    } else {

        body.classList.remove('active')
    }

    switcher.addEventListener('click', () => {

        // switcher.classList.toggle('active')
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

// slider inner page
{
    const images = document.querySelectorAll('#swipe-slider picture'),
          signatures = document.querySelectorAll('#swipe-slider h1'),
          counter = 6

    if(images !== null){

        images.forEach((item, i) => {
            
            item.style.WebkitAnimationDelay = i * counter + 's'
            item.style.animationDelay = i * counter + 's'
            item.style.WebkitAnimationDuration = images.length * counter + 's'
            item.style.animationDuration = images.length * counter + 's'
        })
    }

    if(signatures !== null){

        signatures.forEach((item, i) => {

            item.style.WebkitAnimationDelay = i * counter + 's'
            item.style.animationDelay = i * counter + 's'
            item.style.WebkitAnimationDuration = images.length * counter + 's'
            item.style.animationDuration = images.length * counter + 's'
        })
    }
}

// https://github.com/lvivduncan/social-buttons
{
    const e=document.querySelectorAll(".share-facebook"),
    t=document.querySelectorAll(".share-twitter"),
    l=document.querySelectorAll(".share-linkedin"),
    i=document.querySelectorAll(".share-telegram"),
    r=document.querySelectorAll(".share-viber");
    e.forEach(e=>{e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>',e.addEventListener("click",e=>{e.preventDefault();const t="https://facebook.com/sharer.php?display=popup&u="+window.location.href;window.open(t,"sharer","toolbar=0,status=0,resizable=1,width=626,height=436")})}),
    t.forEach(e=>{e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130"><path d="m63.91483,0.25777c-35.09946,0 -63.65592,28.55646 -63.65592,63.65706c0,35.10174 28.55646,63.65933 63.65592,63.65933c35.10174,0 63.6582,-28.5576 63.6582,-63.65933c-0.00114,-35.1006 -28.5576,-63.65706 -63.6582,-63.65706zm33.87997,47.05463a27.24263,27.24263 0 0 1 -6.21,6.5896c0.01023,0.36937 0.01705,0.73874 0.01705,1.10812c0,18.56409 -14.12593,37.76576 -37.76576,37.76576a37.65893,37.65893 0 0 1 -20.34957,-5.95996a1.13312,1.13312 0 0 1 -0.45689,-1.3377a1.12516,1.12516 0 0 1 1.20018,-0.74784c0.99674,0.11479 1.98438,0.17162 2.93679,0.17162c4.63704,0 9.05587,-1.24677 12.93485,-3.62894a13.99978,13.99978 0 0 1 -10.0492,-9.34342a1.13994,1.13994 0 0 1 0.23185,-1.1013a1.12857,1.12857 0 0 1 1.06607,-0.36028c0.21367,0.04092 0.42847,0.07615 0.64214,0.1057c-3.94717,-2.51514 -6.50777,-6.93738 -6.50777,-11.83355l0,-0.16252a1.13653,1.13653 0 0 1 1.68775,-0.99333c0.49439,0.2739 1.00697,0.51144 1.53318,0.71147a13.99978,13.99978 0 0 1 -3.11637,-8.82175c0,-2.47536 0.65578,-4.91208 1.89573,-7.04535a1.13653,1.13653 0 0 1 1.86391,-0.14775c6.0452,7.41245 14.83286,12.07563 24.28538,12.93485a14.28619,14.28619 0 0 1 -0.10001,-1.69684c0,-7.725 6.28615,-14.01001 14.01228,-14.01001c3.64485,0 7.17151,1.43771 9.77302,3.96308a24.59111,24.59111 0 0 0 7.2181,-2.86292a1.13653,1.13653 0 1 1 1.66388,1.32178a13.89408,13.89408 0 0 1 -2.63675,4.75979a24.18309,24.18309 0 0 0 2.82655,-1.05015a1.13653,1.13653 0 0 1 1.40361,1.67184z"/></svg>',e.addEventListener("click",e=>{e.preventDefault();const t="https://twitter.com/intent/tweet?text="+document.title+" "+window.location.href;window.open(t,"twitter","toolbar=0,status=0,resizable=1,width=626,height=436")})}),
    l.forEach(e=>{e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 68"><path d="m52.20373,49.19435l0,-13.05399c0,-6.994 -3.73385,-10.24858 -8.71157,-10.24858c-4.01695,0 -5.817,2.21022 -6.82013,3.7606l0,-3.2256l-7.56801,0c0.10031,2.13665 0,22.76757 0,22.76757l7.56801,0l0,-12.71515c0,-0.67878 0.04904,-1.35868 0.24967,-1.84463c0.54615,-1.35979 1.79113,-2.76751 3.88098,-2.76751c2.73964,0 3.83416,2.08761 3.83416,5.14714l0,12.18127l7.5669,0l0,-0.00111zm-31.07232,-25.87503c2.63822,0 4.28222,-1.74989 4.28222,-3.93559c-0.04904,-2.23251 -1.64401,-3.93225 -4.23207,-3.93225s-4.28111,1.69862 -4.28111,3.93225c0,2.1857 1.64289,3.93559 4.18303,3.93559l0.04793,0zm12.3061,43.55564c-18.4664,0 -33.43747,-14.97107 -33.43747,-33.43747c0,-18.46751 14.97107,-33.43747 33.43747,-33.43747s33.43747,14.96995 33.43747,33.43747c0,18.4664 -14.97107,33.43747 -33.43747,33.43747zm-8.5221,-17.68062l0,-22.76757l-7.5669,0l0,22.76757l7.5669,0z"/></svg>',e.addEventListener("click",e=>{e.preventDefault();const t="https://linkedin.com/shareArticle?mini=true&url="+window.location.href+"&title="+document.title;window.open(t,"linkedin","toolbar=0,status=0,resizable=1,width=626,height=436")})}),
    i.forEach(e=>{e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/></svg>',e.addEventListener("click",e=>{e.preventDefault();const t="https://telegram.me/share/url?url="+window.location.href+"&text="+document.title;window.open(t,"telegram","toolbar=0,status=0,resizable=1,width=626,height=436")})}),
    r.forEach(e=>{e.innerHTML='<svg viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path></svg>',e.addEventListener("click",e=>{e.preventDefault();const t="viber://forward?text="+document.title+" "+window.location.href;window.open(t,"viber","toolbar=0,status=0,resizable=1,width=626,height=436")})})
}

// 17-12-2021