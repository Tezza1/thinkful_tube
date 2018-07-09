function test(){

    const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
    const API_KEY = "AIzaSyDEwfk3b9G0Oap6N7GHBeDHPzhnXxxr5hM";
    let searchTerm = "surfboards";
    
const settings = {
        url: YOUTUBE_SEARCH_URL,
        data: {
            part: 'snippet',
            key: API_KEY,
            q: `${searchTerm} in:name`,
            per_page: 5
        },
        dataType: 'json',
        type: 'GET',
        success: function () {
            // console.log(search_results);
            displayResults(search_results);
	    },
        error: function() {
            console.log("An error occurred");
        }
    };

    let search_results = $.ajax(settings);
}

function displayResults (search_results) {
    console.log(search_results);
    let result_arr = search_results.responseJSON.items;
    result_arr.map( result => {
        $('.search-results').append(`
            <h2>${result.snippet.title}</h2>
            <p>${result.snippet.description}</p>
            <p>Channel: ${result.snippet.channelTitle}</p>
            <p>Published: ${result.snippet.publishedAt}</p>
            <img src=${result.snippet.thumbnails.medium.url} alt="Image of ${result.snippet.title}" />
        `)
    });
}

$(test)


