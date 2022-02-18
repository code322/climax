import { useState } from "react";
import { useDispatch } from "react-redux";
import { getResults } from "../../redux/actions/getResultsAction";
import "./Search.scss";

const Search: React.FC = () => {
   const [input, setInput] = useState<string>("");
   const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
   ) => {
      setInput(e.target.value);
   };

   // dispatch getResults when users press enter
   const dispatch = useDispatch();
   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
         dispatch(getResults(input));
      }
   };

   return (
      <nav>
         <div className="input-container bd-container">
            <input
               className="input "
               type="text"
               placeholder="Search Movie..."
               onChange={handleChange}
               value={input}
               onKeyDown={handleKeyDown}
            />
         </div>
      </nav>
   );
};

export default Search;
