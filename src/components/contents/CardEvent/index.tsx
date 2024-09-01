import { IEvent } from "@/types";
import "./CardEvent.scss";

type CardEventProps = {
  item: IEvent;
};

const CardEvent: React.FC<CardEventProps> = ({ item }) => (
  <div
    className="event-item"
  >
    <img
      data-testid={`event-image-${item.id}`}
      loading="lazy"
      src={item.image}
      className={`event-item__image skeleton-image`}
    />
    <div className="event-item__content">
      <h4 className="event-item__title">{item.title}</h4>
      <div className="event-item__desc">
        <p>{item.date}</p>
        <p>{item.location}</p>
        <p>{item.description}</p>
      </div>
    </div>
  </div>
);

export default CardEvent;