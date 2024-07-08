const text = "Welcome to my GitHub!";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust typing speed here
    } else {
        // Blinking cursor effect after typing
        document.getElementById("typewriter-text").style.borderRight = '0.1em solid black';
        setInterval(() => {
            document.getElementById("typewriter-text").style.borderRight = (document.getElementById("typewriter-text").style.borderRight == '0.1em solid black' ? 'none' : '0.1em solid black');
        }, 500);
    }
}

typeWriter();
