import axios from "axios";

export async function getAllPost({token}) {
  const url = `http://localhost:8080/api/v1/posts?pageNo=0&pageSize=10`;

  
  const config = {
    headers: {
      // Authorization: `Bearer ${token}`,
      Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlNzdkNTMwZi0wNTY0LTQ4ZDEtYWZhYi0yZDUzZGQ1MzYyY2QiLCJpZEFjY291bnQiOiI0M2MwNDJhMy1jMTEwLTRlYzQtYWM5OC1mY2Y5ZDFjOWU0ODciLCJpZENoYXRQcm9maWxlIjoiY2IyODFiYTAtNTViNi00YzdhLTlmYzEtOWEwM2I5MGU3N2MxIiwic2NvcGUiOiJST0xFX1VTRVIiLCJpc3MiOiJLTUEtQUNUVk4iLCJleHAiOjE3MTk4MjkyMzQsImlhdCI6MTcxOTgwOTIzNCwianRpIjoiMWMyMjFlOWQtMTU5Yi00MmQ5LThmZWQtZmRlZjlkNTA0OGZjIn0.HpihBvAgQR21hhydJ2_BMTEb6ACDimmuTw3ZoOC-AUqMFkdvNCHJC17zar9SiGgeLrqAQEXhary-kAxvbosK9Q`,

    },
  };

  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching notification:", error);
  }
}

export async function likePost({ idPost }) {
  const url = `http://localhost:8080/api/v1/likes`;

  const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5NmIyM2Y0OS1iMWRjLTQwNzEtYjBjYi1jOTUxYjk4NmY0MzciLCJpZEFjY291bnQiOiIwMDQwNjI0Mi00ODUyLTQ5MDctYTkwNS00YWM2ZTAyYmMwMmYiLCJpZENoYXRQcm9maWxlIjoiOTZhNzE4MmEtNjI4Ni00YWQxLTg4MTYtZDgyYjk3NGQyZTkyIiwic2NvcGUiOiJST0xFX1VTRVIiLCJpc3MiOiJLTUEtQUNUVk4iLCJleHAiOjE3MTk3NDEyNDEsImlhdCI6MTcxOTcyMTI0MSwianRpIjoiNDI5YTNiMzItYmUyNS00YmQyLWIxMGQtMjMxMTc2OTA3MDVjIn0.XquzM_2dAZaSYnbZn3LMeCJSZhesbeba9kdNpnrj6YbFTnCBLY151trgcGNrSMabm-PWQl5bx2_g2v0_9ZqIuA"; // Thay thế 'your_token_here' bằng token thực tế của bạn

  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlNzdkNTMwZi0wNTY0LTQ4ZDEtYWZhYi0yZDUzZGQ1MzYyY2QiLCJpZEFjY291bnQiOiI0M2MwNDJhMy1jMTEwLTRlYzQtYWM5OC1mY2Y5ZDFjOWU0ODciLCJpZENoYXRQcm9maWxlIjoiY2IyODFiYTAtNTViNi00YzdhLTlmYzEtOWEwM2I5MGU3N2MxIiwic2NvcGUiOiJST0xFX1VTRVIiLCJpc3MiOiJLTUEtQUNUVk4iLCJleHAiOjE3MTk4MjkyMzQsImlhdCI6MTcxOTgwOTIzNCwianRpIjoiMWMyMjFlOWQtMTU5Yi00MmQ5LThmZWQtZmRlZjlkNTA0OGZjIn0.HpihBvAgQR21hhydJ2_BMTEb6ACDimmuTw3ZoOC-AUqMFkdvNCHJC17zar9SiGgeLrqAQEXhary-kAxvbosK9Q`,
    },
  };

  const data = {
    idPost: idPost,
  };

  try {
    const response = await axios.post(url, data, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching notification:", error);
  }
}

export async function unlikePost({ idPost }) {
  const url = `http://localhost:8080/api/v1/likes`;

  const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5NmIyM2Y0OS1iMWRjLTQwNzEtYjBjYi1jOTUxYjk4NmY0MzciLCJpZEFjY291bnQiOiIwMDQwNjI0Mi00ODUyLTQ5MDctYTkwNS00YWM2ZTAyYmMwMmYiLCJpZENoYXRQcm9maWxlIjoiOTZhNzE4MmEtNjI4Ni00YWQxLTg4MTYtZDgyYjk3NGQyZTkyIiwic2NvcGUiOiJST0xFX1VTRVIiLCJpc3MiOiJLTUEtQUNUVk4iLCJleHAiOjE3MTk3NDEyNDEsImlhdCI6MTcxOTcyMTI0MSwianRpIjoiNDI5YTNiMzItYmUyNS00YmQyLWIxMGQtMjMxMTc2OTA3MDVjIn0.XquzM_2dAZaSYnbZn3LMeCJSZhesbeba9kdNpnrj6YbFTnCBLY151trgcGNrSMabm-PWQl5bx2_g2v0_9ZqIuA"; // Thay thế 'your_token_here' bằng token thực tế của bạn

  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlNzdkNTMwZi0wNTY0LTQ4ZDEtYWZhYi0yZDUzZGQ1MzYyY2QiLCJpZEFjY291bnQiOiI0M2MwNDJhMy1jMTEwLTRlYzQtYWM5OC1mY2Y5ZDFjOWU0ODciLCJpZENoYXRQcm9maWxlIjoiY2IyODFiYTAtNTViNi00YzdhLTlmYzEtOWEwM2I5MGU3N2MxIiwic2NvcGUiOiJST0xFX1VTRVIiLCJpc3MiOiJLTUEtQUNUVk4iLCJleHAiOjE3MTk4MjkyMzQsImlhdCI6MTcxOTgwOTIzNCwianRpIjoiMWMyMjFlOWQtMTU5Yi00MmQ5LThmZWQtZmRlZjlkNTA0OGZjIn0.HpihBvAgQR21hhydJ2_BMTEb6ACDimmuTw3ZoOC-AUqMFkdvNCHJC17zar9SiGgeLrqAQEXhary-kAxvbosK9Q`,

    },
    data: {
      idPost: idPost,
    },
  };

  try {
    const response = await axios.delete(url, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching notification:", error);
  }
}

export async function countLike({ idPost }) {
  const url = `http://localhost:8080/api/v1/likes/count-like?idPost=${idPost}`;

  const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5NmIyM2Y0OS1iMWRjLTQwNzEtYjBjYi1jOTUxYjk4NmY0MzciLCJpZEFjY291bnQiOiIwMDQwNjI0Mi00ODUyLTQ5MDctYTkwNS00YWM2ZTAyYmMwMmYiLCJpZENoYXRQcm9maWxlIjoiOTZhNzE4MmEtNjI4Ni00YWQxLTg4MTYtZDgyYjk3NGQyZTkyIiwic2NvcGUiOiJST0xFX1VTRVIiLCJpc3MiOiJLTUEtQUNUVk4iLCJleHAiOjE3MTk3NDEyNDEsImlhdCI6MTcxOTcyMTI0MSwianRpIjoiNDI5YTNiMzItYmUyNS00YmQyLWIxMGQtMjMxMTc2OTA3MDVjIn0.XquzM_2dAZaSYnbZn3LMeCJSZhesbeba9kdNpnrj6YbFTnCBLY151trgcGNrSMabm-PWQl5bx2_g2v0_9ZqIuA"; // Thay thế 'your_token_here' bằng token thực tế của bạn

  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlNzdkNTMwZi0wNTY0LTQ4ZDEtYWZhYi0yZDUzZGQ1MzYyY2QiLCJpZEFjY291bnQiOiI0M2MwNDJhMy1jMTEwLTRlYzQtYWM5OC1mY2Y5ZDFjOWU0ODciLCJpZENoYXRQcm9maWxlIjoiY2IyODFiYTAtNTViNi00YzdhLTlmYzEtOWEwM2I5MGU3N2MxIiwic2NvcGUiOiJST0xFX1VTRVIiLCJpc3MiOiJLTUEtQUNUVk4iLCJleHAiOjE3MTk4MjkyMzQsImlhdCI6MTcxOTgwOTIzNCwianRpIjoiMWMyMjFlOWQtMTU5Yi00MmQ5LThmZWQtZmRlZjlkNTA0OGZjIn0.HpihBvAgQR21hhydJ2_BMTEb6ACDimmuTw3ZoOC-AUqMFkdvNCHJC17zar9SiGgeLrqAQEXhary-kAxvbosK9Q`,
    },
  };

  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching notification:", error);
  }
}

export async function getAllComment({ idPost }) {
  const url = `http://localhost:8080/api/v1/comments?idPost=${idPost}&pageNo=0&pageSize=10`;

  const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5NmIyM2Y0OS1iMWRjLTQwNzEtYjBjYi1jOTUxYjk4NmY0MzciLCJpZEFjY291bnQiOiIwMDQwNjI0Mi00ODUyLTQ5MDctYTkwNS00YWM2ZTAyYmMwMmYiLCJpZENoYXRQcm9maWxlIjoiOTZhNzE4MmEtNjI4Ni00YWQxLTg4MTYtZDgyYjk3NGQyZTkyIiwic2NvcGUiOiJST0xFX1VTRVIiLCJpc3MiOiJLTUEtQUNUVk4iLCJleHAiOjE3MTk3NDEyNDEsImlhdCI6MTcxOTcyMTI0MSwianRpIjoiNDI5YTNiMzItYmUyNS00YmQyLWIxMGQtMjMxMTc2OTA3MDVjIn0.XquzM_2dAZaSYnbZn3LMeCJSZhesbeba9kdNpnrj6YbFTnCBLY151trgcGNrSMabm-PWQl5bx2_g2v0_9ZqIuA"; // Thay thế 'your_token_here' bằng token thực tế của bạn

  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlNzdkNTMwZi0wNTY0LTQ4ZDEtYWZhYi0yZDUzZGQ1MzYyY2QiLCJpZEFjY291bnQiOiI0M2MwNDJhMy1jMTEwLTRlYzQtYWM5OC1mY2Y5ZDFjOWU0ODciLCJpZENoYXRQcm9maWxlIjoiY2IyODFiYTAtNTViNi00YzdhLTlmYzEtOWEwM2I5MGU3N2MxIiwic2NvcGUiOiJST0xFX1VTRVIiLCJpc3MiOiJLTUEtQUNUVk4iLCJleHAiOjE3MTk4MjkyMzQsImlhdCI6MTcxOTgwOTIzNCwianRpIjoiMWMyMjFlOWQtMTU5Yi00MmQ5LThmZWQtZmRlZjlkNTA0OGZjIn0.HpihBvAgQR21hhydJ2_BMTEb6ACDimmuTw3ZoOC-AUqMFkdvNCHJC17zar9SiGgeLrqAQEXhary-kAxvbosK9Q`,
    },
  };

  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching notification:", error);
  }
}

export async function createNewComment({ content, idPost }) {
  const url = `http://localhost:8080/api/v1/comments`;

  const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5NmIyM2Y0OS1iMWRjLTQwNzEtYjBjYi1jOTUxYjk4NmY0MzciLCJpZEFjY291bnQiOiIwMDQwNjI0Mi00ODUyLTQ5MDctYTkwNS00YWM2ZTAyYmMwMmYiLCJpZENoYXRQcm9maWxlIjoiOTZhNzE4MmEtNjI4Ni00YWQxLTg4MTYtZDgyYjk3NGQyZTkyIiwic2NvcGUiOiJST0xFX1VTRVIiLCJpc3MiOiJLTUEtQUNUVk4iLCJleHAiOjE3MTk3NDEyNDEsImlhdCI6MTcxOTcyMTI0MSwianRpIjoiNDI5YTNiMzItYmUyNS00YmQyLWIxMGQtMjMxMTc2OTA3MDVjIn0.XquzM_2dAZaSYnbZn3LMeCJSZhesbeba9kdNpnrj6YbFTnCBLY151trgcGNrSMabm-PWQl5bx2_g2v0_9ZqIuA"; // Thay thế 'your_token_here' bằng token thực tế của bạn

  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlNzdkNTMwZi0wNTY0LTQ4ZDEtYWZhYi0yZDUzZGQ1MzYyY2QiLCJpZEFjY291bnQiOiI0M2MwNDJhMy1jMTEwLTRlYzQtYWM5OC1mY2Y5ZDFjOWU0ODciLCJpZENoYXRQcm9maWxlIjoiY2IyODFiYTAtNTViNi00YzdhLTlmYzEtOWEwM2I5MGU3N2MxIiwic2NvcGUiOiJST0xFX1VTRVIiLCJpc3MiOiJLTUEtQUNUVk4iLCJleHAiOjE3MTk4MjkyMzQsImlhdCI6MTcxOTgwOTIzNCwianRpIjoiMWMyMjFlOWQtMTU5Yi00MmQ5LThmZWQtZmRlZjlkNTA0OGZjIn0.HpihBvAgQR21hhydJ2_BMTEb6ACDimmuTw3ZoOC-AUqMFkdvNCHJC17zar9SiGgeLrqAQEXhary-kAxvbosK9Q`,
    },
  };

  const data = {
    idPost: idPost,
    content: content,
  };

  try {
    const response = await axios.post(url, data, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching notification:", error);
  }
}

export async function createNewPost({ caption, selectedImage }) {
  const url = `http://localhost:8080/api/v1/posts`;

  const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5NmIyM2Y0OS1iMWRjLTQwNzEtYjBjYi1jOTUxYjk4NmY0MzciLCJpZEFjY291bnQiOiIwMDQwNjI0Mi00ODUyLTQ5MDctYTkwNS00YWM2ZTAyYmMwMmYiLCJpZENoYXRQcm9maWxlIjoiOTZhNzE4MmEtNjI4Ni00YWQxLTg4MTYtZDgyYjk3NGQyZTkyIiwic2NvcGUiOiJST0xFX1VTRVIiLCJpc3MiOiJLTUEtQUNUVk4iLCJleHAiOjE3MTk3NDEyNDEsImlhdCI6MTcxOTcyMTI0MSwianRpIjoiNDI5YTNiMzItYmUyNS00YmQyLWIxMGQtMjMxMTc2OTA3MDVjIn0.XquzM_2dAZaSYnbZn3LMeCJSZhesbeba9kdNpnrj6YbFTnCBLY151trgcGNrSMabm-PWQl5bx2_g2v0_9ZqIuA"; // Thay thế 'your_token_here' bằng token thực tế của bạn

  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlNzdkNTMwZi0wNTY0LTQ4ZDEtYWZhYi0yZDUzZGQ1MzYyY2QiLCJpZEFjY291bnQiOiI0M2MwNDJhMy1jMTEwLTRlYzQtYWM5OC1mY2Y5ZDFjOWU0ODciLCJpZENoYXRQcm9maWxlIjoiY2IyODFiYTAtNTViNi00YzdhLTlmYzEtOWEwM2I5MGU3N2MxIiwic2NvcGUiOiJST0xFX1VTRVIiLCJpc3MiOiJLTUEtQUNUVk4iLCJleHAiOjE3MTk4MjkyMzQsImlhdCI6MTcxOTgwOTIzNCwianRpIjoiMWMyMjFlOWQtMTU5Yi00MmQ5LThmZWQtZmRlZjlkNTA0OGZjIn0.HpihBvAgQR21hhydJ2_BMTEb6ACDimmuTw3ZoOC-AUqMFkdvNCHJC17zar9SiGgeLrqAQEXhary-kAxvbosK9Q`,
    },
  };

  const data = {
    caption: caption,
    base64: selectedImage,
  };

  try {
    const response = await axios.post(url, data, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching notification:", error);
  }
}
