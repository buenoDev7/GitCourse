// function troll() {
//     const msgTroll = document.getElementById("msg-troll");
//     const seeMoreTroll = document.getElementById("seeMoreTroll")
//     msgTroll.classList.toggle("d-none")

//     if (!msgTroll.classList.contains('d-none')) {
//         seeMoreTroll.textContent = "Hide"
//     } else {
//         seeMoreTroll.textContent = "See More"
//     }
// }

// function showName() {
//     let usernameInfo = prompt("Welcome! What's your name?")
//     let username = document.getElementById('username')
//     username.textContent = `, ${usernameInfo}!`;

//     if (usernameInfo === null || usernameInfo === "" || !isNaN(usernameInfo)) {
//         username.textContent = ", Stranger!";
//     } else {
//         username.textContent = `, ${usernameInfo}!`;
//     }
// } showName();