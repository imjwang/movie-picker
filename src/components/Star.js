const Star = ({ tooltip = "tooltip", value }) => {
  return (
    <input
      title={tooltip}
      type="radio"
      name="review-rating"
      className="mask mask-star-2 bg-yellow-400"
      value={value}
    />
  );
};

export default Star;
