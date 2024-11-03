import { OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

function Search({ placeholder, handleSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const onChange = (e) => {
    const newQuery = e.target.value;
    setSearchValue(newQuery);
    handleSearch(newQuery);
  };

  return (
    <OutlinedInput
      sx={{
        flexBasis: 320,
        borderRadius: "20px",
        "&.Mui-focused .MuiSvgIcon-root": {
          color: (theme) => theme.palette.primary.main,
        },
      }}
      placeholder={placeholder}
      value={searchValue}
      onChange={onChange}
      size="small"
      startAdornment={<SearchIcon sx={{ mr: 0.5 }} />}
      endAdornment={
        searchValue && (
          <ClearIcon
            onClick={() => {
              setSearchValue("");
              handleSearch("");
            }}
          />
        )
      }
    />
  );
}

export default Search;
