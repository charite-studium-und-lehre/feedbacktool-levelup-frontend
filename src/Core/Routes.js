import Dashboard from '../Dashboard/Dashboard'
import Exams from '../Exams/Exams'
import Semester from '../Exams/Semester'

const Routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    breadcrumbs: 'Dashboard',
    exact: true,
    private: true,
  },
  {
    path: '/exams/:graphs?',
    component: Exams,
    breadcrumbs: 'Dashboard',
    exact: true,
    private: true,
  },
  {
    path: '/exams/semester/:test',
    component: Semester,
    breadcrumbs: 'Dashboard',
    exact: true,
    private: true,
  },
]

export default Routes