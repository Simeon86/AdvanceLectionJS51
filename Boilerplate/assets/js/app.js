window.addEventListener('DOMContentLoaded', () => {
    // DOM - document object model
    // BOM - brouser object model

    console.log(document);
    console.log({document});

    console.log(document.body.style);

    document.body.style.background = 'red'

    console.log('/////////////////////////////////////////////////////////////////////////');

    console.log(document.body.childNodes);
    console.log(document.body.children);

    for(let i = 0; i < document.body.children.length; i++){
        console.log(document.body.children[i]);
    }

    console.log('/////////////////////////////////////////////////////////////////////////');

    console.log(document.querySelector('ul'));

    console.log(document.querySelector('ul#nav'));

    let nav = document.querySelector('ul#nav')
    console.log(nav);

    for(let i = 0; i < nav.children.length; i++){
        
        if(i % 2 === 0) {
            nav.children[i].style.color = 'yellow'
        } else {
            nav.children[i].style.color = 'blue'
        }
    }
});