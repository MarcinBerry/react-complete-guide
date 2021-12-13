import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { MongoClient } from "mongodb";
import Head from "next/head";
const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Page with meetups from udemy tutorial."/>
      </Head>
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
