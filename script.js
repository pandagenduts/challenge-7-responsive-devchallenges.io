const navMenu = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');

const sectionTwoItems = document.querySelectorAll('.s-2__container div');
const s2Container = document.querySelector('.section-2');
const s2Item1 = document.querySelector('#s2c1');
const s2Item2 = document.querySelector('#s2c2');
const s2Item3 = document.querySelector('#s2c3');

// this is for the hamburger menu
hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// this is to add box shadow on the item hovered
sectionTwoItems.forEach(item => {
    // console.log(item);
    item.addEventListener('mouseenter', b => {
        // console.log(b);
        sectionTwoItems.forEach(item => {
            item.classList.remove('active');
        });
        if(b.target.id == 's2c1'){
            s2Item1.classList.add('active');
        }
        else if(b.target.id == 's2c2'){
            s2Item2.classList.add('active');
        }
        else if(b.target.id == 's2c3'){
            s2Item3.classList.add('active');
        };
    });
});

// this is to take the box shadow back to item 2 when mouse is leaved (default)
s2Container.addEventListener('mouseleave', a =>{
    sectionTwoItems.forEach(item => {
        item.classList.remove('active');
    });
    s2Item2.classList.add('active');
});