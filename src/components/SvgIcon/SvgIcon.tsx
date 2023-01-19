import { SvgIcon as ASvgIcon } from "@mui/material";

type SvgIconProps = {
  children: React.ReactNode;
  styles?: object;
};

const SvgIcon = (props: SvgIconProps): React.ReactElement => {
  const { children, styles } = { ...props };
  return (
    <ASvgIcon
      viewBox="0 0 12 10"
      sx={{ width: "12px", heigth: "10px", m: "0 5px", ...styles }}
    >
      {children}
    </ASvgIcon>
  );
};

export { SvgIcon };
