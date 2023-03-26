import Star from "./Star";

const Rating = () => {
  return (
    <div className="form-control">
      <div className="rating rating-lg">
        <Star tooltip="💩💩💩" value={1} />
        <Star tooltip="meh" value={2} />
        <Star tooltip="Great!" value={3} />
        <Star tooltip="🎬💕🌟🍿🌹👫🌈🦋🎶🌠" value={4} />
      </div>
    </div>
  );
};
export default Rating;
