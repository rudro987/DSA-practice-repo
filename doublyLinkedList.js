class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev:null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return array;
    }
    prepend(value){
        const newNode = {
            value:value,
            next: null,
            prev: null
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value){
        if (index === 0) {
            return this.prepend(value);
          }

        if(index >= this.length){
            return this.append(value)
        }

        const newNode = {
            value: value,
            next: null,
            prev: null
        }

        const leader = this.traversedToIndex(index-1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode;
        this.length++;
        return this;
    }

    traversedToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index){
        const leader = this.traversedToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }

    reverse() {
        if(this.length === 1){
            return this.head;
        }

        let first = this.head;
        let second = first.next;
        this.tail = this.head;
        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}



let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.reverse()

console.log(myLinkedList);
