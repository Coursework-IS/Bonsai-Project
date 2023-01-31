const profiles=[
    {name:"Aayush Acharya",title:"Enter the sub title",decsciprion:"Being involved in this team has provided me with opportunities that Icould only imagine.",image:"aayush.jpg"},
    {name:"Anuja Gautam",title:"Enter the sub title",decsciprion:" have learnt with my team and led them with my skills, which has put me in a better place.",image:"anuja.jpg"},
    {name:"Hishila Chaulane",title:"Enter the sub title",decsciprion:"Working with this team has given me the skills necessary to strive and go ahead in life",image:"hishila.jpg"},
    {name:"Prajwol Lamichhane",title:"Enter the sub title",decsciprion:" team is about working together and having fun and that is how we do.",image:"prajwol.jpg"},
    {name:"Subham Adhikari",title:"Enter the sub title",decsciprion:"Working with each other and sharing knowledge has given me skills to work.",image:"subham.jpg"}
]
const profileContainer = document.querySelector('.profileContainer')
const setProfile = (id) => {
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
  </div>
    `
    console.log(id)
}