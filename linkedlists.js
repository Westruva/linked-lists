class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this._head = null;
		this._tail = null;
		this.length = 0;
	}

	append(value) {
		const newNode = new ListNode(value);

		if (!this._head) {
			this._head = newNode;
			this._tail = newNode;
		} else {
			this._tail.next = newNode;
			this._tail = newNode;
		}

		this.length += 1;
		return this;
	}

	prepend(value) {
		const newNode = new ListNode(value);

		if (!this._head) {
			this._head = newNode;
			this._tail = newNode;
		} else {
			newNode.next = this._head;
			this._head = newNode;
		}

		this.length += 1;
		return this;
	}

	insert(index, value) {
		if (index < 0 || index > this.length) {
			return false;
		}

		if (index === 0) {
			this.prepend(value);
			return true;
		}

		if (index === this.length) {
			this.append(value);
			return true;
		}

		const newNode = new ListNode(value);
		const previousNode = this.getNode(index - 1);

		newNode.next = previousNode.next;
		previousNode.next = newNode;
		this.length += 1;

		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) {
			return null;
		}

		if (index === 0) {
			return this.shift();
		}

		const previousNode = this.getNode(index - 1);
		const removedNode = previousNode.next;

		previousNode.next = removedNode.next;

		if (index === this.length - 1) {
			this._tail = previousNode;
		}

		this.length -= 1;

		if (this.length === 0) {
			this._head = null;
			this._tail = null;
		}

		return removedNode;
	}

	pop() {
		if (!this._head) {
			return null;
		}

		if (this.length === 1) {
			const onlyNode = this._head;
			this._head = null;
			this._tail = null;
			this.length = 0;
			return onlyNode;
		}

		const newTail = this.getNode(this.length - 2);
		const removedNode = this._tail;

		newTail.next = null;
		this._tail = newTail;
		this.length -= 1;

		return removedNode;
	}

	shift() {
		if (!this._head) {
			return null;
		}
		const removedNode = this._head;

		this._head = this._head.next;
		this.length -= 1;

		if (this.length === 0) {
			this._tail = null;
		}

		removedNode.next = null;
		return removedNode;
	}

	size() {
		return this.length;
	}

	head() {
		return this._head;
	}

	tail() {
		return this._tail;
	}

	at(index) {
		return this.getNode(index);
	}

	contains(value) {
		let currentNode = this._head;

		while (currentNode) {
			if (currentNode.value === value) {
				return true;
			}
			currentNode = currentNode.next;
		}

		return false;
	}

	findIndex(value) {
		let currentNode = this._head;
		let index = 0;

		while (currentNode) {
			if (currentNode.value === value) {
				return index;
			}
			currentNode = currentNode.next;
			index += 1;
		}

		return -1;
	}

	get(index) {
		const node = this.getNode(index);
		return node ? node.value : null;
	}

	getNode(index) {
		if (index < 0 || index >= this.length) {
			return null;
		}

		let currentNode = this._head;
		let currentIndex = 0;

		while (currentIndex < index) {
			currentNode = currentNode.next;
			currentIndex += 1;
		}

		return currentNode;
	}

	set(index, value) {
		const node = this.getNode(index);

		if (!node) {
			return false;
		}

		node.value = value;
		return true;
	}

	clear() {
		this._head = null;
		this._tail = null;
		this.length = 0;
	}

	isEmpty() {
		return this.length === 0;
	}

	toArray() {
		const values = [];
		let currentNode = this._head;

		while (currentNode) {
			values.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return values;
	}

	print() {
		return this.toArray().join(" -> ");
	}

	toString() {
		if (!this._head) {
			return "null";
		}

		let output = "";
		let currentNode = this._head;

		while (currentNode) {
			output += `( ${String(currentNode.value)} ) -> `;
			currentNode = currentNode.next;
		}

		output += "null";
		return output;
	}
}

export { LinkedList, ListNode }
