import React from 'react';
import Card from "../../components/ui/Card";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
    return (
        <MeetupDetail image="http://www.studyinpoland.pl/en/images/news/studyinwarsaw.jpg" title="First Meetup"
                      address="Some street 5, Some City" description="First meetup description"/>
    );
};

export default MeetupDetails;
