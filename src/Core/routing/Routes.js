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
import Registration from '../../User/Registration'
import DataProtection from '../../User/DataProtection'
import Faq from '../../FAQ/Faq'
import Login from '../../User/Login'
import Impressum from '../../Core/Impressum'
import Assessment from '../../EPAs/Assessments/Externals/Requests/Assessment'

const Routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    menuName: 'Dashboard',
    exact: true,
    private: true,
  },
  {
    TellMe: true
  },
  {
    path: '/exams/:exam?/:id?',
    component: Exams,
    private: true,
  },
  {
    path: '/epas',
    component: EPAs,
    exact: true,
    private: true,
  },
  {
    path: '/consulting',
    component: Consulting,
    menuName: 'Beratung',
    exact: true,
    private: false,
  },
  {
    path: '/AllTools',
    component: AllTools,
    menuName: 'Alle Tools',
    exact: true,
    private: false,
  },
  {
    path: '/faq',
    component: Faq,
    menuName: 'FAQ',
    exact: true,
    private: false,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    private: false,
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
    path: '/exams/mcs/:test',
    component: MC,
    exact: true,
    private: true,
  },
  {
    path: '/exams/mcs/:test/questions',
    component: Questions,
    exact: true,
    private: true,
  },
  {
    path: '/exams/ptms/:test',
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
  {
    path: '/impressum',
    component: Impressum,
    exact: true,
    private: false,
  },
  {
    path: '/epas/fremdbewertung/:token',
    component: Assessment,
    exact: true,
    private: false,
  },
]

export default Routes