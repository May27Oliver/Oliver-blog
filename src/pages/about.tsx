import type { NextPage } from "next";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Layout from "src/components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutPage: NextPage = () => (
  <Layout title="關於我 | Oliver雜貨鋪">
    <div className="mt-32 max-w-[1024px] m-auto">
      <div className="Name-head p-10 mb-10 flex flex-col md:flex-row lg:p-0">
        <div className="Name-col pr-5 border-b border-solid border-slate-900 basis-[60%]">
          <div className="Name text-5xl font-bold mb-5">Oliver Chen</div>
          <div className="Job-title mb-5">
            B.B.S.,Political Science,National Sun Yat-sen University 2013-2016
          </div>
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
      <div className="work-exp mb-10 p-10 lg:p-0">
        <div className="job-title">
          <span className="font-medium text-xl">
            Software Engineer, APEX International Financial Engineering(
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
        <div className="job-skill text-gray-500 my-2">
          React.js / NEXT.js / Typescript / Golang / Docker / MySQL / Flutter
        </div>
        <ul className="pl-10 my-5">
          <li className="job-content list-disc my-2">
            Developed Future system app for financial institution on
            smartphone,build with React,Typescript.
          </li>
          <li className="job-content list-disc">
            Built the immediately update stock marquee system for securities
            company,build with React,Typescript,Golang and MySQL.
          </li>
        </ul>
      </div>
      <div className="work-exp mb-10 p-10 lg:p-0">
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
            Developed user interface of SMES which run on factory production
            line,connect APIs from Backend, and optimize user experience.
          </li>
          <li className="job-content list-disc my-2">
            Developed user interface of QMS which make quality management easier
            by software in factories.
          </li>
        </ul>
      </div>
      <div className="side-project">
        <div className="side-project-title font-medium text-xl">
          Side Projects：
        </div>
        <ul className="pl-10 my-5">
          <li className="project-content list-disc my-2">
            This Website : I record my IT learning road map in this Website,and
            share to those who could have the same experience.
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
