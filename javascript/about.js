// storing all the profile details in the array of object form
const profiles = [
  { name: "Aayush Acharya", title: "Don't watch the clock; do what it does. Keep going.", decsciprion: "Being involved in this team has provided me with opportunities that Icould only imagine.", image: "aayush.png", profile: "aayush.html" },
  { name: "Anuja Gautam", title: "Believe you can and you're halfway there.", decsciprion: "I have learnt with my team and led them with my skills, which has put me in a better place.", image: "anuja.jpg", profile: "anuja.html" },
  { name: "Hishila Chalaune", title: "The future belongs to those who believe in the beauty of their dreams.", decsciprion: "Working with this team has given me the skills necessary to strive and go ahead in life", image: "hishila.jpg", profile: "hishila.html" },
  { name: "Prajwol Lamichhane", title: "Don't let yesterday take up too much of today.", decsciprion: "Team is about working together and having fun and that is how we do.", image: "prajwol.jpg", profile: "prajwol.html" },
  { name: "Subham Adhikari", title: "Be neither optimistic nor pessimistic. ", decsciprion: "Working with each other and sharing knowledge has given me skills to work.", image: "subham.jpg", profile: "subham.html" }
]
// getting profileContainer to update the profile when clicked of profile pictures
const profileContainer = document.querySelector('.profileContainer')
let profile = document.getElementById(4);

// this function sets the profile to the passed id
const setProfile = (id) => {
  // removig previous active profile
  profile.classList.remove('active');
  // adding new active profile
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