function troll() {
    const msgTroll = document.getElementById("msg-troll");
    const seeMoreTroll = document.getElementById("seeMoreTroll")
    msgTroll.classList.toggle("d-none")

    if (!msgTroll.classList.contains('d-none')) {
        seeMoreTroll.textContent = "Hide"
    } else {
        seeMoreTroll.textContent = "See More"
    }
}