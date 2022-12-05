import React, { CSSProperties, ReactNode } from "react";

import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Section from "./Components/Section";
import FooterComponent from "./Components/Footer";

import { ContactsOutlined } from "@ant-design/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { Layout, List, Typography } from "antd";
import Contact from "./Components/Contact";
import Reels from "./Components/Reels";
import Photos from "./Components/Photos";

const { Header, Content, Footer } = Layout;
const { Text, Title, Link, Paragraph } = Typography;

// site images
const SectionImg1 = require("./Media/img/Section1.jpg");
const SectionImg2 = require("./Media/img/Section2.jpg");
const SectionImg3 = require("./Media/img/Section3.jpg");
const ContactImg = require("./Media/img/Contact.jpg");

// css exceptions so far: hero img, nav item bg color, nav label/icon color
// search("config") in css

// todo:
// photo stretching on smaller screens
// contact smaller screen label overlap input
// add photo shoot neo pics

// Duplicated key 'undefined' used in Menu nav error
// image preview starts on img you clicked
// move style colors from css to config
// section hide img on mobile option
interface config {
  nav: {
    label?: string;
    icon?: React.ReactNode;
    items: NavItem[];
    color: {
      background: string;
      text: string;
    };
  };
  hero: {
    centerCenter?: React.ReactNode | string;
    rightBottom?: React.ReactNode | string;
  };
  section?: SectionInterface[];
  photos?: {
    title: string;
    description?: string;
    photos: Batch[];
  };
  reels?: {
    title: string;
    reels: Reel[];
  };
  contact: {
    img?: {
      img: string;
      left: boolean;
    };
    title?: string;
    icon?: React.ReactNode;
    message?: string;
    fields: Field[];
  };
  footer: {
    label?: string;
    items: FooterItem[];
    color: { background: string; text: string };
  };
}

const projectLinks: string[] = [
  "https://yipyapapp.com/",
  "https://www.anthonyjanpotter.com/",
  "https://github.com/sbronicki/generic-portfolio-components",
  "https://gifted-nobel-28269f.netlify.app/",
  "https://gracious-kalam-b1eeae.netlify.app/",
];

const appConfig: config = {
  nav: {
    items: [
      {
        name: "Home",
        to: "#home",
      },
      {
        name: "About",
        to: "#about",
      },
      {
        name: "Skills",
        to: "#skills",
      },
      {
        name: "Education",
        to: "#education",
      },
      {
        name: "Contact",
        to: "#contact",
      },
    ],
    color: { background: "", text: "#fff" },
  },
  hero: {
    rightBottom: (
      <Title
        level={3}
        style={{
          color: "#fff",
        }}
      >
        <span style={{ textAlign: "center" }}>
          Contact Email: <br /> sbronicki@gmail.com
        </span>
      </Title>
    ),
    centerCenter: (
      <Text>
        <Title
          level={1}
          style={{
            color: "#fff",
          }}
        >
          Stanley Bronicki
        </Title>
        <Title
          style={{
            color: "#fff",
          }}
          level={2}
        >
          Fullstack Web Developer
        </Title>
      </Text>
    ),
  },
  section: [
    {
      navId: "about",
      title: "About Me",
      content:
        "I'm a self-taught fullstack web developer. I graduated from NJIT with a bachelor's degree in physics. I'm currently working as a React developer, though recently I've been branching out into more fullstack and backend roles. I have over two years experience working on a dev team writing production level frontend and backend code, in particular- React, TypeScript, JavaScript (pre and post ES6), jQuery, CSS, C#, SQL and Node/Express. I love working along side other developers and collaborating in order to accomplish our goals and learn from each other. I look forward to continuing the development of my skills as well as all the projects I'll take on in the future. My main goal at this time is to continue working and further increase my effectiveness as a web developer so that I can keep learning about and creating the things I love!",
    },
    {
      navId: "skills",
      title: "Web Development",
      content: (
        <>
          <Text>
            Tech I love working with includes HTML, CSS, JavaScript, TypeScript,
            jQuery and React as well as Node/Express, C#/.NET, SQL and GraphQL.{" "}
            <Link href="https://github.com/sbronicki">My GitHub Page</Link>
          </Text>
          <List
            style={{ marginTop: "1rem" }}
            size="small"
            header="Project Links-"
            renderItem={(item, i) => (
              <List.Item>
                {<Link href={projectLinks[i]}>{item}</Link>}
              </List.Item>
            )}
            dataSource={[
              "Yip Yapp App",
              "AnthonyJanPotter.com",
              "Generic Portfolio Template (used for this site)",
              "React Trivia Joker",
              "React Pokédex",
            ]}
          />
        </>
      ),
      img: { left: true, img: SectionImg1 },
    },
    {
      navId: "education",
      title: "Education",
      content: (
        <List
          renderItem={(item) => <List.Item>{item}</List.Item>}
          dataSource={[
            "Bachelor of Physics from New Jersey Institue of Technology (NJIT)",
            "Associate of Physics from Brookdale Community College (BCC)",
            "Associate of Mathematics (BCC)",
            "Associate of Social Sciences (BCC)",
          ]}
        />
      ),
      img: { left: false, img: SectionImg3 },
    },
    // {
    //   title: "Film & Photography",
    //   content: (
    //     <List
    //       renderItem={(item) => <List.Item>{item}</List.Item>}
    //       dataSource={["Photoshop", "Final Cut Pro"]}
    //     />
    //   ),
    //   img: { left: false, img: SectionImg2 },
    // },
  ],
  contact: {
    img: {
      img: ContactImg,
      left: true,
    },
    title: "Contact",
    fields: [
      { label: "Name" },
      { label: "Email" },
      { label: "Phone" },
      { label: "Message", inputType: "area" },
    ],
    icon: <ContactsOutlined style={{ paddingRight: "7px" }} />,
  },
  footer: {
    color: {
      background: "#293477",
      text: "#fff",
    },
    items: [
      {
        to: "https://github.com/sbronicki",
        icon: <FontAwesomeIcon style={{ fontSize: "32px" }} icon={faGithub} />,
      },
      {
        to: "https://www.linkedin.com/in/stanley-bronicki/",
        icon: (
          <FontAwesomeIcon style={{ fontSize: "32px" }} icon={faLinkedin} />
        ),
      },
      {
        to: "https://www.youtube.com/nimso9",
        icon: <FontAwesomeIcon style={{ fontSize: "32px" }} icon={faYoutube} />,
      },
    ],
  },
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Header className="nav-hero-container">
          <Nav
            label={appConfig.nav.label}
            icon={appConfig.nav.icon}
            color={appConfig.nav.color}
            items={appConfig.nav.items}
          />
          <Hero
            rightBottom={appConfig.hero.rightBottom}
            centerCenter={appConfig.hero.centerCenter}
          />
        </Header>
        <Content>
          {appConfig.section?.length
            ? appConfig.section.map((sect, i) => (
                <Section
                  img={sect.img}
                  title={sect.title}
                  content={sect.content}
                  icon={sect.icon}
                  message={sect.message}
                  navId={sect.navId}
                  key={`section-${i}`}
                />
              ))
            : null}
          {appConfig.photos ? (
            <Photos
              title={appConfig.photos.title}
              description={appConfig.photos.description}
              photos={appConfig.photos.photos}
            />
          ) : null}
          {appConfig.reels ? (
            <Reels
              title={appConfig.reels.title}
              reels={appConfig.reels.reels}
            />
          ) : null}
          <Contact
            title={appConfig.contact.title}
            icon={appConfig.contact.icon}
            message={appConfig.contact.message}
            fields={appConfig.contact.fields}
            img={appConfig.contact.img}
          />
        </Content>
        <Footer className="footer-container">
          <FooterComponent
            items={appConfig.footer.items}
            label={appConfig.footer.label}
            color={appConfig.footer.color}
          />
        </Footer>
      </Layout>
    </div>
  );
};

export default App;

interface NavItem {
  name: string;
  to: string;
  icon?: React.ReactNode;
}
interface SectionInterface {
  img?: { img: string; left: boolean };
  title: string;
  icon?: React.ReactNode;
  content: string | React.ReactNode;
  navId?: string;
  message?: string;
}
interface FooterItem {
  to: string;
  icon: React.ReactNode;
}
interface Field {
  label: string;
  inputType?: string;
}
interface Reel {
  title: string;
  description?: string | React.ReactNode;
  link: string;
}
interface Batch {
  photos: Photo[];
  panelHeader?: string;
  description?: string;
  default?: boolean;
}
interface Photo {
  img: string;
}
