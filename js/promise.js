const PENDING = 'PENDING',
      FULFILLED = 'FULFILLED',
      REJECTED = 'REJECTED';

class MyPromise {
  constructor (executor) {
    this.value = undefined;   // 成功返回值
    this.reason = undefined;  // 失败返回值
    this.state = PENDING;   // 初始状态

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
      
        // 发布
        this.onFulfilledCallbacks.forEach(fn => fn());
      }
    }

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state.REJECTED;
        this.reason = reason;

        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.state === REJECTED) {
      onRejected(this.reason);
    }
    
    if (this.state === PENDING) {
      // 订阅
      this.onFulfilledCallbacks.push(() => {
        onFulfilled(this.value);
      })

      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      })
    }
  }
}

var promise = new MyPromise((resolve, reject) => {
  // resolve('success');

  setTimeout(() => {
    resolve('success');
  }, 2000);
});

promise.then((value) => {
  console.log(value);
}, (reason) => {
  console.log(reason);
})