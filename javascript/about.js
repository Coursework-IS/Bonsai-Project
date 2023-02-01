const profiles = [
  { name: "Aayush Acharya", title: "Enter the sub title", decsciprion: "Being involved in this team has provided me with opportunities that Icould only imagine.", image: "aayush.jpg", profile: "aayush.html" },
  { name: "Anuja Gautam", title: "Enter the sub title", decsciprion: "I have learnt with my team and led them with my skills, which has put me in a better place.", image: "anuja.jpg", profile: "anuja.html" },
  { name: "Hishila Chaulane", title: "Enter the sub title", decsciprion: "Working with this team has given me the skills necessary to strive and go ahead in life", image: "hishila.jpg", profile: "hishila.html" },
  { name: "Prajwol Lamichhane", title: "Enter the sub title", decsciprion: " team is about working together and having fun and that is how we do.", image: "prajwol.jpg", profile: "prajwol.html" },
  { name: "Subham Adhikari", title: "Be neither optimistic nor pessimistic. ", decsciprion: "Working with each other and sharing knowledge has given me skills to work.", image: "subham.jpg", profile: "subham.html" }
]
const profileContainer = document.querySelector('.profileContainer')
let profile = document.getElementById(4);
const setProfile = (id) => {
  profile.classList.remove('active');
  profile = document.getElementById(id);
  profileContainer.innerHTML = `
    <div class="imageBox">
    <img src=./../assets/profile/${profiles[id].image}>
  </div>
  <div class="textBox left">
    <h1>${profiles[id].name}</h1>
    <h3>${profiles[id].title}</h3>
    <p>
        ${profiles[id].decsciprion}
    </p>
    <button class="profileButton"><a href="./portfolio/${profiles[id].profile}">View Profile</a></button>
  </div>
    `
  profile.classList.add('active');

  console.log("pp" + profile)
}