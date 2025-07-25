/* FILE: app.js */

document.addEventListener('DOMContentLoaded', () => {
  const contentArea = document.getElementById('content');

  // Fetch the Markdown file
  fetch('docs.md')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then((markdownText) => {
      // Use the 'marked' library to convert Markdown to HTML
      const htmlContent = marked.parse(markdownText);

      // Set the innerHTML of our content area with the result
      contentArea.innerHTML = htmlContent;
    })
    .catch((error) => {
      console.error('Error fetching or parsing Markdown:', error);
      contentArea.innerHTML = '<h1>Error: Could not load documentation.</h1>';
    });
});
