import React, { useState, useEffect, useContext, useReducer } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Card, Menu, Dropdown, Tabs, Button, Spin, Row, Col, Form } from 'antd';
import _ from 'lodash';
import Icon, {
  FileDoneOutlined,
  DownOutlined,
  LineOutlined,
  YoutubeOutlined,
  GithubOutlined,
  SmileOutlined,
  CheckOutlined
} from '@ant-design/icons';

import * as ROUTES from '../../../constants/routes';
import { StyledSection, StyledDiv } from './styles';
import UserContext from '../../contexts/UserContext';
import PrivateRoute from '../../routes/PrivateRoute';
import Instructions from './Instructions';
import Summary from './Summary';
import Videos from './Resources';
import GithubLink from './GithubLink';


const { TabPane } = Tabs;

const INITIAL_STATE = {};

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
  const [savedProgress, setSavedProgress] = useState(null);
  const { key } = state;
  const [clickedUnitKey, setClickedUnitKey] = useState(0);
  const [clickedLessonKey, setClickedLessonKey] = useState(0);
  const [classInfo, dispatchClass] = useReducer(reducer, INITIAL_STATE);
  const [userInfo, dispatchUser] = useContext(UserContext);


  useEffect(() => {
    const getAssignments = async () => {
      const dataUnits = await fetch(`https://students-dashboard-back-end.herokuapp.com/courses/${userInfo.courseID}`)
      const resUnits = await dataUnits.json();

      dispatchClass({ type: 'all', payload: { field: 'all', value: resUnits.course } })
    }
    getAssignments();
  }, [])

  const nextPage = (location) => {
    switch (location.pathname) {
      case '/home/assignments':
        return '/home/assignments/instructions';
      case '/home/assignments/instructions':
        return '/home/assignments/videos';
      case '/home/assignments/videos':
        return '/home/assignments/submission';
      case '/home/assignments/submission':
        return '/home/assignments/done';
      default:
        return new Error('path not found');
    }
  }

  const menu = () => {
    return (
      <Menu onClick={({ key }) => setClickedUnitKey(key)}>
        {classInfo ? classInfo.units.map((unit, index) => {
          return (
            <Menu.Item key={index}>
              <a target="_blank" rel="noopener noreferrer">
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

  const handleSubmit = () => {
    console.log(classInfo)
    setSavedProgress(true);
  }

  const tabPanes = (classKey) => {
    return (
      classInfo.units[classKey].lessons.map((lesson, index) => {
        return (
          <TabPane tab={<Link to={`${match.path}`}>Week {index + 1}</Link>} key={`${index}`} >
            <h3 className="courseOutline" align="center">{savedProgress ? <CheckOutlined /> : <FileDoneOutlined />}<Link to={`${match.path}${ROUTES.INSTRUCTIONS}`}>Instructions & Goals</Link> <LineOutlined /> <YoutubeOutlined /><Link to={`${match.path}${ROUTES.VIDEOS}`}> Resources</Link> <LineOutlined /> <GithubOutlined /><Link to={`${match.path}${ROUTES.SUBMISSION}`}> Github Link </Link><LineOutlined /> <SmileOutlined /> Done</h3>
            <div className="cardContent">
              <Switch>
                <Route exact path={`${match.path}`} render={props => <Summary {...props} lesson={lesson.lesson_name} />} />
                <Route exact path={`${match.path}${ROUTES.DASHBOARD}`} component={Instructions} />
                <Route exact path={`${match.path}${ROUTES.VIDEOS}`} render={props => <Videos {...props} lessons={classInfo.units[clickedUnitKey].lessons[clickedLessonKey]} />} />
                <Route exact path={`${match.path}${ROUTES.SUBMISSION}`} render={props => <GithubLink {...props} githubLink={classInfo} />} />
              </Switch>
              <div style={{
                position: 'absolute', right: 0, bottom: 0, marginBottom: '4.5rem',
                marginRight: '4.5rem'
              }}>
                <Form style={{ display: 'inline-block' }} onFinish={handleSubmit}><Button style={{ marginRight: '1rem' }} type="primary" htmlType="submit">Save Progress</Button></Form>
                <Link to={location => nextPage(location)}><Button type="primary">Next</Button></Link>
              </div>
            </div>
          </TabPane>
        )
      })
    )
  }



  return (
    <StyledDiv>
      <Card
        style={{ height: '500px', width: '70%' }}
        title={!_.isEmpty(classInfo) ? classInfo.units[clickedUnitKey].unit_name : null}
        extra={<AssignmentsDropdown />}
        activeTabKey={key}
      >
        <StyledSection>
          <div className="card-container">
            {
              !_.isEmpty(classInfo) ?
                <Tabs type="card" onChange={key => setClickedLessonKey(key)}>{tabPanes(clickedUnitKey)}</Tabs>
                :
                (<Row>
                  <Col span={12} offset={12}>
                    <Spin size="large" />
                  </Col>
                </Row>)
            }
          </div>
        </StyledSection>
      </Card>
    </StyledDiv >
  )
}



export default Assignments;