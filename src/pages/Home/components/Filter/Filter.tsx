import { InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Search } from "@mui/icons-material";

import { Text } from "components/Text";

import { ArticleType } from "types/article.type";
import { useFilter } from "./Filter.hooks";

type FilterProps = {
  setFilter: (arg: ArticleType[]) => void;
  setValues: (arg: string) => void;
  values: string;
  data: ArticleType[];
};

const defaultProps: Partial<FilterProps> = {
  setFilter: undefined,
  setValues: undefined,
  values: "",
  data: [],
};

const Filter = (props: FilterProps): React.ReactElement => {
  const { setFilter, data, setValues, values } = { ...defaultProps, ...props };
  useFilter(setFilter, data, values);
  return (
    <Box>
      <Text>Filter by keywords</Text>
      <TextField
        id="outlined-password-input"
        onChange={(e) => setValues(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{
          width: "600px",
          mt: "10px",
          mb: "40px",
          border: " 1px solid #eaeaea",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
        }}
      />
    </Box>
  );
};

export { Filter };
