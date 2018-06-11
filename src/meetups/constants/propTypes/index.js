import PropTypes from "prop-types";

const meetup = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
});

export default {
  meetup
};
