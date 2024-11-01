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
    //          if (viewbtn.id === "appteam") {
    //     imgapp.src = "/img/App.jpeg"
    //     console.log("imgapp.src:",imgapp.src)
    //   }
      });
   
  });
  // Add event listener to the close icon
//   if (icon) {
//       icon.addEventListener("click", (e) => {
//           e.preventDefault();
//           demoshow.classList.remove("active");
//           document.body.style.overflow = "";
//       });
//   }

//   appteam.addEventListener("clcik",(e) => {
//     e.preventDefault();
//     imgapp.src = "/img/App.jpeg"
//     console.log("imgapp.src:", imgapp.src);
// }
// )
});
