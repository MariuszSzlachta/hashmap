const HashMap = require('./hashmap.bundle.min');
const hm = new HashMap.HashMap();

// add records;
hm.add('test', 'true')
hm.add('test-2', 'false')

// get
hm.get('test');

// remove
hm.remove('test-2');

// get all records
hm.getAll();