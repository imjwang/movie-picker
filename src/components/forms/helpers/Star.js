const Star = ({ tooltip = "tooltip", value, defaultChecked }) => {
  return (
    <input
      title={tooltip}
      type="radio"
      name="review-rating"
      className="mask mask-star-2 bg-yellow-400"
      value={value}
      defaultChecked={defaultChecked}
    />
  );
};

export default Star;
