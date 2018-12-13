class HashMap {
  constructor(capacity) {
    this.capacity = capacity;
    this.buckets =  []
  }

  // If key exist returns value of key if not exist returns undefined
  get(key) {
    const index = this.hashFunction(key, this.capacity);
    if (this.buckets[index] === undefined) {
      return undefined
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
      console.log('nie było, dodaję')
    } else {
      // if the bucket is not empty but you typed the same key then edit value of key
      let inserted = false;
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i] !== undefined) {
          if (this.buckets[index][i][0] === key) {
            this.buckets[index][i][1] = value;
            inserted = true;
            console.log('edytuje value')
          }
        }
      }
      if (inserted === false) {
        this.buckets[index].push([key, value]);
        console.log('pushuje')
      }
      // if there is colision push item at the end of the bucket
    }
  }

  remove(key) {
    const index = this.hashFunction(key, this.capacity);
    if (this.buckets[index].length === 1 && this.buckets[index][0][0] === key) {
      console.log('usuwam element bezkolizyjny');
      delete this.buckets[index];
    } else {
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i] !== undefined) {
          if (this.buckets[index][i][0] === key) {
            delete this.buckets[index][i];
            console.log('usówam element zagnieżdżony')
          }
        } else {
          console.log('usówasz coś co nie istnieje')
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