import Hotel from '~/../public/assets/hotel.jpg';
import Room from '~/../public/assets/room.jpg';
const Banner = () => {
  return (
    <div className="h-screen w-1/2">
      <div className="flex h-full flex-col">
        <img src={Hotel} className="h-1/2 object-cover" />
        <img src={Room} className="h-1/2 object-cover" />
      </div>
    </div>
  );
};

export default Banner;
