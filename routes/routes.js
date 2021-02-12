/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
router = express.Router();
//Include Controller
var sampleRoutes = require('../controllers/mainCtrl');

// ************************* Interior Dashboard start**********************************

//about start
router.post('/postaboutData', sampleRoutes.postaboutDataCtrl);
router.get('/getaboutData', sampleRoutes.getaboutDataCtrl);
//about end

//contact start
router.post('/postcontactData', sampleRoutes.postcontactDataCtrl);
router.get('/getcontactData', sampleRoutes.getcontactDataCtrl);
//contact end

//registration start
router.post('/postRegData', sampleRoutes.postRegDataCtrl);
router.get('/getRegData', sampleRoutes.getRegDataCtrl);
router.get('/deletevendata/:id', sampleRoutes.deletevendataCtrl);
router.post('/getEdData', sampleRoutes.getEdDataCtrl);
//phno check start
router.get('/checkphData/:phcheck', sampleRoutes.checkphDataCtrl);
//phno check end
//itmes end
//registraion end


//itmes start
router.post('/postItemData', sampleRoutes.postItemDataCtrl);
router.get('/getItemData', sampleRoutes.getItemDataCtrl);
router.get('/deleteitdata/:id', sampleRoutes.deleteitdataCtrl);
router.post('/getitmData', sampleRoutes.getitmDataCtrl);
//item check start
router.get('/checkItemData/:itemname', sampleRoutes.checkItemDataCtrl);
//item check end
//itmes end

//purches start
router.post('/postPurchesData', sampleRoutes.postPurchesDataCtrl);
router.get('/getPurchesData', sampleRoutes.getPurchesDataCtrl);
router.get('/gethsncodeData/:itemid', sampleRoutes.gethsncodeDataCtrl);
router.get('/deletepdata/:id', sampleRoutes.deletepdataCtrl);
router.post('/updateData', sampleRoutes.updateDataCtrl);
//purches end


//customer start
router.post('/postcustData', sampleRoutes.postcustDataCtrl);
router.get('/getcustData', sampleRoutes.getcustDataCtrl);
router.get('/deletecdata/:id', sampleRoutes.deletecdataCtrl);
router.post('/updatecustData', sampleRoutes.updatecustDataCtrl);
//phno check start
router.get('/checknumData/:numcheck', sampleRoutes.checknumDataCtrl);
//phno check end
//customer end

//purches start
router.post('/postSalesData', sampleRoutes.postSalesDataCtrl);
router.get('/getSalesData', sampleRoutes.getSalesDataCtrl);

router.get('/getcustphnoData/:cphn', sampleRoutes.getcustphnoDataCtrl);
//purches end
// ************************* Interior Dashboard end**********************************

//login start
router.get('/getlogData', sampleRoutes.getlogDataCtrl);
//login end
module.exports = router;

