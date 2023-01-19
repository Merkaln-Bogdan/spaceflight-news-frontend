import { Button as AButton } from "@mui/material";

type ButtonProps = {
  children: React.ReactNode;
  styles?: object;
  handleClick?: () => void;
};

const Button = (props: ButtonProps): React.ReactElement => {
  const { children, styles, handleClick } = { ...props };
  return (
    <AButton
      onClick={handleClick}
      size="small"
      sx={{
        display: "flex",
        justifyContent: "center",
        textTransform: "none",
        fontWeight: 700,
        color: "inherit",
        ...styles,
      }}
    >
      {children}
    </AButton>
  );
};

export { Button };
