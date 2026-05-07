import type { Route } from "./+types/home";
import Navbar from '~/components/navbar';
import {resumes} from '../../constants';
import ResumeCard from '../components/ResumeCard';
import { usePuterStore } from '~/lib/puter';
import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "resume analyze" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();


  useEffect(() => {
    if (!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated]);

  return (
    <main className="bg-[url('../public/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-sectiion">
        <div className="page-heading">
          <h1>Track your Applications and Resume Ratings</h1>
          <h2>Review your submissions with AI powered feedback</h2>
        </div>

        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
