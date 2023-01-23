import { Box } from "@mui/system";
import { CardContent } from "@mui/material";

import { Text } from "components/Text";

import { ArticleType } from "types/article.type";

import { addionalText } from "./additionalText";

type TextCardProps = {
  data: ArticleType;
};

const TextCard = (props: TextCardProps): React.ReactElement => {
  const { data } = { ...props };

  return (
    <Box
      sx={{
        mt: "-100px",
        mr: "75px",
        ml: "75px",
        pr: "75px",
        pl: "75px",
        backgroundColor: "#ffffff",
        border: " 1px solid #eaeaea",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
      }}
    >
      <CardContent>
        <Text
          styles={{
            textAlign: "center",
            mt: "35px",
            mb: "50px",
            fontSize: "24px",
          }}
        >
          {data?.title}
        </Text>
        <Text>{data?.summary + addionalText}</Text>
      </CardContent>
    </Box>
  );
};

export { TextCard };
