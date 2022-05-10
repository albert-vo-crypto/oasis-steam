const express = require('express');
const router = express.Router();
const Advertisement = require('../models/adModel');

router.route('/bidAdvertisement').post((req, res) => {
  const advertisementId = req.body.advertisementId;
  const date = req.body.date;
  const advertisementTitle = req.body.advertisementTitle;

  const advertisementDescription = req.body.advertisementDescription;
  const advertisementUrl = req.body.advertisementUrl;
  const advertisementStatus = req.body.advertisementStatus;

  const newAdvertisement = new Advertisement({
    advertisementId,
    date,
    advertisementTitle,
    advertisementDescription,
    advertisementUrl,
    advertisementStatus,
  });

  console.log(newAdvertisement);

  newAdvertisement.save();
});

router.route('/updateAdvertisement').post((req, res) => {
  const filter = { _id: req.body.id };

  const update = { advertisementStatus: req.body.newStatus };

  Advertisement.findOneAndUpdate(filter, update, (error, data) => {
    if (error) {
      console.log(error);
    } else console.log(data);
  });
});

router.route('/getAdvertisements').get((req, res) => {
  Advertisement.find().then((foundAds) => res.json(foundAds));
});

module.exports = router;
