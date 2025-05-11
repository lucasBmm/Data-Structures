import Queue from "../queue.interface";

export default class ArrayQueue<T> implements Queue<T> {
	private array = new Array<T>();

	/**
	 * Add value at the end of the queue
	 * @param value
	 */
	enqueue(value: T): void {
		this.array.push(value);
	}

	/**
	 * Remove the first element of the queue and return it
	 * @param value
	 */
	dequeue(): T | undefined {
		return this.array.shift();
	}

	/**
	 * Return the first element without removing it
	 * @param value
	 */
	peek(): T | undefined {
		return this.array[0];
	}

	/**
	 * Return if the queue is empty
	 * @returns {boolean}
	 */
	isEmpty(): boolean {
		return this.array.length === 0;
	}

	/**
	 * Clear the entire queue
	 */
	clear(): void {
		this.array = [];
	}

	/**
	 * Return the size of the queue
	 */
	get size(): number {
		return this.array.length;
	}
}
