# U.S. Colleges

This package exports 2 lists:

- `ALL_US_COLLEGES` exports 2289 U.S. colleges.

- `POPULAR_US_COLLEGES` exports top 100 U.S. colleges based on this [list](https://www.topuniversities.com/where-to-study/north-america/united-states/ranked-top-100-us-universities).

## Usage

```js
import { ALL_US_COLLEGES, POPULAR_US_COLLEGES } from '@ztopia/us-colleges';

console.log(ALL_US_COLLEGES);
// {
//   ...
//   'Stanford University': {
//     latitude: 37.431746,
//     longitude: -122.182212,
//     name: 'Stanford University',
//     translation: '斯坦福大学',
//     zip_code: '94305',
//     state_name: 'California',
//     state_abbreviation: 'CA',
//     city: 'Stanford',
//   },
//   ...
// }
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

import { ALL_US_COLLEGES } from '@ztopia/us-colleges';

const ts = new TrieSearch();
ts.addFromObject(ALL_US_COLLEGES);
```
