
const eve = async () => {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
  )
  if(response.ok){
    response.data = await response.json();
  }
	// console.log(response); // ? Response {data: Array(10), type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, …}
  return response;
}
console.log(await eve());
// ? Response {data: Array(10), type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, …}