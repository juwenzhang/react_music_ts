/**
 * you can learn this code from
 *  https://github.com/sindresorhus/yocto-queue/blob/main/index.js
 */
class Node<T> {
  public value: T;
  public next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class requestQueue<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private size: number;

  constructor() {
    this.clearRequestQueue();
  }

  // todo 入队
  enRequestQueue(value: T) {
    const newNode = new Node(value as T);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // todo 出队
  deRequestQueue(): T | null {
    if (!this.head) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  // todo 获取队首元素
  peekRequestQueue(): T | null {
    if (!this.head) {
      return null;
    }
    return this.head.value;
  }

  // todo 清空队列
  clearRequestQueue() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // todo 获取队列长度
  get sizeRequestQueue(): number {
    return this.size;
  }

  // todo 判断队列是否为空
  get isEmptyRequestQueue(): boolean {
    return this.size === 0;
  }

  // todo 迭代器
  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }

  // todo 迭代器
  *drainRequestQueue() {
    while (!this.isEmptyRequestQueue) {
      yield this.deRequestQueue();
    }
  }
}

type requestQueueInstanceType = InstanceType<typeof requestQueue>;
export { requestQueue, type requestQueueInstanceType };
