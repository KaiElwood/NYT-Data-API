$("input").on("click", function(){
    app.initialize();
});

var app = {
    nyTimesArticles: [],
    flickrData: [],

    initialize: function () {
        app.getNYTimesData();
    },

    makeHTML: function () {
        var theHTML = '';
        var left = 0;
        var top = 0;
        for (var i = 0; i < app.nyTimesArticles.length; i++) {
            left += 40;
            top += 60;
            debugger;
            if (app.nyTimesArticles[i].media[0]){
                theHTML += "<div class='flickrArticle'>";
                theHTML += "<img src=" + app.nyTimesArticles[i].media[0]["media-metadata"][1].url + " alt=" + app.nyTimesArticles[i] + "></img>";
                theHTML += "</div>";
            } else {
                continue;
            }
        }
        $('#container').html(theHTML);
    },

    getNYTimesData: function () {
        console.log("Get NY Times Data");
        // var currentSearchWord = 'apple';
        var nyTimesURL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=';
        var myNYKey = 'pipN31IoJYtV9feS2vsXzzQ5YeGJn0X0';
        var nyTimesReqURL = nyTimesURL + myNYKey;
        console.log(nyTimesReqURL);
        $.ajax({
            url: nyTimesReqURL,
            type: 'GET',
            dataType: 'json',
            error: function (err) {
                console.log("Uh oh...");
                console.log(err);
            },
            success: function (data) {
                //console.log(data);
                debugger;
                app.nyTimesArticles = data.results;
                console.log(app.nyTimesArticles);
                app.makeHTML();
            }
        });
    }



};