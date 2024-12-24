
async function getJoke() {
    const url = 'https://official-joke-api.appspot.com/random_joke';
    
    try {
      const response = await fetch(url);
      const jokeData = await response.json();
      
      const jokeHtml = `
        <h3>Joke:</h3>
        <p><strong>${jokeData.setup}</strong></p>
        <p>${jokeData.punchline}</p>
      `;
      
      document.getElementById('content').innerHTML = jokeHtml;
    } catch (error) {
      document.getElementById('content').innerHTML = `<p>Sorry, there was an error fetching the joke.</p>`;
    }
  }
  
  
  async function getFact() {
    const url = 'https://uselessfacts.jsph.pl/random.json?language=en';
    
    try {
      const response = await fetch(url);
      const factData = await response.json();
      
      const factHtml = `
        <h3>Random Fact:</h3>
        <p>${factData.text}</p>
      `;
      
      document.getElementById('content').innerHTML = factHtml;
    } catch (error) {
      document.getElementById('content').innerHTML = `<p>Sorry, there was an error fetching the fact.</p>`;
    }
  }
  
 
  async function getNewFace() {
    const url = 'https://randomuser.me/api/';
    
    try {
      const response = await fetch(url);
      const faceData = await response.json();
      
      const faceHtml = `
        <h3>New Face:</h3>
        <img src="${faceData.results[0].picture.large}" alt="Random Face" />
      `;
      
      document.getElementById('face').innerHTML = faceHtml;
    } catch (error) {
      document.getElementById('face').innerHTML = `<p>Sorry, there was an error fetching the face.</p>`;
    }
  }
  