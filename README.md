# U.S. Colleges

2289 U.S. colleges

## Usage

```js
import { US_COLLEGES } from '@ztopia/us-colleges';

console.log(US_COLLEGES);
// [
//   ...,
// {
//   latitude: 47.656213,
//   longitude: -122.313115,
//   english_name: 'University of Washington-Seattle Campus',
//   chinese_name: '华盛顿西雅图大学校园',
//   zip_code: '98195-4550',
//   state_name: 'Washington',
//   state_abbreviation: 'WA',
//   city: 'Seattle',
// },
//   ...
// ]
```

## Search

A lot of times, you probably don't want to return clients with all colleges,
but only a subset based on queries. Filtering the entire list is slow,
taking O(n) time, especially when you want to implement search-as-you-type feature.
As a result, we recommend using Trie, a data structure designed for rapid reTRIEval of objects.
It can get very complex to implement, but fortunately, there is an awesome library
that does it for us: https://github.com/joshjung/trie-search

```js
import TrieSearch from 'trie-search';

import { US_COLLEGES } from '@ztopia/us-colleges';

const ts = new TrieSearch(['english_name']);
ts.addAll(US_COLLEGES);
```
