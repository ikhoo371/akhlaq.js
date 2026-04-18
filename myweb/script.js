const memeTitle = document.getElementById('meme-title');
const memeImg = document.getElementById('meme-img');
const memeBtn = document.getElementById('get-meme');

// Function jo API se data layega
async function generateMeme() {
    memeTitle.innerText = "Soch raha hoon... 🤔";
    
    try {
        // API Request bhej rahe hain
        const response = await fetch('https://meme-api.com/gimme');
        const data = await response.json(); // Data ko JSON mein convert kiya
        
        // UI Update kar rahe hain
        memeTitle.innerText = data.title;
        memeImg.src = data.url;
    } catch (error) {
        memeTitle.innerText = "Error: Internet check karo!";
    }
}

// Button click par function chalana
memeBtn.addEventListener('click', generateMeme);

// Page load hote hi pehla meme dikhao
generateMeme();