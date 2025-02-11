import img_link from "../assets/links";

const Card = (props) => {
  const { ResData } = props;
  const { name,cuisines
,avgRating, cloudinaryImageId, costForTwo,sla } =
    ResData?.info;

  return (
    <div className="card">
      <img className="card-image" src={img_link + cloudinaryImageId} />
      <h1 className="card-title">{name}</h1>
      <h1 className="cusines">{cuisines.join(",")}</h1>
      <h2 className="card-rating">{avgRating}</h2>
      <h2 className="price">{costForTwo}</h2>
      <h2 className="price">{sla.slaString}</h2>
    </div>
  );
};

export default Card;