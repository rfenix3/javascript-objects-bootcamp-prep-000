
let playlist = {Katy: "Friday Night"};


function removeFromPlaylist(playlist, artist){
  delete playlist[artist];
  return playlist;
}