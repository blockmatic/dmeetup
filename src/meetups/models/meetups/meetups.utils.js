import * as normalizr from "normalizr";

import meetupSchema from "./meetups.schema";

const normalize = data =>
  normalizr.normalize(
    data,
    Array.isArray(data) ? [meetupSchema] : meetupSchema
  );

const denormalize = (data, meetups) => {
  return normalizr.denormalize(
    { meetups: data },
    { meetups: [meetupSchema] },
    { meetups }
  );
};

export default {
  normalize,
  denormalize
};
