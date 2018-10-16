import React, { Component } from "react";
import { Container, Content } from "native-base";
import Publicity from "../components/home/publicity/index.js";
import Services from "../components/home/services/index.js";
import { BG_COLOR } from "../tools/index.js";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("new Boject");
    return (
      <Container>
        <Content style={{ backgroundColor: BG_COLOR }}>
          <Publicity />
          <Services />
        </Content>
      </Container>
    );
  }
}

export default Home;
