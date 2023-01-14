import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { ArticleType } from "types/article.type";
import { Link } from "react-router-dom";

type ArticleProps = {
  article: ArticleType;
};

const Article = (props: ArticleProps) => {
  const { article } = { ...props };

  return (
    <Link to={`/${article.id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={article.imageUrl}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.summary}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read more</Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export { Article };
