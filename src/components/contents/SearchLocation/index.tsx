import { SearchIcon } from "@/components/icons/IconSearch";
import './SearchInput.scss'

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchLocation: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <div className="search-input">
      <SearchIcon alt="Search Icon" className="search-icon" />
      <input
        className="input-field"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Filter by location"
      />
    </div>
  )
};

export default SearchLocation;
