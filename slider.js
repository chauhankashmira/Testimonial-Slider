const testimonials = [
    {
    name: "Kash C",
    photoUrl: "./thumbnail_IMG_7797.jpg",
    text: "This is simply unbelievable! I would be lost without JavaScript. The very best. Not able to tell you how happy I am with the JavaScript.",
    },
{
    name: "Kashmira",
    photoUrl: "./Image (4).jfif",
    text: "I am really enjoying JavaScript. I would like learn more and more. I love to be an expert in the JavaScript."
},

{
    name: "Tinu",
    photoUrl: "./Image (5).jfif",
    text: "It is really good time to start learning JavaScript. Once you start, you cannot stop. Keep learning!"
},
];

const imgE1 = document.querySelector("img");
const textE1 = document.querySelector (".text");
const usernameE1 = document.querySelector (".username");

let idx = 0;

updateTestimonial ();

function updateTestimonial () {
    const {name, photoUrl, text} = testimonials[idx];
    imgE1.src = photoUrl;
    textE1.innerText = text;
    usernameE1.innerText = name;
    idx ++;
    if (idx === testimonials.length) {
        idx = 0;
    } 
     
    setTimeout (() => {
        updateTestimonial ();

    }, 10000);

}