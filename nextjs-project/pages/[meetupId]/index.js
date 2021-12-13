import React from "react";
import Card from "../../components/ui/Card";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.REACT_APP_MONGODB_KEY);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export const getStaticProps = async (context) => {
  //fetch data for single meetup
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(process.env.REACT_APP_MONGODB_KEY);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
};
export default MeetupDetails;
