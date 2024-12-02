document.addEventListener("DOMContentLoaded", function() {
  let viewbtns = document.querySelectorAll(".Theamview");  
  let demoshow = document.querySelector(".demo");
  let icon = document.querySelector("#icon");
  let imgapp = document.querySelector(".imgapps")
  let appteam = document.querySelector("#appteam")

  // Loop through all view buttons and add event listeners
  viewbtns.forEach((viewbtn) => {
      viewbtn.addEventListener("click", (e) => {
          e.preventDefault();

          console.log("Button clicked");
          demoshow.classList.toggle("active");
          document.body.style.overflow = "hidden";
    //   }
      });
   
  });
});

const teamsection = document.querySelector(".team-section");
const teamcontainer = document.querySelector(".team-container");

let carddetails = [
    { name: "Srijon Chowdhury", role: "Software Dev", img: "/img/jay sir.jpg" },
    { name: "Srijon Chowdhury", role: "Software Dev", img: "/img/Arpan.jpg" },
    { name: "Srijon Chowdhury", role: "Software Dev", img: "/img/nirvik.jpeg" },
    { name: "Srijon Chowdhury", role: "Software Dev", img: "/img/sujoy.jpeg" },
    { name: "Srijon Chowdhury", role: "Software Dev", img: "/img/srijon.jpeg" },
    { name: "Srijon Chowdhury", role: "Software Dev", img: "/img/Anik.jpeg" },
];

// Clear the container once before adding cards
function generateTeamCards() {
    teamcontainer.innerHTML = ""; // Clear existing content
    carddetails.forEach((member) => {
        const teamdiv = document.createElement("div");
        teamdiv.classList.add("team");

        const teammem = document.createElement("div");
        teammem.classList.add("team-member");
        teammem.innerHTML = `<img src="${member.img}" alt="${member.name}">`;

        const infodiv = document.createElement("div");
        infodiv.classList.add("team-info");
        infodiv.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;

        teamdiv.appendChild(teammem);
        teamdiv.appendChild(infodiv);
        teamcontainer.appendChild(teamdiv);
    });
}
document.addEventListener("DOMContentLoaded",generateTeamCards)

// count js

// function([string1, string2],target id,[color1,color2])    
consoleText(['Learn.', 'Build.','Solve.', 'Transcend.'], 'text',['#4585f3','#ec4434','#0d9c5c','#fcbd0a']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}



