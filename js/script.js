const slider1 = tns({
    container: '#slider',
    mouseDrag: true,
    // controls: false,
    // nav: false,
    items: 1,
    /* responsive: {
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
    } */
});

const slider2 = tns({
    container: '#company .content',
    mouseDrag: true,
    items: 1,
    // autoplay: true,
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