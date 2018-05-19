class Event {
    constructor(name, members, date) {
        this.name = name;
        this.members = members;
        this.date = date;
    }
}

class Group {
    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
}
class EventCategory {
    constructor(name) {
        this.name = name;
    }
}

export {Event, Group, EventCategory};