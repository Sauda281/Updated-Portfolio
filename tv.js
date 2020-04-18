var axios = require("axios");
var fs = require("fs");


var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    
    axios.get(url).then(response);
    data = response.data;
    if(data["Response"]=== "True"){
        console.log(data);
	  
      imbID.push(data["search"][i]["imbDI"])
      
      var showData=[
          "Show:" + JsonData.genres.join(","),
          "Genre" + data.rating.average,
          "Rating" + data.network.name,
          "Summary" + data.summary,
      ]

      }
    }

  };


module.exports = TV;
