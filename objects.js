var playlist = {
  Slowdive: 'Alison',
  'My Bloody Valentine': 'Sometimes'
}

var artistName
var songTitle

function updatePlaylist(playlist, artistName, songTitle) {
  artistName = 'samCook'
  songTitle = 'wonderful world'
  playlist[artistName] = songTitle
  return playlist
}
