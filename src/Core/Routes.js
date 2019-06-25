import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Exams from '../Exams/Exams'
import Semester from '../Exams/Semester/Semester'
import Questions from '../Exams/Semester/Questions'
//import Ptm from '../Exams/Ptm/Ptm'
import Strengths from '../Strengths/Strengths'
import Stations from '../Exams/Stations/Stations'
import Consulting from '../consulting/Consulting'
import Practicals from '../Practicals/Practicals'

const Ptm = () => { window.location = 'https://progresstesting.safeserver.de'; return null;}
const Routes = (t) => ([
  {
    path: '/dashboard',
    component: Dashboard,
    breadcrumb: () => <Link to="/dashboard">{t(`Dashboard`)}</Link>,
    exact: true,
    private: true,
  },

  {
    path: '/exams/:graphs?',
    component: Exams,
    breadcrumb: () => <Link to="/exams">{t(`Prüfungen`)}</Link>,
    exact: true,
    private: true,
  },

  {
    path: '/consulting',
    component: Consulting,
    breadcrumb: () => <Link to="/consulting">{t(`Beratung`)}</Link>,
    exact: true,
    private: true,
  },

  {
    path: '/practicals',
    component: Practicals,
    breadcrumb: () => <Link to="/practicals">{t(`Ärzliche Tätigkeiten`)}</Link>,
    exact: true,
    private: true,
  },

  {
    path: '/exams/semester/:test',
    component: Semester,
    breadcrumb: params => [
      <Link to="/exams/semester">{t(`Semesterprüfungen`)}</Link>,
      <Link to={`/exams/semester/${params.test}`}>{params.test}</Link>
    ],
    exact: true,
    private: true,
  },
  {
    path: '/exams/semester/:test/questions',
    component: Questions,
    breadcrumb: params => <Link to="/dashboard">{t(`Fragen und Antworten`)}</Link>,
    exact: true,
    private: true,
  },
  {
    path: '/exams/ptm/:test',
    component: Ptm,
    breadcrumb: params => [
      <Link to="/exams/ptm">PTM</Link>,
      <Link to={`/exams/ptm/${params.test}`}>{params.test}</Link>
    ],
    exact: true,
    private: true,
  },
  {
    path: '/strengths/:subject?',
    component: Strengths,
    breadcrumb: params => [
      <Link to="/strengths">{t(`Stärken und Schwächen`)}</Link>,
    ],
    exact: true,
    private: true,
  },
  {
    path: '/exams/stations/:test',
    component: Stations,
    breadcrumb: params => <Link to="/exams/stations">{t(`Praktische Prüfungen`)}</Link>,
    exact: true,
    private: true,
  },
])

export default Routes