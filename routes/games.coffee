game = {
  "event": "70th ch-ITA",
  "site": "Siena ITA",
  "round": "10",
  "date": "2010.12.3",
  "white": "Caruana, Fabiano",
  "black": "Godena, Michele",
  "result": "1-0",
  "moves": ["d4", "d5", "c4", "dxc4", "e4", "e5", "Nf3", "Bb4", "Nc3", "exd4", "Nxd4", "Ne7", "Bf4", "Bxc3", "bxc3", "Ng6", "Bg3", "Qe7", "Bxc4", "Qxe4", "Qe2", "Qxe2", "Bxe2", "Na6", "Rb1", "O-O", "O-O", "Re8", "Rfe1", "Nc5", "Bxc7", "Bd7", "Bf3", "Rxe1", "Rxe1", "Rc8", "Bg3", "b6", "h4", "Ne6", "h5", "Ne7", "Be5", "Nc6", "Nxc6", "Bxc6", "Bg4", "Re8", "Bg3", "g6", "h6", "f5", "Bd1", "f4", "Bh4", "Kf8", "Re5", "g5", "Bh5", "Rc8", "Bxg5", "Nxg5", "Rxg5", "Bd7", "Rg7", "Rc5", "Bf3", "Bf5", "Rxa7", "Rxc3", "Bd5", "Bg6", "Ra4", "Rc1", "Kh2", "Rc5", "Rxf4", "Ke7", "Bf3", "Ra5", "Rb4", "b5", "Bd5", "Kf6", "f4", "Bf5", "Bc6", "Bd3", "Rd4", "Ra3", "Bd5", "Bb1", "Rd1", "Bd3", "Bb3", "Bc4", "Bc2", "Ke7", "Bf5", "Rxa2", "Rd7", "Kf8", "Rxh7", "Bd5", "Rd7"]
};

exports.test = (req, res) ->
  res.render('index', { 
    title: 'game view', 
    game: game
  })