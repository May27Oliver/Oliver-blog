import type { NextPage } from "next";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Layout from "src/components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutPage: NextPage = () => (
  <Layout title="關於我 | Oliver雜貨鋪">
    <div className="mt-32 max-w-[1024px] m-auto">
      <div className="Name-head p-10 md:mb-10 flex flex-col md:flex-row ">
        <div className="Name-col pr-5 border-b border-solid border-slate-900 basis-[60%]">
          <div className="Name text-4xl md:text-5xl font-bold mb-5">
            Oliver Chen
          </div>
          <div className="Job-title mb-5">A Web developer.</div>
        </div>
        <div className="Link-col my-10 md:pl-10 md:my-0">
          <div className="link-url flex flex-row leading-[30px] mb-2">
            <FontAwesomeIcon
              className="w-[30px] h-[30px] text-sky-700"
              icon={fab.faLinkedin}
            />
            <a
              className="text-blue-900 ml-4"
              href="https://www.linkedin.com/in/oliver-chen-67a968188/"
            >
              Oliver's Linked in
            </a>
          </div>
          <div className="link-url flex flex-row leading-[30px] mb-2">
            <FontAwesomeIcon
              className="w-[30px] h-[30px] text-sky-700"
              icon={fab.faGithub}
            />
            <a
              className="text-blue-900 ml-4"
              href="https://github.com/May27Oliver/"
            >
              Oliver's Github
            </a>
          </div>
          <div className="link-url flex flex-row cursor-pointer leading-[30px] mb-2">
            <FontAwesomeIcon
              className="w-[30px] h-[30px] text-sky-700"
              icon={fas.faEnvelope}
            />
            <a className="text-blue-900 ml-4">oliver310338@hotmail.com</a>
          </div>
        </div>
      </div>
      <div className="work-exp mb-10 p-10 lg:py-0">
        <div className="job-title">
          <span className="font-medium text-xl leading-[1.5]">
            Software Engineer, APEX Financial Engineering(
            <a
              className="text-blue-900"
              href="http://www.apex.com.tw/index.php"
            >
              寶碩財務科技
            </a>
            ),Taipei
          </span>
          <span className="text-gray-500"> Feb 2021 - Present</span>
        </div>
        <div className="job-skill text-gray-500 my-2 leading-[1.5]">
          React.js / NEXT.js / Typescript / Golang / Docker / MySQL / Flutter
        </div>
        <ul className="pl-10 my-5">
          <li className="job-content list-disc my-2 leading-[1.5]">
            Develop an future system app on smartphone for financial
            institutions like Bank SinoPac(永豐銀行),build by
            React,Typescript,this project I focus on front-end.
          </li>
          <li className="job-content list-disc leading-[1.5]">
            Building the immediately updated stock marquee system for securities
            company.
          </li>
          <li className="job-content list-disc leading-[1.5]">
            Create new features,new user friendly interfaces on financial apps
            using post-css, Websocket and JSON.
          </li>
          <li className="job-content list-disc leading-[1.5]">
            Build the backend system for Stock system using Golang and MySQL.
          </li>
          <li className="job-content list-disc leading-[1.5]">
            Debug and maintain apps and websites and apps for Bank clients.
          </li>
          <li className="job-content list-disc leading-[1.5]">
            Share new IT skills with colleagues, and do some inner education
            training major on frontend.
          </li>
          <li className="job-content list-disc leading-[1.5]">
            Build frontend animation with GSAP library, and take care of the
            website performance.
          </li>
          <li className="job-content list-disc leading-[1.5]">
            Use new convenient tools such as Docker on the Developing process.
          </li>
          <li className="job-content list-disc leading-[1.5]">
            Working directly with the Business Unit to develop technical
            solutions for financial cases.
          </li>
        </ul>
      </div>
      <div className="work-exp mb-10 p-10 lg:py-0 leading-[1.5]">
        <div className="job-title">
          <span className="font-medium text-xl">
            Software Engineer, DIGIWIN(
            <a className="text-blue-900" href="https://www.digiwin.com/tw">
              鼎新電腦
            </a>
            ),Taichung
          </span>
          <span className="text-gray-500"> Nov 2019 - Jan 2021</span>
        </div>
        <div className="job-skill text-gray-500 my-2">
          Angular.js / Javascript / CSS / HTML / RWD
        </div>
        <ul className="pl-10 my-5">
          <li className="job-content list-disc my-2">
            Developed the user interface of SMES which run on factory production
            line, connected APIs from Backend, and optimized user experience
            40%.
          </li>
          <li className="job-content list-disc my-2">
            Developed user interface of QMS and made quality management easier
            by saving human resoures and time in factories.
          </li>
          <li className="job-content list-disc my-2">
            Built customized functional websites for clients with specific
            needs.
          </li>
          <li className="job-content list-disc my-2">
            Connect the device base APIs such as opening camera, scanning QRCode
            and reading file on mobile phone and PDAs by javascript, cordova.
          </li>
          <li className="job-content list-disc my-2">
            Debugged and maintained package software, and updated hotfix files
            between versions.
          </li>
        </ul>
      </div>
      <div className="side-project mb-10 p-10 lg:py-0">
        <div className="side-project-title font-medium text-xl">
          Side Projects
        </div>
        <ul className="pl-10 my-5">
          <li className="project-content list-disc my-2">
            This Website : I record my IT learning road map in this Website,and
            share with people having similar career paths and dream.
          </li>
        </ul>
      </div>
      <div className="side-project mb-10 p-10 lg:py-0">
        <div className="side-project-title font-medium text-xl">Education:</div>
        <div className="Job-title pl-10 mb-5 my-2">
          B.B.S.,Political Science,National Sun Yat-sen University 2013-2016
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
