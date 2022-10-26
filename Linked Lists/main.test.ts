import LinkedList  from './LinkedList';

test("Should create a linkedList", () => {
    const list = new LinkedList<Number>;

    expect(list.head).toBeNull();
    expect(list.size).toBe(0);
})

test("Should add new nodes to the beginning of the Linked List", () => {
    const list = new LinkedList<Number>;

    list.add(1);
    list.add(2);

    expect(list.size).toBe(2);
    expect(list.toString()).toBe("2,1");
})