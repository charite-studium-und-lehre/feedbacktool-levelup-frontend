import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Exams from '../Exams/Exams'
import Semester from '../Exams/Semester/Semester'
import Questions from '../Exams/Semester/Questions'
import Ptm from '../Exams/Ptm/Ptm'
import Strengths from '../Strengths/Strengths'
import Stations from '../Exams/Stations/Stations'
import Consulting from '../consulting/Consulting'
import Practicals from '../Practicals/Practicals'

const Routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    breadcrumb: () => <Link to="/dashboard">Dashboard</Link>,
    exact: true,
    private: true,
  },

  {
    path: '/exams/:graphs?',
    component: Exams,
    breadcrumb: () => <Link to="/exams">Prüfungen</Link>,
    exact: true,
    private: true,
  },

  {
    path: '/consulting',
    component: Consulting,
    breadcrumb: () => <Link to="/consulting">Beratung</Link>,
    exact: true,
    private: true,
  },

  {
    path: '/practicals',
    component: Practicals,
    breadcrumb: () => <Link to="/practicals">Arzliche Tatigkeiten</Link>,
    exact: true,
    private: true,
  },

  {
    path: '/exams/semester/:test',
    component: Semester,
    breadcrumb: params => [
      <Link to="/exams/semester">Semesterprüfungen</Link>,
      <Link to={`/exams/semester/${params.test}`}>{params.test}</Link>
    ],
    exact: true,
    private: true,
  },
  {
    path: '/exams/semester/:test/questions',
    component: Questions,
    breadcrumb: params => <Link to="/dashboard">Fragen und Antworten</Link>,
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
      <Link to="/strengths">Stärken und Schwächen</Link>,
    ],
    exact: true,
    private: true,
  },
  {
    path: '/exams/stations/:test',
    component: Stations,
    breadcrumb: params => <Link to="/exams/stations">Praktische Prüfungen</Link>,
    exact: true,
    private: true,
  },
]

export default Routes