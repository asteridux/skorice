# SkoriceJS

The spice you sprinkle on top of your ChaiJS assertion library and your MochaJS test runner.

Skorice is an object structure assertion library. The same way you can assert values like true/false or 1/2/3/4 or whatever else, you can now assert that an object has the structure you expect.

## Installation

```bash
npm install skorice --save-dev
```

and import/require it in your test file to use:

```js
import skorice from 'skorice';
```

## Basic Usage

Let's say you have an API that you're testing. For integration (or "end to end") testing of APIs, you can hit up the API with the likes of `supertest` (a wrapper for `superagent`) and test the response.

### assertLike

The test asserts that the body is `like` the template, meaning that the body has AT LEAST the keys that template has.

```js
agent
  .get('/api/tweets')
  .expect(200)
  .expect((res) => {
    var body = res.body;

    var template = {
      id: '',
      name: '',
      body: ''
    };

    skorice.assertLike(template, body);
  })
```

### assertLikeTypes

Identical to `assertLike`, `assertLikeTypes` allows specifying what type of variable a key should hold in the template like so:

```js
var template = {
  name: 'string'
};

var testObj = {
  name: 'Antonin Januska',
  age: 26
};

assertLikeTypes(template, testObj);
```

### assertExact

You can also check for exact structure:

```js
skorice.assertExact(template, body);
```

It'll make sure that whatever you pass in as a template, the body will have no matter how deep either structure is.

### templating functions

A factory where a template will yield a new function that automatically checks assertions like so:

```js
var likeTweet = skorice.templateLike({ id: '', body: '', user: '' });

likeTweet(body);
```
