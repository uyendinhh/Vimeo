let Vimeo = require('vimeo').Vimeo;
let config = require('./config.json')
let client = new Vimeo("e6435fcacab2bed5ff74ab5f155a0076504c5b76", "", "");

const makeRequest = (lib, callback) => {
  lib.request({
    method: 'GET',
    path: '/ondemand/genres/animation/pages',
    query: {
      page: 2,
      per_page: 20,
    }
  }, function (error, res, status_code, headers) {
    if (error) {
      console.log(error);
    } else {
      return callback(res.data);
    }
  })
}

const getData = (callback) => {
  var lib = new Vimeo(config.client_id, config.client_secret);
  if (config.access_token) {
    lib.setAccessToken(config.access_token)
    makeRequest(lib, callback)
  } else {
    lib.generateClientCredentials('public', function (err, response) {
      if (err) {
        throw err
      }
  
      // Assign the access token to the library
      lib.setAccessToken(response.access_token)
      makeRequest(lib, callback)
    })
  }
}


module.exports = getData;



