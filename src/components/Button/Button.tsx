import { Button as AButton } from "@mui/material";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  const { children } = { ...props };
  return (
    <AButton size="small" sx={{ textTransform: "none" }}>
      {children}
    </AButton>
  );
};

export { Button };
