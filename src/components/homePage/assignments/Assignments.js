import React, { useState, useEffect, useContext, useReducer } from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { Card, Menu, Dropdown, Tabs, Button } from 'antd';
import Icon, {
  FileDoneOutlined,
  DownOutlined,
  LineOutlined,
  YoutubeOutlined,
  GithubOutlined,
  SmileOutlined
} from '@ant-design/icons';

import * as ROUTES from '../../../constants/routes';
import { StyledSection, StyledDiv } from './styles';
import UserContext from '../../contexts/UserContext';
import PrivateRoute from '../../routes/PrivateRoute';
import Instructions from './Instructions';
import Summary from './Summary';
import Videos from './Videos';
import GithubLink from './GithubLink';

const { TabPane } = Tabs;

const INITIAL_STATE = {
  course: null,
  units: null,
  lessons: null,
  sources: null
}

const ACTIONS = {
  SET_COURSE: 'course',
  SET_UNITS: 'units',
  SET_LESSONS: 'lessons',
  SET_SOURCES: 'sources',
  SET_ALL: 'all'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_COURSES:
      return { ...state, [action.payload.field]: action.payload.value };
    case ACTIONS.SET_UNITS:
      return { ...state, [action.payload.field]: action.payload.value };
    case ACTIONS.SET_LESSONS:
      return { ...state, [action.payload.field]: action.payload.value };
    case ACTIONS.SET_SOURCES:
      return { ...state, [action.payload.field]: action.payload.value };
    case ACTIONS.SET_ALL:
      return { ...action.payload.value };
    default:
      throw new Error();
  }
}

const Assignments = ({ match, history }) => {
  const [state, setState] = useState({ key: 'Week 1' });
  const { key } = state;
  const [classInfo, dispatchClass] = useReducer(reducer, INITIAL_STATE);
  const location = useLocation();
  const [nextPath, setNextPath] = useState(location);
  const [userInfo, dispatchUser] = useContext(UserContext);


  useEffect(() => {
    const getAssignments = async () => {
      const unitsSources = await fetch(`https://students-dashboard-back-end.herokuapp.com/courses/${userInfo.courseID}/units`);
      const resUnits = await unitsSources.json();
      console.log(resUnits)
      const dataSources = await fetch(`https://students-dashboard-back-end.herokuapp.com/courses/${userInfo.courseID}/units/3/lessons/9/sources`);
      const resSources = await dataSources.json();
      console.log(resSources)

      dispatchClass({ type: 'all', payload: { field: 'all', value: { course: resSources.course, units: resUnits.units, lessons: resSources.lesson, sources: resSources.sources } } })
    }
    getAssignments();
  }, [])

  const nextPage = () => {
    switch (location.pathname) {
      case '/home/assignments/instructions':
        return setNextPath('/home/assignments/videos');
      case '/home/assignments/videos':
        return setNextPath('/home/assignments/submission');
      case '/home/assignments/submission':
        return setNextPath('/home/assignments/done');
      default:
        return new Error('path not found');
    }
  }

  const menu = () => {
    return (
      <Menu>
        {classInfo ? classInfo.units.map(unit => {
          return (
            <Menu.Item key={unit.id}>
              <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                {unit.unit_name}
              </a>
            </Menu.Item>
          )
        }) : null
        }
      </Menu>
    )
  }

  const AssignmentsDropdown = () => {
    return (
      <Dropdown overlay={menu}>
        <Link to="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Your Units <DownOutlined />
        </Link>
      </Dropdown>
    )
  }

  const onTabChange = (key, type) => {
    console.log(key, type);
    setState({ [type]: key });
  };

  return (
    <StyledDiv>
      <Card
        style={{ height: '500px', width: '70%' }}
        title="Front End 1"
        extra={<AssignmentsDropdown />}
        activeTabKey={key}
        onTabChange={key => {
          onTabChange(key, 'key');
        }}
      >
        <StyledSection>
          <div className="card-container">
            <Tabs type="card">
              <TabPane tab={<Link to={`${match.path}`}>Week 1</Link>} key="1" >
                <h3 className="courseOutline" align="center"><FileDoneOutlined /><Link to={`${match.path}${ROUTES.INSTRUCTIONS}`}>Instructions & Goals</Link> <LineOutlined /> <YoutubeOutlined /><Link to={`${match.path}${ROUTES.VIDEOS}`}> Videos</Link> <LineOutlined /> <GithubOutlined /><Link to={`${match.path}${ROUTES.SUBMISSION}`}> Github Link </Link><LineOutlined /> <SmileOutlined /> Done</h3>
                <div className="cardContent">
                  <Switch>
                    <Route exact path={`${match.path}`} component={Summary} />
                    <Route exact path={`${match.path}${ROUTES.DASHBOARD}`} component={Instructions} />
                    <Route exact path={`${match.path}${ROUTES.VIDEOS}`} render={props => <Videos {...props} sources={classInfo.sources} />} />
                    <Route exact path={`${match.path}${ROUTES.SUBMISSION}`} render={props => <GithubLink {...props} githubLink={classInfo} />} />
                  </Switch>
                  <div style={{
                    position: 'absolute', right: 0, bottom: 0, marginBottom: '4.5rem',
                    marginRight: '4.5rem'
                  }}>
                    <Link to="#"><Button type="primary" style={{ marginRight: '1rem' }}>Save Progress</Button></Link>
                    <Link to={() => {
                      nextPage();
                      return nextPath;
                    }}><Button type="primary">Next</Button></Link>
                  </div>
                </div>
              </TabPane>
            </Tabs>
            {/* <Tabs type="card">
              <TabPane tab="Week 1" key="1">
                <h3 className="courseOutline" align="center"><FileDoneOutlined /> Instructions & Goals <LineOutlined /> <YoutubeOutlined /> Videos <LineOutlined /> <GithubOutlined /> Github Link <LineOutlined /> <SmileOutlined /> Done</h3>
                <div className="cardContent">
                  <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus, ipsum nec pretium placerat, leo justo accumsan lacus, et interdum.</strong></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet arcu quam, eu rhoncus ligula malesuada a. Sed non fringilla risus. Etiam consectetur iaculis ipsum, nec cursus erat mollis eu.</p>
                  <div style={{
                    position: 'absolute', right: 0, bottom: 0, marginBottom: '4.5rem',
                    marginRight: '4.5rem'
                  }}>
                    <Link to="#"><Button type="primary" style={{ marginRight: '1rem' }}>Save Progress</Button></Link>
                    <Link to="#"><Button type="primary">Next</Button></Link>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Week 2" key="2">
                <h3 className="courseOutline" align="center"><FileDoneOutlined /> Instructions & Goals <LineOutlined /> <YoutubeOutlined /> Videos <LineOutlined /> <GithubOutlined /> Github Link <LineOutlined /> <SmileOutlined /> Done</h3>
                <div className="cardContent">
                  <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus, ipsum nec pretium placerat, leo justo accumsan lacus, et interdum.</strong></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet arcu quam, eu rhoncus ligula malesuada a. Sed non fringilla risus. Etiam consectetur iaculis ipsum, nec cursus erat mollis eu.</p>
                  <div style={{
                    position: 'absolute', right: 0, bottom: 0, marginBottom: '4.5rem',
                    marginRight: '4.5rem'
                  }}>
                    <Link to="#"><Button type="primary" style={{ marginRight: '1rem' }}>Save Progress</Button></Link>
                    <Link to="#"><Button type="primary">Next</Button></Link>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Week 3" key="3">
                <h3 className="courseOutline" align="center"><FileDoneOutlined /> Instructions & Goals <LineOutlined /> <YoutubeOutlined /> Videos <LineOutlined /> <GithubOutlined /> Github Link <LineOutlined /> <SmileOutlined /> Done</h3>
                <div className="cardContent">
                  <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus, ipsum nec pretium placerat, leo justo accumsan lacus, et interdum.</strong></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet arcu quam, eu rhoncus ligula malesuada a. Sed non fringilla risus. Etiam consectetur iaculis ipsum, nec cursus erat mollis eu.</p>
                  <div style={{
                    position: 'absolute', right: 0, bottom: 0, marginBottom: '4.5rem',
                    marginRight: '4.5rem'
                  }}>
                    <Link to="#"><Button type="primary" style={{ marginRight: '1rem' }}>Save Progress</Button></Link>
                    <Link to="#"><Button type="primary">Next</Button></Link>
                  </div>
                </div>
              </TabPane>
            </Tabs> */}
          </div>
        </StyledSection>
      </Card>
    </StyledDiv >
  )
}



export default Assignments;