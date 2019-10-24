import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../../Dashboard/Dashboard'
import Exams from '../../Exams/Exams'
import MC from '../../Exams/MC/MC'
import Questions from '../../Exams/MC/Questions/Questions'
import Ptm from '../../Exams/Ptm/Ptm'
import Strengths from '../../Strengths/Strengths'
import Stations from '../../Exams/Stations/Stations'
import Consulting from '../../consulting/Consulting'
import AllTools from '../../alltools/AllTools'
import EPAs from '../../EPAs/EPAs'
import Progress from '../../Progress/Progress'
import i18next from 'i18next'
import Registration from '../../User/Registration'
import DataProtection from '../../User/DataProtection'

const Routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    menuName: 'Dashboard',
    exact: true,
    private: true,
  },

  {
    path: '/exams/:exam?/:id?',
    component: Exams,
    menuName: 'Prüfungen',
    private: true,
  },
  {
    path: '/epas',
    component: EPAs,
    menuName: 'Ärztliche Tätigkeiten',
    exact: true,
    private: true,
  },
  {
    path: '/consulting',
    component: Consulting,
    menuName: 'Beratung',
    exact: true,
    private: true,
  },
  {
    path: '/alltools',
    component: AllTools,
    menuName: 'Alle Tools',
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
    path: '/user/dataProtection',
    component: DataProtection,
    exact: true,
    private: false,
  },

  {
    path: '/exams/mc/:test',
    component: MC,
    exact: true,
    private: true,
  },
  {
    path: '/exams/mc/:test/questions',
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
    exact: true,
    private: true,
  },
]

export default Routes