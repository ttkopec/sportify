import {Component} from "react";
import Event from "./Event";
import Group from "./Group";

class FakeDataProvider extends Component {


    getEvents = () => {
        return [new Event('TestEvent1', 'TestMember1', 'TestDate1'), new Event('TestEvent1', 'TestMember1', 'TestDate1'),
            new Event('TestEvent1', 'TestMember1', 'TestDate1'), new Event('TestEvent1', 'TestMember1', 'TestDate1')];
    };


    getGroups = () => {
        return [new Group('TestGroup1', 'TestMember1'), new Group('TestGroup1', 'TestMember1'),
            new Group('TestGroup1', 'TestMember1'), new Group('TestGroup1', 'TestMember1')];

    };
}

export default FakeDataProvider;