
const previous = document.getElementById('prev');
const next = document.getElementById('next');

const image = document.getElementById('image');
const testimonial = document.querySelector('.testimonial');
const name = document.querySelector('.name');
const degree = document.querySelector('.degree');

const user = [
    {
        name: 'Tanya Sinclair',
        image: '../images/image-tanya.jpg',
        testimonial: '" I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. "',
        degree: 'UX Engineer'
    },

    {
        name: 'John Tarkpor',
        image: '../images/image-john.jpg',
        testimonial: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        degree: 'Junior Front-end Developer'
    }
]

let index = 0

previous.addEventListener('click', () => {
    if (index === 0) {
        index = user.length - 1
    } else {
        index--
    }

    profileInfo()
})

next.addEventListener('click', () => {
    if (index === user.length -1) {
        index = 0
    } else {
        index++
    }

    profileInfo()
})

const profileInfo = () => {
    image.setAttribute('src', user[index].image)
    testimonial.textContent = user[index].testimonial
    name.textContent = user[index].name
    degree.textContent = user[index].degree
}