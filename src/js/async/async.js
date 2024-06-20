const uri= '/src/js/async/data.json'

async function dataTitle() {
  const response = await fetch(uri);
  const curso = await response.json();

 for (let index = 0; index < curso.results.length; index++) {
     console.log(curso.results[index].title);
  }

   console.log(curso.results);
  

}
 
dataTitle();

