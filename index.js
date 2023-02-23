const post = document.getElementById("input-story")
console.log(post)
let storySection = document.querySelector(".story-card-main")
let story = []
function postStory(){
    storySection.innerHTML = `<span> ${post.value} <span>`
    post.value = []
}