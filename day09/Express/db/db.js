var mysql = require('mysql');

var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root123456',
	database: 'qianduan_test'
}); // 连接数据库的配置

/*
  sql: sql语句
  callback: 回调函数
*/
function query(sql, callback) {
	pool.getConnection(function (err, connection) {
		connection.query(sql, function (err, rows) {
			callback(err, rows);
			connection.release();
		});
	});
}

exports.query = query;
