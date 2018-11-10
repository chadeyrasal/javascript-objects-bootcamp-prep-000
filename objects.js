var playlist = {
  queen: 'the show must go on',
  alpha: 'sweet fanta diallo'
}

var artistName
var songTitle

function updatePlaylist(playlist, artistName, songTitle) {
  artistName = 'samCook'
  songTitle = 'wonderful world'
  playlist[artistName] = songTitle
  return playlist
}
