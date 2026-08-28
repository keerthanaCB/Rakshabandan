let currentPhoto = 0;


const photos = [

    {
        image: "images/photo1.jpg",
        text: "One of our beautiful memories."
    },

    {
        image: "images/photo2.jpg",
        text: "Some moments may be simple, but they become special memories."
    },

    {
        image: "images/photo3.jpg",
        text: "More memories are waiting for us."
    },

    {
        image: "images/photo4.jpg",
        text: "One more special memory to keep forever."
    }

];


function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }

    updatePhoto();

}


function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {

        currentPhoto = photos.length - 1;

    }

    updatePhoto();

}


function updatePhoto() {

    document.getElementById("memoryPhoto").src =
        photos[currentPhoto].image;

    document.getElementById("memoryText").innerText =
        photos[currentPhoto].text;

}


function openGift(gift) {

    const message =
        document.getElementById("giftMessage");


    if (gift === "gift1") {

        message.innerText =
            "Thank you for always being there when I need you.";

    }


    if (gift === "gift2") {

        message.innerText =
            "Honestly... you can be very annoying sometimes! 😂 But life would definitely be boring without you.";

    }


    if (gift === "gift3") {

        message.innerText =
            "I may not say it often, but I am genuinely happy and lucky to have you as my brother.";

    }

}


function showFeeling(type) {

    const message =
        document.getElementById("feelingMessage");


    if (type === "like") {

        message.innerText =
            "I like the fact that no matter what happens, you are still my brother and part of my life.";

    }


    if (type === "funny") {

        message.innerText =
            "We may fight over small things, but somehow we always become normal again! 😂";

    }


    if (type === "real") {

        message.innerText =
            "I may not express it every day, but I truly care about you and want to see you happy and successful.";

    }

}