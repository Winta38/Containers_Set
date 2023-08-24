export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (!this.members.has(character)) {
            this.members.add(character);
        } else {
            throw new Error('Character is already added!');
        }
    }

    addAll(...characterList) {
        characterList.forEach((element) => {
            this.members.add(element);
        });
    }

    toArray() {
        return [...this.members];
    }
}