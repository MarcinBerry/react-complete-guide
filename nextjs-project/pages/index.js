import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { MongoClient } from "mongodb";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    tittle: "First meetup",
    image: "http://www.studyinpoland.pl/en/images/news/studyinwarsaw.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    tittle: "Second meetup",
    image: "http://www.studyinpoland.pl/en/images/news/studyinwarsaw.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    tittle: "Third meetup",
    image: "http://www.studyinpoland.pl/en/images/news/studyinwarsaw.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a third meetup!",
  },
];
const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export const getServerSideProps = async (context) => {
//     const req = context.req;
//     const res = context.res;
//     //fetch data from backed API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         }
//     };
// }

export const getStaticProps = async () => {
  //fetch data from an API

  const client = await MongoClient.connect(process.env.REACT_APP_MONGODB_KEY);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;