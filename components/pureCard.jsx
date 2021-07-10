import moment from "moment";
import Link from "next/link";

const PureCard = ({ item, link }) => {
  return (
    <Link href={`${link}/${item.id}`}>
      <div className="category-card">
        {item.image ? <img src={item.image} alt="" /> : null}
        <img
          src={item.id == 1 ? "./images/electronics.svg" : "./images/phone.svg"}
          alt=""
        />
        <p className="card-name">{item.name}</p>
        <p className="card-date">
          {moment(item.createdAt).format("DD/MM/YYYY, HH:MM A")}
        </p>
        {item.price && <p className="card-price">${item.price}</p>}
      </div>
    </Link>
  );
};

export default PureCard;
