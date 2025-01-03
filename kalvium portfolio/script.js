// alert("Welcome to our portfolio page")
function navigateTo(page) {
  window.location.href = page;
}


// Team Members Data
const teamMembers = [

  { name: "Aditi Singh", github: "https://github.com/shakti-power", linkedin: "https://www.linkedin.com/in/aditi-singh-19978730b/", image: "./assests/backk.jpg" },
  { name: "Aditya Rane", github: "https://github.com/Haschwalt29", linkedin: "www.linkedin.com/in/aditya-rane-9b82822aa", image: "./assests/backk.jpg" },
  { name: "Aflah Haami", github: null, linkedin: null, image: "./assests/backk.jpg" },
  { name: "Ankit Manghnani", github: "https://github.com/manghnaniankit", linkedin: "https://in.linkedin.com/in/ankit-manghnani-8b0b522a4", image: "./assests/backk.jpg" },
  { name: "Anuj Goyal", github: "https://github.com/anujgoyalengg", linkedin: "https://www.linkedin.com/in/anuj-goyal-13835b2b9/", image: "./assests/backk.jpg" },
  { name: "Arnav Lihantu", github: null, linkedin: null, image: "./assests/backk.jpg" },
  { name: "Divya Dadhich", github: "https://github.com/Divya15042007", linkedin: "www.linkedin.com/in/divya-dadhich-6b6780344", image: "./assests/backk.jpg" },
  { name: "Hasan Wajie", github: "https://github.com/hasan-kalvium", linkedin: "https://www.linkedin.com/in/hasan-ahmed-648435319/", image: "./assests/backk.jpg" },
  { name: "Kartik Bhardwaj", github: "https://github.com/kartikbhardwaj1111", linkedin: "https://www.linkedin.com/in/kartik-bhardwaj-0b82a8316/", image: "./assests/backk.jpg" },
  { name: "Nidhi Namdev", github: "https://github.com/nidhi041", linkedin: "https://www.linkedin.com/in/nidhi-namdev-933651322/", image: "./assests/backk.jpg" },
  { name: "Palchhi Jain", github: "https://github.com/Palchhi8", linkedin: "https://www.linkedin.com/in/palchhi-jain-3293a3344/", image: "./assests/backk.jpg" },
  { name: "Parth Sarawgi", github: null, linkedin: null, image: "./assests/backk.jpg" },
  { name: "Parv Jhanwar", github: "https://github.com/prvcds", linkedin: "http://www.linkedin.com/in/parv-jhanwar-544240326", image: "./assests/backk.jpg" },
  { name: "Prithvi Singh", github: "https://github.com/amberfarmer399", linkedin: "https://www.linkedin.com/in/prithvi-singh-b9056131b/", image: "./assests/backk.jpg" },
  { name: "Priyanshi Chittora", github: "https://github.com/PRIYANSHI-eng", linkedin: null , image: "./assests/backk.jpg" },
  { name: "Saksham Gupta", github: "https://github.com/sakxhamm", linkedin: "https://www.linkedin.com/in/saksham-gupta-b450a4310/", image: "./assests/backk.jpg" },
  { name: "Sameer Shrotriya", github: "https://github.com/Sameer-s-coder", linkedin: "https://www.linkedin.com/in/sameer-shrotriya-82a113313/", image: "./assests/backk.jpg" },
  { name: "Satvik Jain", github: "https://github.com/Satvik182", linkedin: "https://www.linkedin.com/in/satvik-jain-23b112321", image: "./assests/backk.jpg" },
  { name: "Shivangi Sharma", github: null, linkedin: null, image: "./assests/backk.jpg" },
  { name: "Suhaan Sharma", github: "https://github.com/Suhaan13", linkedin: "https://www.linkedin.com/in/suhaan-sharma-a6503a313/", image: "./assests/backk.jpg" },
  { name: "Tanishq Singhal", github: null, linkedin: null, image: "./assests/backk.jpg" },
  { name: "Tanvi Agarwal", github: "https://github.com/Tans-jpg", linkedin: "https://www.linkedin.com/in/tanvi-agarwal-460314253", image: "./assests/backk.jpg" },
  { name: "Tejraj Singh", github: null, linkedin: "https://www.linkedin.com/in/tejraj-singh-rajput-5734362a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" , image: "./assests/backk.jpg"},
  { name: "Vishwajeet Dubey", github: null, linkedin: null, image: "./assests/backk.jpg" }

];

// Populate Team Grid
function populateTeamGrid() {
  const grid = document.getElementById("team-grid");
  teamMembers.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <img src="${member.image}" alt="${member.name}" class="card-img">
          <h2 class="card-title">${member.name}</h2>
          <div class="icons">
              <a href="${member.linkedin}" target="_blank" class="icon"><i class="fab fa-linkedin"></i></a>
              <a href="${member.website}" target="_blank" class="icon"><i class="fas fa-globe"></i></a>
              <a href="${member.github}" target="_blank" class="icon"><i class="fab fa-github"></i></a>
          </div>
      `;
    grid.appendChild(card);
  });
}

// Run on Load
window.onload = populateTeamGrid;
