// 1. Elements ko pakarna
const btn = document.getElementById("searchBtn");
const input = document.getElementById("username");
const resultDiv = document.getElementById("result");

// 2. Button click hone par kya ho?
btn.addEventListener("click", async () => {
    const user = input.value; // Jo naam likha wo uthaya
    
    // GitHub se data mangwana
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();

    // 3. Screen par dikhana
    resultDiv.innerHTML = `
        <img src="${data.avatar_url}" width="100">
        <h2 style="color:bisque">${data.name}</h2>
        <p>Followers: ${data.followers}</p>
    `;
});