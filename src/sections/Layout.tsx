import { Container } from "@mui/material";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps): React.ReactElement => {
  const { children } = { ...props };

  return (
    <Container sx={{ position: "relative", p: "50px 0", pt: "45px" }}>
      {children}
    </Container>
  );
};

export { Layout };
