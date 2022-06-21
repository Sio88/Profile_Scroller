const data = [
  {
    name: 'Paul Johnson',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },

  {
    name: 'Jen Hughes',
    age: 28,
    gender: 'female',
    lookingfor: 'male',
    location: 'Nashville TN',
    image: 'https://randomuser.me/api/portraits/women/81.jpg'
  },

  {
    name: 'John Smith',
    age: 31,
    gender: 'male',
    lookingfor: 'female',
    location: 'Atlant GA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  },

  {
    name: 'Janet Pine',
    age: 34,
    gender: 'female',
    lookingfor: 'male',
    location: 'Manhanttan NY',
    image: 'https://randomuser.me/api/portraits/women/84.jpg'
  },

  {
    name: 'John Smith',
    age: 40,
    gender: 'male',
    lookingfor: 'female',
    location: 'Jersey City NJ',
    image: 'https://randomuser.me/api/portraits/men/85.jpg'
  },
];

const profiles = profileIterator(data);

//Next Event
document.getElementById('next').addEventListener('click', nextProfile)

//Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
  document.getElementById('profileDisplay').innerHTML =`
  <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul
  `;

  document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
  } else {
    //No more profiles
    window.location.reload();
  }
} 


//Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } :
      { done: true }
    }
  }
}