import Stack from "./stack";

describe("Stack", () => {
	const stack = new Stack<number>();

	beforeEach(() => stack.clear());

	it("Should create stack when instantiate", () => {
		expect(stack).toBeTruthy();
	});

	it("Should add items when (@push) is called", () => {
		stack.push(1);
		stack.push(2);
		stack.push(3);

		expect(stack.size).toBe(3);
	});

	it("Should remove items when (@pop) is called", () => {
		stack.push(1);
		stack.push(2);
		stack.push(3);
		const removedValue = stack.pop();

		expect(stack.size).toBe(2);
		expect(removedValue).toBe(3);
	});

	it("Should return undefined when (@pop) is called on an empty stack", () => {
		expect(stack.pop()).toBeUndefined();
	});

	it("Should return last item without remove it when (@peek) is called", () => {
		stack.push(1);
		stack.push(2);
		stack.push(3);
		const topItem = stack.peek();

		expect(stack.size).toBe(3);
		expect(topItem).toBe(3);
	});

	it("Should return undefined when (@peek) is called on an empty stack", () => {
		expect(stack.peek()).toBeUndefined();
	});

	it("Should return if stack is empty when (@isEmpty) is called", () => {
		expect(stack.isEmpty()).toBe(true);

		stack.push(1);

		expect(stack.isEmpty()).toBe(false);
	});

	it("Should clear all items when (@clear) is called", () => {
		stack.push(1);
		stack.push(2);
		stack.clear();

		expect(stack.size).toBe(0);
		expect(stack.isEmpty()).toBe(true);
	});
});
