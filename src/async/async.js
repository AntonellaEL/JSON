async function fetchData() {
  try {
    const response = await fetch('./src/async/data.json');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

async function printTitles() {
  const results = await fetchData();
  results.forEach(todo => {
    console.log(todo.title);
  });
}

printTitles();
