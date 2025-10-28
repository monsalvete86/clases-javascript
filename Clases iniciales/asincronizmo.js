/* async function fetchData() {
  try {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode",
];

async function fetchNewData() {
    try {
        for await (const url of urls) {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}

fetchNewData();

*/

const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

async function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

function addPostToDOM(response) {
  const postContainer = document.createElement("article");
  postContainer.id = response.id;
  postContainer.classList.add("post-item");

  const idRow = document.createElement("h4");
  idRow.textContent = response.id;

  const title = document.createElement("h2");
  title.textContent = response.title;

  const body = document.createElement("p");
  body.textContent = response.body;

  const button = document.createElement("button");
  button.textContent = "DELETE Content";

  postContainer.append(idRow);
  postContainer.append(title);
  postContainer.append(body);
  postContainer.append(button);

  listElement.append(postContainer);
}

async function fecthPosts() {
  const responseData = await sendHTTPRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(responseData);
  const listOfPosts = responseData;

  for (const post of listOfPosts) {
    addPostToDOM(post);
  }
}

fetchButton.addEventListener("click", fecthPosts);

async function createPost (title, content) {
  // const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: 1,
  };

  return await sendHTTPRequest("POST",
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleNew = event.currentTarget.querySelector("#title").value;
  const content = event.currentTarget.querySelector("#content").value;

  createPost(titleNew, content).then((response) => {
    addPostToDOM(response);    
  });

});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("article").id;
    console.log("Deleting post with ID:", postId);
    sendHTTPRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    event.target.closest("article").remove();
  }
});
