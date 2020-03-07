const fetch = require('node-fetch');
function deleteRepo(token, repoName) {
  fetch(`https://api.github.com/repos/${repoName}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `token ${token}`
    }
  })
  .then(response => {
    if (response && response.status === 204) {
      console.log(`Your repo ${repoName} has been deleted. Check it out in your GitHub page.`);
    } else {
      console.log(`Error ${response.status}: something went wrong`);
    }
  })
  .catch(error => console.error(error))
}


const myrepos = ``; //copy and paste the repository list from Settings -> Repositories

// Example regex
// const myRegex = /claudiabdm\/week\d\Sday\d[-claudiabdm]*/g; 

const myRegex ; // write your regex here

const toBeDeleted = myrepos.match(myRegex);

const myTokenDel = ''; // paste your token from Settings -> Developer settings -> Personal access tokens

toBeDeleted.forEach((repo) => deleteRepo(myTokenDel, repo));