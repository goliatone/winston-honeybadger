# wiston-honeybadger

[Honeybadger][hon] transport for [Winston][wjs]. It only logs `error` level.


## Getting Started
Install the module with: 
```
npm install wiston-honeybadger
```

To register the transport:

```javascript
var winston = require('winston');
require('wiston-honeybadger');


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
_(Coming soon)_

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
[wjs]: http://github.com/winstonjs/winston
