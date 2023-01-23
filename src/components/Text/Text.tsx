import { Typography } from "@mui/material";

type TextProps = {
  children: React.ReactNode;
  styles?: object;
};

const Text = (props: TextProps): React.ReactElement => {
  const { children, styles } = { ...props };
  return (
    <Typography
      sx={{
        ...styles,
      }}
    >
      {children}
    </Typography>
  );
};

export { Text };
