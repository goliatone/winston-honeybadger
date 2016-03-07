# winston-honeybadger

[Honeybadger][hon] transport for [Winston][wjs]. It only logs `error` level.


## Getting Started
Install the module with: 
```
npm install winston-honeybadger
```

To register the transport:

```javascript
var winston = require('winston');
require('wisnton-honeybadger');


var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Honeybadger)({ apiKey: 'YOUR_HONEYBADGER_API_KEY'})
  ]
});
```

```js
winston.error('TEST ERROR!', errorMetadata, callback);
```

## Documentation

This transport uses the [honeybadger][npm-hon] package to send data to the mother ship. This is straight from that package's documentation.

```javascript
// The second argument is error tracking metadata, like user/session id 
hb.send(err, {
  context: {
    user: 'jane',
    email: 'a@b.net'
  },
  session: {},
  headers: req.headers,
  params: {},
  cgi_data: {
    'server-software': 'Node ' + process.version
  }
});
```

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 goliatone  
Licensed under the MIT license.

[hon]: http://honeybadger.io
[npm-hon]: https://www.npmjs.com/package/honeybadger
[wjs]: http://github.com/winstonjs/winston

