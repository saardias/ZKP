const mainServices = require('../services/main');

exports.start = (req, res, next) => {
    const data = mainServices.start(req.body);
    if(data.status === 200){
      res.status(200).json(data);
    } else {
      res.status(400).json({
        error: 'error'
    });
    }
};

exports.nextRound = (req, res, next) => {
  const data = mainServices.nextRound(req.body);
  //console.log(data)
  if(data.status === 200){
    res.status(200).json(data);
  } else {
    res.status(400).json({
      error: 'error : invlid solution'
  });
  }
};
  