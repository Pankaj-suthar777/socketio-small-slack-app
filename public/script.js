const userName = "Pankaj";
const password = "1223456";
// const userName = prompt("What is your username?");
// const password = prompt("What is your password?");

const socket = io("http://localhost:3000");
socket.on("connect", () => {
  console.log("Connected");
});

socket.on("nsList", (nsData) => {
  const nameSoacesDiv = document.querySelector(".namespaces");
  nsData.forEach((ns) => {
    nameSoacesDiv.innerHTML += ` <div class="namespace" ns="${ns.endpoint}"><img src="${ns.image}"></div>`;
  });

  Array.from(document.getElementsByClassName("namespace")).forEach(
    (element) => {
      element.addEventListener("click", (e) => {
        const nsEndPoint = element.getAttribute("ns");
        console.log(nsEndPoint);
        const clickedNs = nsData.find((row) => row.endpoint === nsEndPoint);
        console.log(clickedNs);
        const rooms = clickedNs.rooms;

        roomList.innerHTML = "";

        let roomList = document.querySelector(".room-list");
        rooms.forEach((room) => {
          roomList.innerHTML += `<li><span class="glyphicon glyphicon-lock"></span>${room.roomTitle}</li>`;
        });
      });
    }
  );
});
