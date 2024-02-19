var firstName = document.querySelector('.kevin');
firstName.innerHTML = firstName.textContent.replace(/\S/g, "<div class='letter' style='transform:translateX(100vw)'>$&</div>");
var lastName = document.querySelector('.gillispie');
lastName.innerHTML = lastName.textContent.replace(/\S/g, "<div class='letter' style='transform:translateX(100vw)'>$&</div>");
window.onload = () => {
    anime.timeline({
        loop: false
    }).add({
        targets: '.kevin, .gillispie, .home-btn-devname',
        opacity: [0, 1],
    }).add({
        targets: '.kevin .letter, .gillispie .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateX: ['100vw', 0],
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
    })
}
