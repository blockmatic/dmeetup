import React from "react";

import { propTypes } from "meetups/constants";
import { Card, Heading, Text } from "core/components";

const MeetupCard = ({ meetup }) => (
  <Card flex={1} m={2}>
    <Heading is="h2" mb={2}>
      {meetup.title}
    </Heading>
    <Text fontSize={1}>{meetup.description}</Text>
  </Card>
);

MeetupCard.propTypes = {
  meetup: propTypes.meetup
};

export default MeetupCard;
