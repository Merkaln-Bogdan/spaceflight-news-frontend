import moment from "moment";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";

import { Card, CardContent, CardMedia } from "@mui/material";

import { SvgIcon } from "components/SvgIcon";
import { Button } from "components/Button";
import { Text } from "components/Text";

import { ArticleType } from "types/article.type";

import { ReactComponent as calendar } from "assets/calendar.svg";
import { ReactComponent as rightArrow } from "assets/arrowRight.svg";

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
      <Card
        sx={{
          position: "relative",
          maxWidth: 400,
          height: 630,
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
        }}
      >
        <CardMedia sx={{ height: 217 }} image={imageUrl} title={newsSite} />
        <CardContent>
          <Text styles={{ mt: "25px", fontSize: "14px", fontWeight: 200 }}>
            <SvgIcon
              viewbox="0 -1 16 16"
              styles={{ width: "18px", height: "16px" }}
            >
              {calendar}
            </SvgIcon>
            {moment(updatedAt).format("MMMM Do YYYY")}
          </Text>

          <Text
            styles={{
              maxHeight: "175px",
              mt: "24px",
              overflow: "hidden",
              fontSize: "24px",
            }}
          >
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={searchValues.split(" ")}
              autoEscape={true}
              textToHighlight={truncate(title)}
            />
          </Text>

          <Text variant="body2" styles={{ m: "20px 0" }}>
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={searchValues.split(" ")}
              autoEscape={true}
              textToHighlight={truncate(summary)}
            />
          </Text>

          <Button styles={{ position: "absolute", bottom: 25 }}>
            Read more
            <SvgIcon>{rightArrow}</SvgIcon>
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export { Article };
