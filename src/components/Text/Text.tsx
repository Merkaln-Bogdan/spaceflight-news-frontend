import { Typography } from "@mui/material";

type TextProps = {
  children: React.ReactNode;
  styles?: object;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
};

const defaultProps: Partial<TextProps> = {
  children: undefined,
  styles: undefined,
  variant: "body1",
};

const Text = (props: TextProps): React.ReactElement => {
  const { children, styles, variant } = { ...defaultProps, ...props };
  return (
    <Typography
      gutterBottom
      variant={variant}
      component="div"
      sx={{
        ...styles,
      }}
    >
      {children}
    </Typography>
  );
};

export { Text };
