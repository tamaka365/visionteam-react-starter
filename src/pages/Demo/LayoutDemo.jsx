import { useMemo } from "react";

import {
  Layout,
  Header,
  Main,
  Footer,
  Content,
  Aside,
  Nav,
  Response,
} from "src/layouts/index";

import { Flex } from "src/components/basic/index";

import classes from "./LayoutDemo.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

const list = [
  {
    name: "nav item 1",
    url: "xxx",
  },
  {
    name: "nav item 2",
    url: "xxx",
  },
  {
    name: "nav item 3",
    url: "xxx",
  },
  {
    name: "nav item 4",
    url: "xxx",
  },
  {
    name: "nav item 5",
    url: "xxx",
  },
  {
    name: "nav item 6",
    url: "xxx",
  },
  {
    name: "nav item 7",
    url: "xxx",
  },
  {
    name: "nav item 8",
    url: "xxx",
  },
];

export default function LayoutDemo() {
  const navList = useMemo(
    () => list.map(({ name }, index) => <li key={index}>{name}</li>),
    []
  );

  return (
    <Layout responseEarly={true}>
      <Header device="pc" position="fixed">
        <Nav device="pc">
          <ul className={cx("pc-header")}>{navList}</ul>
        </Nav>
      </Header>

      <Header device="mobile" position="fixed">
        <div className={cx("mobile-header")}>this is mobile header</div>
      </Header>

      <Main>
        <Aside>
          <Nav device="mobile">
            <ul className={cx("left-side")}>{navList}</ul>
          </Nav>
        </Aside>
        <Content>
          <div className={cx("content")}>this is main</div>
        </Content>
        <Aside>
          <Response device="pc">
            <div className={cx("right-side")}>
              <Flex gap="12px" fd="column">
                <div>
                  nav item 1, nav item 1, nav item 1, nav item 1, nav item 1,
                  nav item 1, nav item 1, nav item 1, nav item 1, nav item 1,
                  nav item 1{" "}
                </div>
              </Flex>
            </div>
          </Response>
        </Aside>
      </Main>
      <Footer>
        <div className={cx("footer")}>this is footer</div>
      </Footer>
    </Layout>
  );
}
