import { SvgIcon as ASvgIcon } from "@mui/material";

type SvgIconProps = {
  children: React.ReactNode;
  styles?: object;
  viewbox?: string;
};

const defaultProps: Partial<SvgIconProps> = {
  children: undefined,
  styles: undefined,
  viewbox: "0 0 12 10",
};

const SvgIcon = (props: SvgIconProps): React.ReactElement => {
  const { children, styles, viewbox } = { ...defaultProps, ...props };
  return (
    <ASvgIcon
      viewBox={viewbox}
      sx={{ width: "12px", heigth: "10px", m: "0 5px", ...styles }}
    >
      {children}
    </ASvgIcon>
  );
};

export { SvgIcon };
