export async function fetchPostsData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts data");
  }
  return response.json();
}

export async function fetchCommentsData(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch comments data");
  }
  return response.json();
}

export async function addPost(title, body, userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
      userId: userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch comments data");
  }
  return response.json();
}
