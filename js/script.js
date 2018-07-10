$('#button-getVideos').click(function(e) {
    e.preventDefault();
    let searchString = $('#input-searchTerms').val();
    if(!searchString) {
        $('fieldset').append('<span class="warning-message"><i class="fas fa-exclamation-triangle"></i> Input a search term</span>');
    }
    else {
        findYouTubeVideos(searchString);    
    }
});


function findYouTubeVideos(searchString) {

    const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
    const API_KEY = "AIzaSyDEwfk3b9G0Oap6N7GHBeDHPzhnXxxr5hM";
    let searchTerm = searchString;

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
        success: function() {
            displayResults(search_results);
        },
        error: function() {
            console.log("An error occurred");
        }
    };

    let search_results = $.ajax(settings);
}

function displayResults(search_results) {
    console.log(search_results);
    let result_arr = search_results.responseJSON.items;
    let resultString = "";
    result_arr.map(result => {
        resultString += `
            <h2>${result.snippet.title}</h2>
            <p>${result.snippet.description}</p>
            <p>Channel: ${result.snippet.channelTitle}</p>
            <p>Published: ${result.snippet.publishedAt}</p>
            <iframe src="https://www.youtube.com/embed/${result.id.videoId}" allow="autoplay; encrypted-media" width="350" height="200" frameborder="0" allowFullScreen></iframe>`
    });
    $('.search-results').html(resultString);
}

// start page with 'safe default search term to populate it'
$(findYouTubeVideos('surfboards'))
