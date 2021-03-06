
[![npm version](https://badge.fury.io/js/%40kentico%2Fkontent-core.svg)](https://badge.fury.io/js/%40kentico%2Fkontent-core)
[![Build & Test](https://github.com/Kentico/kontent-core-js/actions/workflows/integrate.yml/badge.svg)](https://github.com/Kentico/kontent-core-js/actions/workflows/integrate.yml)
[![CircleCI](https://circleci.com/gh/Kentico/kontent-core-js/tree/master.svg?style=svg)](https://circleci.com/gh/Kentico/kontent-core-js/tree/master)
[![npm](https://img.shields.io/npm/dt/@kentico/kontent-core.svg)](https://www.npmjs.com/package/@kentico/kontent-core)
[![Known Vulnerabilities](https://snyk.io/test/github/Kentico/kontent-core-js/badge.svg)](https://snyk.io/test/github/kentico/kontent-core-js)
[![GitHub license](https://img.shields.io/github/license/Kentico/kontent-core-js.svg)](https://github.com/Kentico/kontent-core-js)
[![](https://data.jsdelivr.com/v1/package/npm/@kentico/kontent-core/badge)](https://www.jsdelivr.com/package/npm/@kentico/kontent-core)


# Core package

This package contains core functionality used by dependant Kentico Kontent sdks such as Delivery or Content Management.

# Testing

If you want to inject testing service as an implementation of [IHttpService](lib/http/ihttp.service.ts), it is possible to use configurable [Test Http Service](lib/http/test-http.service.ts).

```js
import { TestHttpService } from '@kentico/kontent-core';

const client = new /*(Delivery/Management)*/Client() {
    // ...
    httpService: new TestHttpService({
        fakeResponseJson: json,
        throwError: false
    });
}
```



