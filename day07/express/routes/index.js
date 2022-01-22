const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	// let filePath = path.join(__dirname, 'views', 'login.html');
	// let content = fs.readFileSync(filePath, 'utf-8');

	res.send('我是express框架吼吼吼');
});

module.exports = router;
