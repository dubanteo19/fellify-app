import { Song } from "@/types/Song";
import { Link } from "react-router-dom";
import { Card } from "./Card";
interface Props {
  title: string;
  showMore: string;
  songs: Song[];
}
export const HorizontalSongList: React.FC<Props> = ({
  title,
  showMore,
  songs,
}) => {
  return (
    <div>
      <div className="flex justify-between ">
        <h2 className="text-xl font-bold ">{title}</h2>
        <Link to={showMore}>Tất cả</Link>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-3">
        {songs.map((item) => (
          <Card
            key={item.id}
            {...item}
            subtitle={item.artists[0].name}
          />
        ))}
      </div>
    </div>
  );
};
