const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.get('/:productId/variants', inventoryController.readStock);
router.put('/:productId/variants/:variantId', inventoryController.adjustStock);

module.exports = router;
