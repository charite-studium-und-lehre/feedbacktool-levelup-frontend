import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Exams from '../Exams/Exams'
import Semester from '../Exams/Semester/Semester'
import Questions from '../Exams/Semester/Questions/Questions'
import Ptm from '../Exams/Ptm/Ptm'
import Strengths from '../Strengths/Strengths'
import Stations from '../Exams/Stations/Stations'
import Consulting from '../consulting/Consulting'
import AllTools from '../alltools/AllTools'
import EPAs from '../EPAs/EPAs'
import Progress from '../Progress/Progress'
import i18next from 'i18next'
import Registration from '../User/Registration'

const Routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    breadcrumb: () => <Link to="/dashboard">{i18next.t(`Dashboard`)}</Link>,
    exact: true,
    private: true,
  },

  {
    path: '/exams/:exam?/:id?',
    component: Exams,
    private: true,
  },

  {
    path: '/consulting',
    component: Consulting,
    breadcrumb: () => <Link to="/consulting">{i18next.t(`Beratung`)}</Link>,
    exact: true,
    private: true,
  },

  {
    path: '/alltools',
    component: AllTools,
    breadcrumb: () => <Link to="/alltools">{i18next.t(`Alle Tools`)}</Link>,
    exact: true,
    private: true,
  },
  {
    path: '/user/registration',
    component: Registration,
    exact: true,
    private: false,
  },
  {
    path: '/epas',
    component: EPAs,
    breadcrumb: () => <Link to="/epas">{i18next.t(`Ärzliche Tätigkeiten`)}</Link>,
    exact: true,
    private: true,
  },

  {
    path: '/exams/semester/:test',
    component: Semester,
    exact: true,
    private: true,
  },
  {
    path: '/exams/semester/:test/questions',
    component: Questions,
    exact: true,
    private: true,
  },
  {
    path: '/exams/ptm/:test',
    component: Ptm,
    exact: true,
    private: true,
  },
  {
    path: '/strengths/:subject?',
    component: Strengths,
    breadcrumb: params => [
      <Link to="/strengths">{i18next.t(`Stärken und Schwächen`)}</Link>,
    ],
    exact: true,
    private: true,
  },
  {
    path: '/exams/stations/:test?',
    component: Stations,
    exact: true,
    private: true,
  },
  {
    path: '/progress',
    component: Progress,
    breadcrumb: () => <Link to="/progress">{i18next.t('Studienfortschritt')}</Link>,
    exact: true,
    private: true,
  },
]

export default Routes