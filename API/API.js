const search = document.querySelector("#search");
      const form = document.querySelector("form");
      const viewMovie = document.querySelector("#viewMovie");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const searchV = search.value;
        console.log(searchV);

        fetch(`
        https://api.themoviedb.org/3/search/movie?api_key=cccc5fab9d418d1e5a4edd04ea82d495&page=1&query=${searchV}
        `)
          .then((res) => res.json())
          .then((res) => {
            
            res.results.forEach(results => {
                
                const img = document.createElement('img');
                const path = results.poster_path;
                img.src = `https://image.tmdb.org/t/p/w500/${path}`;
                viewMovie.appendChild(img); 

                const overView = document.createElement('p');
                const title = results.overview;
                viewMovie.appendChild(overView);
                
                

                

                
            });
            console.log(res.results);
          })
          .catch(console.log);
      });
    