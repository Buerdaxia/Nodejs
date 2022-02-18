function formatError(err) {
	return { code: err.status, message: err.message, result: err.stack };
}
function postFormatError(err, obj) {
	/*
    result:将obj的result单独结构出来
    ...rest:将其余的参数放到rest中
  */
	const { result, ...rest } = obj;
	// 根据环境返回不同的错误信息
	return process.env.NODE_ENV == 'production' ? rest : obj;
}
module.exports = {
	formatError,
	postFormatError
};
