import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";
import moment from "moment";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Button } from "components/Button";
import { ArticleType } from "types/article.type";

type ArticleProps = {
  article: ArticleType;
  searchValues: string;
};

const Article = (props: ArticleProps) => {
  const {
    article: { id, updatedAt, imageUrl, summary, newsSite, title },
    searchValues,
  } = { ...props };

  function truncate(str: string) {
    return str.length > 100 ? str.slice(0, 100 - 1) + "…" : str;
  }

  return (
    <Link to={`/${id}`}>
      <Card sx={{ maxWidth: 345, height: 512 }}>
        <CardMedia sx={{ height: 217 }} image={imageUrl} title={newsSite} />
        <CardContent>
          <Typography>{moment(updatedAt).format("MMMM Do YYYY")}</Typography>
          <Typography gutterBottom variant="h5" component="div">
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={searchValues.split(" ")}
              autoEscape={true}
              textToHighlight={truncate(title)}
            />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={searchValues.split(" ")}
              autoEscape={true}
              textToHighlight={truncate(summary)}
            />
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Read more</Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export { Article };
