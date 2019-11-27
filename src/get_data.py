import vimeo

client = vimeo.VimeoClient(
  token='e959860c90c70fe3c43fd7eef5afaadc',
  key='e6435fcacab2bed5ff74ab5f155a0076504c5b76',
  secret='r/cf9flWotEeyaMYpEEKCrTgwxN+sMKsXuUvRQk0zCKqA06gDK3wst/sFhXZYAtvaObGCmq2X5/zAG104Gex1TdVGPm7EmhKJk+aOqgUMDHTcvabvm9PBZmsC/DCPi68'
)

response = client.get('/videos/235664764')
print response.json()
