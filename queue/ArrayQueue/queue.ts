class Queue<T> {
    private array = new Array<T>();

    enqueue(value: T): void {
        this.array.push(value);
    }

    dequeue(): T | void {
        return this.array.shift();
    }

    firstElement(): T | void {
        return this.array[0];
    }

    empty(): void {
        this.array = new Array<T>();
    }

    getSize(): number {
        return this.array.length;
    }
}

export default Queue;