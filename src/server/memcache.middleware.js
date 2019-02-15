module.exports = function memcacheMiddleware() {
  const memcache = new Map();

  return (req, res, next) => {
    const key = '__memcachekey__' + req.originalUrl || req.url;
    const cachedContent = memcache.get(key);

    if (cachedContent) {
      res.send(cachedContent);
      return;
    }

    const _send = res.send.bind(res);

    res.send = (body) => {
      memcache.set(key, body);
      _send(body);
    };

    next();
  };
}

