import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Exams from '../Exams/Exams'
import Semester from '../Exams/Semester/Semester'
import Questions from '../Exams/Semester/Questions'

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
]

export default Routes