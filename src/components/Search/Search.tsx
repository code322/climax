import { useState } from "react";
import "./Search.scss";

const Search: React.FC = () => {
   const [input, setInput] = useState<string>("");
   const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
   ) => {
      setInput(e.target.value);
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
            />
         </div>
      </nav>
   );
};

export default Search;
