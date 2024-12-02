document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".responsive-container-block.inner-container .responsive-container-block");
  
    // Team card data with different names, positions, and images
    const teamData = [
      { name: "Srijon Chowdhury", position: "Web Lead", imgSrc: "/img/srijon.jpeg" },
      { name: "Shuvrajiit Adhikary", position: "App Lead", imgSrc: "/img/App.jpeg" },
      { name: "Anik Das", position: "Design Lead", imgSrc: "/img/Anik.jpeg" },
      { name: "Somenath Goswami", position: "AIML Lead", imgSrc: "/img/AIML.jpeg" },
      { name: "Debanjan Ghosh", position: "Management lead", imgSrc: "/img/Event.jpeg" },
      { name: "Sophia Lee", position: "Lead Instructor", imgSrc: "/img/amrindar.jpeg" },
      { name: "David Wilson", position: "Instructor", imgSrc: "/img/cloud.jpeg" },
      { name: "Emma Davis", position: "Senior Instructor", imgSrc: "/img/hasar.jpeg" },
      { name: "Michael Clark", position: "Instructor", imgSrc: "/img/cs.jpeg" },
      { name: "Olivia Martinez", position: "Lead Instructor", imgSrc: "/img/" },
      { name: "James Taylor", position: "Assistant Instructor", imgSrc: "" },
      { name: "Lily Robinson", position: "Instructor", imgSrc: "" },
      { name: "William White", position: "Senior Instructor", imgSrc: "" },
      { name: "Isabella Harris", position: "Instructor", imgSrc: "" },
      { name: "Ethan Lewis", position: "Lead Instructor", imgSrc: "" }
    ];
  
    // Create 15 team cards dynamically using forEach
    teamData.forEach(cardData => {
      const cardHTML = `
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
          <div class="team-card">
            <div class="img-wrapper">
              <img class="team-img" src="${cardData.imgSrc}" alt="${cardData.name}">
            </div>
            <p class="text-blk name">${cardData.name}</p>
            <p class="text-blk position">${cardData.position}</p>
            <div class="social-media-links">
              <a href="http://www.twitter.com/" target="_blank">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg">
              </a>
              <a href="http://www.facebook.com/" target="_blank">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg">
              </a>
              <a href="http://www.instagram.com/" target="_blank">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg">
              </a>
              <a href="http://www.gmail.com/" target="_blank">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg">
              </a>
            </div>
          </div>
        </div>
      `;
      // Append the card HTML to the container
      container.innerHTML += cardHTML;
    });
  });