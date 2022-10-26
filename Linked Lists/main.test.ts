import LinkedList  from './LinkedList';

describe("Linked List tests", () => {
    it("Should create a linkedList", () => {
        const list = new LinkedList<Number>;
    
        expect(list.head).toBeNull();
        expect(list.size).toBe(0);
    });
    
    it("Should add new nodes to the beginning of the Linked List", () => {
        const list = new LinkedList<Number>;
    
        list.add(1);
        list.add(2);
    
        expect(list.size).toBe(2);
        expect(list.toString()).toBe("2,1");
    });
    
    it("Should add new nodes at the end of the Linked List", () => {
        const list = new LinkedList<Number>;
    
        list.append(1);
        list.append(2);
    
        expect(list.size).toBe(2);
        expect(list.toString()).toBe("1,2");
    });
    
    it("Should add at determined place", () => {
        const list = new LinkedList<Number>;
    
        list.append(1);
        list.append(2);
        list.append(4);
    
        list.insertAt(2, 3);
    
        expect(() => list.insertAt(10, 1)).toThrowError();
        expect(list.size).toBe(4);
        expect(list.toString()).toBe("1,2,3,4");
    });

    it("Should correct add to beggining or end of the linked list", () => {
        const list = new LinkedList<Number>;

        for (let i = 0; i < 8; i++) {
            list.append(i+1);
        }

        list.insertAt(0, 0);  
        list.insertAt(9, 9); 
        list.insertAt(4, 11);

        expect(list.size).toBe(11);
        expect(list.toString()).toBe("0,1,2,3,11,4,5,6,7,8,9");
    });

    it("Should get an element of the linked list at determined index", () => {
        const list = new LinkedList<Number>;

        for (let i = 10; i > 0; i--) {
            list.append(i);
        }

        expect(list.find(0)).toBe(10);
        expect(list.find(5)).toBe(5);
        expect(list.find(9)).toBe(1);
        expect(() => list.find(100)).toThrowError();
    })
})