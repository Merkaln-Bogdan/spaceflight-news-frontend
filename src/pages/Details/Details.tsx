import { useNavigate } from "react-router-dom";

import { Paper } from "@mui/material";

import { Layout } from "sections/Layout";
import { Button } from "components/Button";
import { SvgIcon } from "components/SvgIcon";

import { useDetails } from "./Details.hooks";

import { Text } from "components/Text";
import { TextCard } from "./components/TextCard";

import { ReactComponent as SvgLeftArrow } from "assets/arrowLeft.svg";

const Details = (): React.ReactElement => {
  const { article } = useDetails();

  const navigate = useNavigate();

  const styles = {
    paperContainer: {
      backgroundImage: `url(${article?.imageUrl})`,
      backgroundSize: "100%",
      backgroundPosition: "center",
    },
  };
  return !article ? (
    <Text styles={{ textAlign: "center" }}>Loading...</Text>
  ) : (
    <Layout>
      <Paper
        style={styles.paperContainer}
        sx={{
          boxSizing: "border-box",
          height: "245px",
        }}
      />
      <TextCard data={article} />
      <Button
        handleClick={() => navigate(-1)}
        styles={{ mt: "43px", ml: "168px" }}
      >
        <SvgIcon>{SvgLeftArrow}</SvgIcon>
        Back to homepage
      </Button>
    </Layout>
  );
};

export { Details };
