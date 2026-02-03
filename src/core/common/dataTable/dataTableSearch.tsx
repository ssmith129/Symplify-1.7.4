// src/components/SearchInput.tsx

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <>
     <input
            type="search"
            className="form-control form-control-sm"
            placeholder="Search"
            aria-controls="DataTables_Table_0"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
    </>
  );
};

export default SearchInput;
