import {Component} from "react";
import {Event, Group, EventCategory} from "./Models";

class DataProvider extends Component {
    static getEventCategories = () => {
        return [new EventCategory('Category1'), new EventCategory('Category2'), new EventCategory('Category3'),
            new EventCategory('Category4'), new EventCategory('Category5'), new EventCategory('Category6')]
    };

    getEvents = () => {
        return [new Event('TestEvent1', 'TestMember1', 'TestDate1'), new Event('TestEvent1', 'TestMember1', 'TestDate1'),
            new Event('TestEvent1', 'TestMember1', 'TestDate1'), new Event('TestEvent1', 'TestMember1', 'TestDate1')];
    };


    getGroups = () => {
        return [new Group('TestGroup1', 'TestMember1'), new Group('TestGroup1', 'TestMember1'),
            new Group('TestGroup1', 'TestMember1'), new Group('TestGroup1', 'TestMember1')];

    };
}

export default DataProvider;