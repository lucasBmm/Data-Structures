export default interface Stack<T> {
	push(item: T): void;
	pop(): T | undefined;
	clear(): void;
	isEmpty(): boolean;
	peek(): T | undefined;
	size: number;
}
