import React from "react";
import { NavLink } from "@mantine/core";
import Link from "next/link";

interface Props {
  linkProp: string;
  labelProp: string;
  path: string;
}

function Nav({ labelProp, linkProp, path }: Props) {
  return (
    <NavLink
      style={{ borderRadius: 5 }}
      variant="filled"
      component={Link}
      label={labelProp}
      href={linkProp}
      active={path === linkProp}
    ></NavLink>
  );
}

export default Nav;
