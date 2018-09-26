import Dashboard from '../Dashboard/Dashboard'
import Exams from '../Exams/Exams'
import Semester from '../Exams/Semester/Semester'

const Routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    breadcrumb: 'Dashboard',
    exact: true,
    private: true,
  },
  {
    path: '/exams/:graphs?',
    component: Exams,
    breadcrumb: 'Prüfungen',
    exact: true,
    private: true,
  },
  {
    path: '/exams/semester/:test',
    component: Semester,
    breadcrumb: 'Semesterprüfungen',
    exact: true,
    private: true,
  },
]

export default Routes