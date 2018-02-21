
let playlist = {Katy: "Friday Night"};

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[artist]: song})
}

