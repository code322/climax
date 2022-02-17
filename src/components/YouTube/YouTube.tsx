import { youtube_url } from "../../tools/api/url";
import "./YouTube.scss";
interface youtubeProps {
   youtubeVideoKey: string;
}

const YouTube: React.FC<youtubeProps> = ({ youtubeVideoKey }) => {
   return (
      <iframe
         className="trailer-wrapper"
         title="youtube"
         src={`${youtube_url}/${youtubeVideoKey}`}
         frameBorder="0"
         allowFullScreen
      />
   );
};

export default YouTube;
