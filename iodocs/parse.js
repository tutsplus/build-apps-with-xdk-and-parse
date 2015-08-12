(function (credentials) {
    var exports = {};
    var baseUrl = 'https://api.parse.com/1/classes/article/';
    
    exports.articles = function (params) {
    params = params || {};
    var artID = '';
    if (params.ID) {
        artID = params.ID;
    }
    var url = baseUrl + artID;
    return $.ajax({
        url: url,
        headers: {
        'X-Parse-Application-Id' : credentials.apiKey,
        'X-Parse-REST-API-Key' : credentials.apiSecret
        }
    });
    };
    
  
    return exports;
})
    
    
    
    
    
    
  
  