import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function ContainerLayout({ children, container }) {
  return (
    <Container maxWidth={container ? container : "lg"}>
      <Typography component="div"/>
      {children}
    </Container>
  );
}
