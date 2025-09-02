// Array of article JSON filenames (update this list as needed)
const articleFiles = [
  '../js/article/articles/resumé of Ordinals.json',
  '../js/article/articles/browserexention.json',
  '../js/article/articles/oracle problem.json'
];

async function loadArticles() {
  const articles = [];

  // Fetch each article JSON file
  for (const file of articleFiles) {
    try {
      const response = await fetch(file);
      if (response.ok) {
        const data = await response.json();
        articles.push(data);
      } else {
        console.warn(`Failed to load ${file}: ${response.status}`);
      }
    } catch (err) {
      console.error(`Error fetching ${file}:`, err);
    }
  }

  // Sort articles by release date (newest first)
  const sortedArticles = articles.slice().sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

  // Display articles
  displayArticles(sortedArticles);
}

// Function to display articles
function displayArticles(articles) {
  const container = document.getElementById('articles-container');
  container.innerHTML = '';

  articles.forEach(article => {
    const articleBox = document.createElement('div');
    articleBox.className = 'article-box';

    const imageDiv = document.createElement('div');
    imageDiv.className = 'article-image';
    imageDiv.style.backgroundImage = `url(${article.imageUrl})`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'article-content';

    const titleElem = document.createElement('div');
    titleElem.className = 'article-title';
    titleElem.innerHTML = `<a href="${article.contentUrl}" target="_blank">${article.title}</a>`;

    const previewElem = document.createElement('p');
    previewElem.className = 'article-preview';
    previewElem.textContent = article.preview;

    const dateElem = document.createElement('div');
    dateElem.className = 'article-date';
    dateElem.textContent = new Date(article.releaseDate).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    // Append the date inside the contentDiv
    contentDiv.appendChild(titleElem);
    contentDiv.appendChild(previewElem);
    contentDiv.appendChild(dateElem); // Hier hinzufügen

    // Append contentDiv and imageDiv to articleBox
    articleBox.appendChild(imageDiv);
    articleBox.appendChild(contentDiv);

    container.appendChild(articleBox);
  });
}

window.addEventListener('DOMContentLoaded', loadArticles);