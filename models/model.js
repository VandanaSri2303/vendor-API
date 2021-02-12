
var sqldb = require('../config/dbconnect');
var dbutil = require(appRoot + '/utils/dbutils');
var moment = require('moment');

// ************************* Rotaryclub Dashboard start**********************************
//about data start
exports.postaboutDataMdl = function (data, callback) {
    var cntxtDtls = "in postaboutDataMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `insert into about (title,descp,i_ts)
    values('${data.title}','${data.descp}','${date}') `;
    console.log(QRY_TO_EXEC);
    if (callback && typeof callback == "function") {
      dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
        callback(err, results);
        return;
      });
    }
    else
      return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
  }; 
  exports.getaboutDataMdl = function (callback) {
    var cntxtDtls = "in getaboutDataMdl";
    var QRY_TO_EXEC = `select * from about order by id desc;`;   
      console.log(QRY_TO_EXEC);
    if (callback && typeof callback == "function") {
      dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
        callback(err, results);
        return;
      });
    }
    else
      return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
  };  
  //about data end

  //contact start
  exports.postcontactDataMdl = function (data, callback) {
    var cntxtDtls = "in postcontactDataMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `insert into contact (name,mail,sub,phn,msg,i_ts)
    values('${data.name}','${data.mail}','${data.sub}','${data.phn}','${data.msg}','${date}') `;
    console.log(QRY_TO_EXEC);
    if (callback && typeof callback == "function") {
      dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
        callback(err, results);
        return;
      });
    }
    else
      return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
  }; 
  exports.getcontactDataMdl = function (callback) {
    var cntxtDtls = "in getcontactDataMdl";
    var QRY_TO_EXEC = `select * from contact order by id desc;`;   
      console.log(QRY_TO_EXEC);
    if (callback && typeof callback == "function") {
      dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
        callback(err, results);
        return;
      });
    }
    else
      return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
  }; 
  //contact end

  //registraion data start
exports.postRegDataMdl = function (data, callback) {
  console.log('model')
  console.log(data)
  var cntxtDtls = "in postRegDataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into registration (v_name,v_phno,v_mail,v_add,i_ts)
  values('${data.v_name}','${data.v_phno}','${data.v_mail}','${data.v_add}','${date}') `;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.getRegDataMdl = function (callback) {
  var cntxtDtls = "in getRegDataMdl";
  var QRY_TO_EXEC = `select * from registration where d_in='0' order by id desc;`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};  
exports.deletevendataMdl = function (id,callback) {
  console.log('model');
  console.log(id);
  var cntxtDtls = "in deletevendataMdl";
  var QRY_TO_EXEC = `update registration set d_in='1' where id ='${id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.getEdDataMdl = function (id,callback) {
  console.log('model')
  console.log(id)
  var cntxtDtls = "in getEdDataMdl";
  var QRY_TO_EXEC = `update registration set v_name='${id.v_name}',v_phno='${id.v_phno}',
  v_mail='${id.v_mail}',v_add='${id.v_add}' where id ='${id.id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.checkphDataMdl = function (phcheck,callback) {
  var cntxtDtls = "in checkphDataMdl";
  var QRY_TO_EXEC = `select count(id) as i from registration where v_phno='${phcheck}' ;`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
//registraion data end

//items data start
exports.postItemDataMdl = function (data, callback) {
  var cntxtDtls = "in postItemDataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into items (item,code,quantity,i_ts)
  values('${data.item}','${data.code}','0','${date}') `;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.getItemDataMdl = function (callback) {
  var cntxtDtls = "in getItemDataMdl";
  var QRY_TO_EXEC = `select * from items where d_in='0' order by id desc;`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};  

exports.checkItemDataMdl = function (itemname,callback) {
  var cntxtDtls = "in checkItemDataMdl";
  var QRY_TO_EXEC = `select count(id) as i from items where item='${itemname}' ;`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 

exports.deleteitdataMdl = function (id,callback) {
  var cntxtDtls = "in deleteitdataMdl";
  var QRY_TO_EXEC = `update items set d_in='1' where id ='${id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.getitmDataMdl = function (id,callback) {
  var cntxtDtls = "in getitmDataMdl";
  var QRY_TO_EXEC = `update items set item='${id.item}',code='${id.code}' where id ='${id.id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
//items data end

//purches data start
exports.postPurchesDataMdl = function (data, callback) {
  console.log('model')
  console.log(data)
  var cntxtDtls = "in postPurchesDataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into purches (name,items,rate,quan,i_ts)
  values('${data.vname}','${data.iname}','${data.rate}','${data.quan}','${date}') `;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.getPurchesDataMdl = function (callback) {
  var cntxtDtls = "in getPurchesDataMdl";
  var QRY_TO_EXEC = `select p.*,i.item,r.v_name from purches as p join items as i on i.id = p.items join registration as r on r.id = p.name where p.d_in='0' order by id desc `;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};  
exports.gethsncodeDataMdl = function (itemid,callback) {
  var cntxtDtls = "in gethsncodeDataMdl";
  var QRY_TO_EXEC = `select code from items where id = '${itemid}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.deletepdataMdl = function (id,callback) {
  var cntxtDtls = "in deletepdataMdl";
  var QRY_TO_EXEC = `update purches set d_in='1' where id ='${id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.updateDataMdl = function (id,callback) {
  var cntxtDtls = "in updateDataMdl";
  var QRY_TO_EXEC = `update purches set rate='${id.rate}',quan='${id.quan}' where id ='${id.id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
//purches data end

//customer data start
exports.postcustDataMdl = function (data, callback) {
  var cntxtDtls = "in postcustDataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into customer (c_name,c_phno,c_add,i_ts)
  values('${data.c_name}','${data.c_phno}','${data.c_add}','${date}') `;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.getcustDataMdl = function (callback) {
  var cntxtDtls = "in getcustDataMdl";
  var QRY_TO_EXEC = `select * from customer where d_in='0' order by id desc;`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};  
exports.deletecdataMdl = function (id,callback) {
  var cntxtDtls = "in deletecdataMdl";
  var QRY_TO_EXEC = `update customer set d_in='1' where id ='${id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.updatecustDataMdl = function (id,callback) {
  var cntxtDtls = "in updatecustDataMdl";
  var QRY_TO_EXEC = `update customer set c_name='${id.c_name}',c_phno='${id.c_phno}',
  c_add='${id.c_add}' where id ='${id.id}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.checknumDataMdl = function (numcheck,callback) {
  var cntxtDtls = "in checknumDataMdl";
  var QRY_TO_EXEC = `select count(id) as i from customer where c_phno='${numcheck}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//customer data end

//sales data start
exports.postSalesDataMdl = function (data, callback) {
  console.log('model')
  console.log(data)
  var cntxtDtls = "in postSalesDataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into sales (cname,iname,rate,quantity,i_ts)
  values('${data.cname}','${data.iname}','${data.rate}','${data.quantity}','${date}') `;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
exports.getSalesDataMdl = function (callback) {
  var cntxtDtls = "in getSalesDataMdl";
  var QRY_TO_EXEC = `select s.*,i.item,c.c_name from sales as s join items as i on i.id = s.iname join customer as c on c.id = s.cname order by id desc `;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};  

exports.getcustphnoDataMdl = function (cphn,callback) {
  var cntxtDtls = "in getcustphnoDataMdl";
  var QRY_TO_EXEC = `select c_phno from customer where id = '${cphn}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

//sales data end
//quantity plus start
exports.getbalnceQty = function (pd, callback) {
  var cntxtDtls = "in getbalnceQty";
  var QRY_TO_EXEC = `select quantity from items where id='${pd.iname}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.updateitemQty = function (pd,balqty,callback) {
  var cntxtDtls = "in updateitemQty";
  var qty = (pd.quan * 1) + (balqty * 1);
  var QRY_TO_EXEC = `update items set quantity='${qty}' where id ='${pd.iname}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//quantity plus end

//quantity minus start
exports.getbalQty = function (sd, callback) {
  var cntxtDtls = "in getbalQty";
  var QRY_TO_EXEC = `select quantity from items where id='${sd.iname}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.updateblnQty = function (sd,balqty,callback) {
  var cntxtDtls = "in updateblnQty";
  var qty = (balqty * 1) - (sd.quantity * 1);
  var QRY_TO_EXEC = `update items set quantity='${qty}' where id ='${sd.iname}'`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//quantity minus end

exports.getlogDataMdl = function (callback) {
  var cntxtDtls = "in getlogDataMdl";
  var QRY_TO_EXEC = `select * from login;`;   
    console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}; 
// ************************* Rotaryclub Dashboard end**********************************
