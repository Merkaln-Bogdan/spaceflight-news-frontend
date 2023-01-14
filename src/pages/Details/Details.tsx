import { Box } from "@mui/system";
import { useDetails } from "./Details.hooks";

const Details = () => {
  const { article } = useDetails();
  return <Box>Details</Box>;
};

export { Details };
