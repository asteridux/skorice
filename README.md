# SkoriceJS

The spice you sprinkle on top of your ChaiJS assertion library and your MochaJS test runner.

Skorice is an object structure assertion library. The same way you can assert values like true/false or 1/2/3/4 or whatever else, you can now assert that an object has the structure you expect.

## Installation

```
npm install skorice --save-dev
```

and import/require it in your test file to use:

```
import skorice from 'skorice';
```

## Basic Usage

Let's say you have an API that you're testing. For integration (or "end to end") testing of APIs, you can hit up the API with the likes of `supertest` (a wrapper for `superagent`) and test the response.

### assertLike

The test asserts that the body is `like` the template, meaning that the body has AT LEAST the keys that template has.

```
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


### assertExact

You can also check for exact structure:

```
skorice.assertExact(template, body);
```

It'll make sure that whatever you pass in as a template, the body will have no matter how deep either structure is.

### assertEqual

A basic "equal" assertion that lodash and Chai provide.

### assertDeepEqual

An "equal" assertion that checks both objects for not only structure but also values.

### templating functions

A factory where a template will yield a new function that automatically checks assertions like so:

```
var likeTweet = skorice.templateLike({ id: '', body: '', user: '' });

likeTweet(body);
```

## Advanced Usage

There are a few 