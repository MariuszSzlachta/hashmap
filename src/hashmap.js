class HashMap {
  constructor(capacity) {
    this.capacity = capacity;
    this.buckets =  []
  }

  // If key exist return value of the key if not exist return new exception
  get(key) {
    const index = this.hashFunction(key, this.capacity);
    if (this.buckets[index] === undefined) {
      return new Error('Key doesn\'t exist');
    } else {
      for (var i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i][0] === key) {
          return this.buckets[index][i][1];
        }
      }
    }
  }

  add(key, value) {
    const index = this.hashFunction(key, this.capacity);
    // if the bucket is empty insert data
    if (this.buckets[index] === undefined) {
      this.buckets[index] = [
        [key, value]
      ]
    } else {
      // if the bucket is not empty but you typed the same key then edit value of key
      let inserted = false;
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i] !== undefined) {
          if (this.buckets[index][i][0] === key) {
            this.buckets[index][i][1] = value;
            inserted = true;
          }
        }
      }
      // if there is colision push item at the end of the bucket
      if (inserted === false) {
        this.buckets[index].push([key, value]);
        console.log('pushuje')
      }
    }
    return this.buckets[index];
  }

  remove(key) {
    const index = this.hashFunction(key, this.capacity);
    if (this.buckets[index] === undefined) {
      return new Error('Element you want to remove doesn\'t exist');
    }
    if (this.buckets[index].length === 1 && this.buckets[index][0][0] === key) {
      delete this.buckets[index];
    } else {
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i] !== undefined) {
          if (this.buckets[index][i][0] === key) {
            delete this.buckets[index][i];
          }
        }
      }
    }
  }

  getAll() {
    console.log(this.buckets)
  }

  hashFunction(string, capacity) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % capacity;
  }
}

// export default HashMap;