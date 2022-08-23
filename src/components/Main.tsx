import { useState, useEffect } from "react";
import { Job } from "./Job";
import { MainAside } from "./MainAside";
import "./styles/main.css";

export function Main({ search }: any) {
  const [jobs, setJobs] = useState([]);
  const [fullTime, setFullTime] = useState(false);
  const [citySearch, setCitySearch] = useState("");
  const [cityOption, setCityOption] = useState("");
  useEffect(function () {
    fetch("https://www.arbeitnow.com/api/job-board-api")
      .then((resp) => resp.json())
      .then((a) => console.log(a.data[0]));
  }, []);

  let job = {
    company_name: "Digital Spine",
    created_at: 1661207105,
    job_types: [],
    location: "Berlin",
    remote: false,
    slug: "remote-full-stack-technical-lead-web-platform-digital-spine-berlin-germany-282713",
    tags: ["Tech", "Hybrid Remote"],
    title: "Full Stack Technical Lead Web Platform (m/f/d)",
    url: "https://www.arbeitnow.com/view/remote-full-stack-technical-lead-web-platform-digital-spine-berlin-germany-282713",
  };
  return (
    <main>
      <MainAside
        setFullTime={setFullTime}
        setCityOption={setCityOption}
        setCitySearch={setCitySearch}
      />
      <section className="section">
        <Job job={job} />
        <Job job={job} />
        <Job job={job} />
        <Job job={job} />
      </section>
    </main>
  );
}
