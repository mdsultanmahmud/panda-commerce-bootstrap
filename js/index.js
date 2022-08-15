const headings = document.getElementsByTagName('h2')
for (const heading of headings) {
    heading.style.color = 'lightblue'
}

// change background color of backpack section 
const backpackSection = document.getElementById('backpack')
backpackSection.style.background = 'tomato'

// style card class 

let cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px'
}

// alert with button click events 
const submit = document.getElementById('submit')
submit.addEventListener('click',function(){
    alert('Please Enter Your Correct E-mail Adreess!!')
})

// add event handler in buy now button 
let allButton = document.getElementsByClassName('panda-btn')
const productContainer = document.getElementById('productContainer')

productContainer.addEventListener('click', function (event) {
    const parents = event.target.parentNode.parentNode.parentNode.parentNode
    const removableItem = event.target.parentNode.parentNode.parentNode
    parents.removeChild(removableItem)
})


// email button check 

const userEmail = document.getElementById('exampleInputEmail1')
userEmail.addEventListener('keyup', function(event){
    
    if(event.target.value.toLowerCase() == 'email'){
        submit.removeAttribute('disabled', true)
        submit.classList.add('panda-btn')
        submit.classList.remove('submit-btn')

    }else{
        submit.setAttribute('disabled', true)
        submit.classList.remove('panda-btn')
        submit.classList.add('submit-btn')
    }
})


// change img with mouseEvents 
let images = document.querySelectorAll('#productContainer img')
// for(const image of images){
//     image.addEventListener('mouseout', function(){
//         image.src = 'images/shoes/shoe-1.png'
//     })
// }
for(const image of images){
    let src = [
        'https://m.media-amazon.com/images/I/81oUvlsYcnL._SL1500_.jpg', 
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80',
        'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=',
        'https://thumbs.dreamstime.com/b/vintage-red-shoes-23151148.jpg',
        'https://media.gettyimages.com/photos/canvas-shoes-picture-id171224469?s=612x612',
        'https://media.istockphoto.com/photos/modern-sport-shoes-picture-id623270836?k=20&m=623270836&s=612x612&w=0&h=C0WdoMeoHYugJy8mVgrTl8p1U8DltiZ25AzzjGY05GA=',
        'https://5.imimg.com/data5/CD/CB/MY-48686190/college-bag-500x500.jpg',
        'https://image.shutterstock.com/image-photo/elegant-student-backpack-full-schooler-260nw-2033542259.jpg',
        'https://images-eu.ssl-images-amazon.com/images/I/61QDyLtkm3L._AC._SR360,460.jpg',
        'https://p.kindpng.com/picc/s/356-3568134_back-pack-png-transparent-png.png',
        'https://i.pinimg.com/550x/e1/08/b5/e108b5b6a68f4469b80b231482976fc3.jpg',
        'https://rukminim1.flixcart.com/image/714/857/kbgu1e80/backpack/g/h/y/backpack-for-men-and-women-unisex-backpack-college-bag-for-boys-original-imafstdqytdkzskh.jpeg?q=50',
        'https://www.businessinsider.in/photo/83866417/college-bags-for-girls-india.jpg?imgsize=133394',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwtCk4aeKxKqUDGnuP20ZDopLQ7RzFxMkiavUEbHp3W973eezBZ9kXUceiWdSB8tgz7gA&usqp=CAU'
]

    image.addEventListener('mouseenter', function(event){
        let randomNumbers = Math.floor(Math.random() * src.length)
        image.src = src[randomNumbers]
    })
    
}


// change background of subscribe section 
const subscribe = document.getElementById('subscribe')
subscribe.addEventListener('dblclick', function(){
    subscribe.style.background = 'green'
})




























