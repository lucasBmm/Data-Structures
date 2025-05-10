import LinkedList from "../../LinkedLists/LinkedList";
import Stack from "../stack.interface";

export default class LinkedListStack<T> implements Stack<T> {
	private stack: LinkedList<T> = new LinkedList<T>();

	/**
	 * @param item Element to be inserted
	 */
	push(item: T): void {
		this.stack.append(item);
	}

	/**
	 * Removes and returns the top element from the stack
	 * @returns The element removed, or undefined if the stack is empty
	 */
	pop(): T | undefined {
		return this.stack.pop();
	}

	/**
	 * Clear the Stack
	 */
	clear(): void {
		this.stack.clear();
	}

	/**
	 * return true if stack is empty
	 * @returns {boolean}
	 */
	isEmpty(): boolean {
		return this.size === 0;
	}

	/**
	 * Return the last item without removing
	 */
	peek(): T | undefined {
		return this.stack.tail?.value;
	}

	/**
	 * Return the size of the stack
	 */
	get size(): number {
		return this.stack.size;
	}
}
