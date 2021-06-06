var encode = function(longUrl) {
  return Buffer.from(longUrl, 'binary').toString('base64');  
};

var decode = function(shortUrl) {
    return Buffer.from(shortUrl,'base64').toString();  
};
