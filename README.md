# Hashmap

## What's this?

This is my implementation of hashmap. This allows to asociate data by key:value pairs and store data in buckets.
Difference between regular array and hashmap is that hashmap is much faster because defines index using hash function.


## Hash function

I've implemented simple hashfunction in this hashmap. That acumulates ASCI codes for every char of key and finally compute index by divide (modulo) accumulator by capacity of hashmap.


## How to develop.

1. unzip project
2. open terminal inside unziped folder
3. in terminal type `npm install` to create development environment
4. open in your favorite IDE `hashmap.js` from `src` folder
5. modify code as you like
6. when you finish probably you want to make production version of your code. I prepared some helpful scripts for you.
  - `npm run build:clean` - removes all files from `public` directory in another words from place where your production version will occur
  - `npm run build:bundle` - this command transpile ES6+ code to more understandable ES5 version for older browsers and environments and aditionaly creates module for our code for node.js or js frameworks like React.
  - `npm run build:compress` - minifies our production version and removes comments from file.
  - `npm run build` - chains above commands and create fully functional builds for you.

## How to use.

*I've already prepared production versions of hashmap. In public folder you can find two files*
*hashmap.bundle.js - not minified version*
*hashmap.bundle.min.js - minified version*

### DEMO

If you want to run demo of hashmap in node.js environment inside terminal opened in `demo` catalog hit `node node.js` don't forget to familiarize yourself with source code of the node.js file

If you want to see how hashmap works in browser open `index.html` in your browser and see console in devtools. And familiarize yourself with source code inside `index.html` file.

### Node.js

1. Create build using instructions above if folder `public` is empty.
2. Copy `hashmap.bundle.js` or `hashmap.bundle.min.js` from `public` folder your project
3. In your node.js file import module with hashmap. Aware of proper path.
  `const HashMap = require('/path_to_folder_where_you_coppied_hashmap/hashmap.bundle.min');`
4. Create instance of Hashmap and enter capacity of hashmap between parentheses. If you ommit capacity, default value is 100.
  `const hashmap = new HashMap.HashMap(capacity);`
5. Now your instance is ready you are able to use functions of hashmap.
  - `hashmap.add('key', 'value')` - stores record in hashmap
  - `hashmap.get('key')` - displays value of that key if key exist, if not exist throws error with proper message.
  - `hashmap.remove('key')`- remove record from hashmap, or inform you about error if you try remove record that doesn't exist.
  - `hashmap.getAll()` - displays all records in hashmap

### Browsers

1. Create build using instructions above if folder `public` is empty.
2. Copy hashmap.bundle.js or hashmap.bundle.min.js to your project.
3. Inside your html file create `<script src="./path_to_folder_where_you_coppied_hashmap/hashmap.bundle.min.js></script>` tag and as `src` type path to hashmap file.
4. Create instance of Hashmap and enter capacity of hashmap between parentheses. If you ommit capacity, default value is 100.
  `const hashmap = new hashmap.HashMap(capacity);`
5. Now your instance is ready you are able to use functions of hashmap.
  - `hashmap.add('key', 'value')` - stores record in hashmap
  - `hashmap.get('key')` - displays value of that key if key exist, if not exist throws error with proper message.
  - `hashmap.remove('key')`- remove record from hashmap, or inform you about error if you try remove record that doesn't exist.
  - `hashmap.getAll()` - displays all records in hashmap