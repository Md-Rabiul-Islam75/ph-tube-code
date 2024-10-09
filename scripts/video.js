// 1 - Fetch, Load and Show Categories on html

// create loadCategories
const loadCategories = () => {
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error));
};

const loadVideos = () => {
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch((error) => console.log(error));

};

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("videos");
    videos.forEach((video) => {
        console.log(video);
        const card = document.createElement("div");
        card.classList = "card card-compact"
        
        card.innerHTML = `
        <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail} class="h-full w-full object-cover"
      alt="Shoes" />

      <span class="absolute right-2 bottom-2 bg-black text-white rounded p-1">${video.others.posted_date}</span>
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
      <img class="w-10 h-10 rounded-full" src=${video.authors[0].profile_picture}/>
    </div>
    <div>
    <h2 class="font-bold">${video.title}</h2>
    <div class="flex items-center gap-2">
      <p class="text-gray-400">${video.authors[0].profile_name}</p>
      
      ${video.authors[0].verified === true ? '<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>' : ""}
      
    </div>
    <p> </p>
  </div>
        
        `;

        videoContainer.append(card);
    });

    //console.log(videos);
};

// Create displayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");

    categories.forEach((item) => {
        console.log(item);
      //create a button

      const button = document.createElement("button");
      button.classList = "btn";
      button.innerText = item.category;

      //add button to categoryContainer
    categoryContainer.append(button);
    });
 
};

loadCategories();
loadVideos();


/*
{
    "category_id": "1003",
    "video_id": "aaaj",
    "thumbnail": "https://i.ibb.co/xgWL3vQ/kid-gorgeous.jpg",
    "title": "Kid Gorgeous",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/xsfkwN2/john.jpg",
            "profile_name": "John Mulaney",
            "verified": true
        }
    ],
    "others": {
        "views": "241K",
        "posted_date": ""
    },
    "description": "John Mulaney's 'Kid Gorgeous' has captured the hearts of many with 241K views. As a verified comedian, John delivers a masterclass in stand-up with clever anecdotes, quick wit, and relatable humor. This performance is a laugh-filled adventure through his unique take on life, politics, and pop culture."
}
*/