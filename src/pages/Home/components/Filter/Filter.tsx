import Typography from "@mui/material/Typography";
import { InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { ArticleType } from "types/article.type";

type FilterProps = {
  setFilter: (arg: any) => void;
  setValues: (arg: string) => void;
  values: string;
  data: ArticleType[];
};

const Filter = (props: FilterProps) => {
  const { setFilter, data, setValues, values } = { ...props };

  useEffect(() => {
    if (values.length > 0) {
      const filteredData = data.filter(
        (el) =>
          el.title
            .toLowerCase()
            .includes(
              values.split(" ").find((el) => el.toLocaleLowerCase()) || values
            ) ||
          el.summary
            .toLowerCase()
            .includes(
              values.split(" ").find((el) => el.toLocaleLowerCase()) || values
            )
      );

      setFilter(filteredData);
    } else {
      setFilter(data);
    }
  }, [values, data]);

  return (
    <Box>
      <Typography>Filter by keywords</Typography>
      <TextField
        onChange={(e) => setValues(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export { Filter };
