import Typography from "@mui/material/Typography";
import { InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Search } from "@mui/icons-material";
import { useEffect } from "react";
import { ArticleType } from "types/article.type";

type FilterProps = {
  setFilter: (arg: any) => void;
  setValues: (arg: string) => void;
  values: string;
  data: ArticleType[];
};

const Filter = (props: FilterProps): React.ReactElement => {
  const { setFilter, data, setValues, values } = { ...props };

  useEffect(() => {
    if (values.length > 0) {
      const filteredData = data.filter(
        (el) =>
          el.title
            .toLowerCase()
            .includes(
              values.split(" ").find((el) => el.toLocaleLowerCase()) ||
                values.toLocaleLowerCase()
            ) &&
          el.summary
            .toLowerCase()
            .includes(
              values.split(" ").find((el) => el.toLocaleLowerCase()) ||
                values.toLocaleLowerCase()
            )
      );

      setFilter(filteredData);
    } else {
      setFilter(data);
    }
  }, [values, data, setFilter]);

  return (
    <Box>
      <Typography sx={{ fontWeight: 600 }}>Filter by keywords</Typography>
      <TextField
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
