const articles = require('./articles');

module.exports = [
  {
    method: ['get', 'post'],
    path: '/api/tabs/news',
    controller: function (req, res, next) {
        res.json({
            errno: 0,
            msg: 'success',
            data: articles
        });
    }
  },
  {
    method: ['get'],
    path: '/api/articles',
    controller: function (req, res, next) {
        let id = req.query.id;
        id = Number(id);
        if (!id) {
            return res.json({
                errno: 100,
                msg: '无效的Id',
            });
        }
        res.json({
            errno: 0,
            msg: 'success',
            data: articles.filter(item => item.id === id)[0],
        });
    }
  },
]
