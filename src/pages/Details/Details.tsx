import { Box } from "@mui/system";

import Typography from "@mui/material/Typography";
import {
  Card,
  CardMedia,
  Skeleton,
  CardActions,
  CardContent,
} from "@mui/material";

import { Button } from "components/Button";
import { useDetails } from "./Details.hooks";

const Details = () => {
  const { article } = useDetails();
  return !article ? (
    <Skeleton />
  ) : (
    <Box>
      <Card>
        <CardMedia
          image={article?.imageUrl}
          title={`image_${article?.newsSite}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article?.summary}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Back to homepage</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export { Details };
