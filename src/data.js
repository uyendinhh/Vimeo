let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo("e6435fcacab2bed5ff74ab5f155a0076504c5b76", "r/cf9flWotEeyaMYpEEKCrTgwxN+sMKsXuUvRQk0zCKqA06gDK3wst/sFhXZYAtvaObGCmq2X5/zAG104Gex1TdVGPm7EmhKJk+aOqgUMDHTcvabvm9PBZmsC/DCPi68", "e959860c90c70fe3c43fd7eef5afaadc");

const getData = (callback) => {
  client.request({
      method: 'GET',
      path: '/videos/235664764'
    }, function (error, body, status_code, headers) {
      if (error) {
        console.log(error);
      }
      console.log(body);
      return callback(body);
  })
}


module.exports = getData;



