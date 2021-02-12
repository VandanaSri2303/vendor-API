var appmdl = require('../models/model');
// var AWS = require('aws-sdk');
// var awsS3 = 'config/aws.config.json';
var moment = require('moment');

var fs = require('fs');

// ************************* Rotary Dashboard start **********************************
//about data start
exports.postaboutDataCtrl = function (req, res) {
    var std = req.body;   
    appmdl.postaboutDataMdl(std, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.getaboutDataCtrl = function (req, res) {
     
    appmdl.getaboutDataMdl( function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
//about data end

//contact start
exports.postcontactDataCtrl = function (req, res) {
    var td = req.body;   
    appmdl.postcontactDataMdl(td, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.getcontactDataCtrl = function (req, res) {
     
    appmdl.getcontactDataMdl( function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
//contact end

//registraion data start
exports.postRegDataCtrl = function (req, res) {
    var reg = req.body;   
    console.log(reg)
    appmdl.postRegDataMdl(reg, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.getRegDataCtrl = function (req, res) {
     
    appmdl.getRegDataMdl( function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.deletevendataCtrl = function (req, res) {
    var id = req.params.id;
   appmdl.deletevendataMdl(id, function (err, results) {
       if (err) {
           res.send({ 'status': 500, 'data': results });
           return;
       }
       res.send({ 'status': 200, 'data': results });
   });
}
exports.getEdDataCtrl = function (req, res) {
    var id =req.body;
   appmdl.getEdDataMdl(id, function (err, results) {
       if (err) {
           res.send({ 'status': 500, 'data': results });
           return;
       }
       res.send({ 'status': 200, 'data': results });
   });
}
exports.checkphDataCtrl = function (req, res) {
    var phcheck = req.params.phcheck;     
    appmdl.checkphDataMdl(phcheck, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
//registraion data end

//items data start
exports.postItemDataCtrl = function (req, res) {
    var itm = req.body;   
    appmdl.postItemDataMdl(itm, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.getItemDataCtrl = function (req, res) {
     
    appmdl.getItemDataMdl( function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.checkItemDataCtrl = function (req, res) {
    var itemname = req.params.itemname;     
    appmdl.checkItemDataMdl(itemname, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.deleteitdataCtrl = function (req, res) {
    var id = req.params.id;
   appmdl.deleteitdataMdl(id, function (err, results) {
       if (err) {
           res.send({ 'status': 500, 'data': results });
           return;
       }
       res.send({ 'status': 200, 'data': results });
   });
}
exports.getitmDataCtrl = function (req, res) {
    var id =req.body;
   appmdl.getitmDataMdl(id, function (err, results) {
       if (err) {
           res.send({ 'status': 500, 'data': results });
           return;
       }
       res.send({ 'status': 200, 'data': results });
   });
}
//items data end

//purches data start
exports.postPurchesDataCtrl = function (req, res) {
    var pd = req.body;   
    appmdl.postPurchesDataMdl(pd, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        // res.send({ 'status': 200, 'data': results });
        appmdl.getbalnceQty(pd, function (err, balresults) {
            if (err) {
                console.log(err);
                res.send({ 'status': 500, 'data': balresults });
                return;
            }
            var balqty = balresults[0].quantity;
            appmdl.updateitemQty(pd,balqty, function (err, upresults) {
                if (err) {
                    res.send({ 'status': 500, 'data': upresults });
                    return;
                }
                res.send({ 'status': 200, 'data': upresults });
            });
        });
       
    });
}
exports.getPurchesDataCtrl = function (req, res) {
     
    appmdl.getPurchesDataMdl( function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.gethsncodeDataCtrl = function (req, res) {
    var itemid = req.params.itemid;     
    appmdl.gethsncodeDataMdl(itemid, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.deletepdataCtrl = function (req, res) {
    var id = req.params.id;
   appmdl.deletepdataMdl(id, function (err, results) {
       if (err) {
           res.send({ 'status': 500, 'data': results });
           return;
       }
       res.send({ 'status': 200, 'data': results });
   });
}
exports.updateDataCtrl = function (req, res) {
    var id =req.body;
   appmdl.updateDataMdl(id, function (err, results) {
       if (err) {
           res.send({ 'status': 500, 'data': results });
           return;
       }
       res.send({ 'status': 200, 'data': results });
   });
}
//purches data end

//customer data start
exports.postcustDataCtrl = function (req, res) {
    var cn = req.body;   
    appmdl.postcustDataMdl(cn, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.getcustDataCtrl = function (req, res) {
     
    appmdl.getcustDataMdl( function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.deletecdataCtrl = function (req, res) {
    var id = req.params.id;
   appmdl.deletecdataMdl(id, function (err, results) {
       if (err) {
           res.send({ 'status': 500, 'data': results });
           return;
       }
       res.send({ 'status': 200, 'data': results });
   });
}
exports.updatecustDataCtrl = function (req, res) {
    var id =req.body;
   appmdl.updatecustDataMdl(id, function (err, results) {
       if (err) {
           res.send({ 'status': 500, 'data': results });
           return;
       }
       res.send({ 'status': 200, 'data': results });
   });
}
exports.checknumDataCtrl = function (req, res) {
    var numcheck = req.params.numcheck;     
    appmdl.checknumDataMdl(numcheck, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
//customer data end

//sales data start
exports.postSalesDataCtrl = function (req, res) {
    var sd = req.body;   
    appmdl.postSalesDataMdl(sd, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
    appmdl.getbalQty(sd, function (err, balresults) {
        if (err) {
            console.log(err);
            res.send({ 'status': 500, 'data': balresults });
            return;
        }
    var balqty = balresults[0].quantity;
    appmdl.updateblnQty(sd,balqty, function (err, upresults) {
        if (err) {
            res.send({ 'status': 500, 'data': upresults });
            return;
        }
        res.send({ 'status': 200, 'data': upresults });
    });
    });
    });
}
exports.getSalesDataCtrl = function (req, res) {
     
    appmdl.getSalesDataMdl( function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getcustphnoDataCtrl = function (req, res) {
    var cphn = req.params.cphn;     
    console.log(cphn)
    appmdl.getcustphnoDataMdl(cphn, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

//sales end
exports.getlogDataCtrl = function (req, res) {
     
    appmdl.getlogDataMdl( function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

// ************************* Rotary Dashboard end **********************************
