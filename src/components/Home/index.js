import {Component} from 'react'

import {TfiDashboard} from 'react-icons/tfi'
import {IoSettingsOutline} from 'react-icons/io5'
import {RiCalendarScheduleLine} from 'react-icons/ri'

import {IoIosSearch, IoMdNotificationsOutline} from 'react-icons/io'
import {FaCircleUser} from 'react-icons/fa6'

import {FaMoneyBill} from 'react-icons/fa'
import {CiShoppingTag} from 'react-icons/ci'
import {BiLike} from 'react-icons/bi'
import {PiUsers} from 'react-icons/pi'

import {
  LineChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const data = [
  {
    name: 'Week 1',
    uv: 4000,
    pv: 2400,
    amt: 0,
  },
  {
    name: 'Week 2',
    uv: 3000,
    pv: 1398,
    amt: 100,
  },
  {
    name: 'Week 3',
    uv: 2000,
    pv: 9800,
    amt: 200,
  },
  {
    name: 'Week 4',
    uv: 2780,
    pv: 3908,
    amt: 300,
  },
]

const data2 = [
  {
    count: 809680,
    language: 'Telugu',
  },
  {
    count: 4555697,
    language: 'Hindi',
  },
  {
    count: 12345657,
    language: 'English',
  },
]

class Home extends Component {
  state = {}

  render() {
    return (
      <div className="dashboard-container">
        <div className="side-bar-container">
          <div className="side-bar-icons-data-container">
            <h1 className="main-head">Board.</h1>
            <ul className="side-bar-lists">
              <li className="list-item">
                <TfiDashboard size={20} className="side-bar-icon" />
                <p className="list-item-name">Dashboard</p>
              </li>
              <li className="list-item">
                <CiShoppingTag size={20} className="side-bar-icon" />
                <p className="list-item-name">Transcations</p>
              </li>
              <li className="list-item">
                <RiCalendarScheduleLine size={20} className="side-bar-icon" />
                <p className="list-item-name">Schedules</p>
              </li>
              <li className="list-item">
                <FaCircleUser size={20} className="side-bar-icon" />
                <p className="list-item-name">Users</p>
              </li>
              <li className="list-item">
                <IoSettingsOutline size={20} className="side-bar-icon" />
                <p className="list-item-name">Settings</p>
              </li>
            </ul>
          </div>
          <div>
            <p className="message-text">Help</p>
            <p className="message-text">Contact Us</p>
          </div>
        </div>
        <div className="body-section">
          <nav className="nav-container">
            <h1>Dashboard</h1>
            <div className="nav-details-container">
              <div className="search-bar-container">
                <input
                  type="search"
                  placeholder="search"
                  className="search-input"
                />
                <IoIosSearch size={20} />
              </div>
              <div className="icons-container">
                <IoMdNotificationsOutline className="icon" size={25} />
                <FaCircleUser className="icon" size={25} />
              </div>
            </div>
          </nav>
          <div className="transcations-details-container">
            <div className="transcations-details bg-revenue">
              <FaMoneyBill size={20} className="icon" />

              <div className="transcations-amount-details">
                <p className="transcation-type">Total Revenues</p>
                <p className="transcation-amount">$ 2, 129, 430</p>
              </div>
            </div>
            <div className="transcations-details bg-transcation">
              <CiShoppingTag size={20} className="icon" />

              <div className="transcations-amount-details">
                <p className="transcation-type">Total Transcations</p>
                <p className="transcation-amount">1, 520</p>
              </div>
            </div>
            <div className="transcations-details bg-likes">
              <BiLike size={20} className="icon" />

              <div className="transcations-amount-details">
                <p className="transcation-type">Total Likes</p>
                <p className="transcation-amount">9,721</p>
              </div>
            </div>
            <div className="transcations-details bg-users">
              <PiUsers size={20} className="icon" />

              <div className="transcations-amount-details">
                <p className="transcation-type">Total Users</p>
                <p className="transcation-amount">892</p>
              </div>
            </div>
          </div>
          <br /> <br />
          <div className="charct-container">
            <LineChart
              width={730}
              height={250}
              data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Line
                name="pv of pages"
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
              />
              <Line
                name="uv of pages"
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
              />
            </LineChart>
          </div>
          <br />
          <div className="pie-chart-container">
            <div className="pie-chart">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    cx="70%"
                    cy="40%"
                    data={data2}
                    startAngle={0}
                    endAngle={360}
                    innerRadius="40%"
                    outerRadius="70%"
                    dataKey="count"
                  >
                    <Cell name="Telugu" fill="#fecba6" />
                    <Cell name="Hindi" fill="#b3d23f" />
                    <Cell name="English" fill="#a44c9e" />
                  </Pie>
                  <Legend
                    iconType="circle"
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="today-schedules-data">
              <h1 className="today-schedule-header">Today Schedule</h1>
              <div>
                <div>
                  <p className="schedule-meet">
                    Meeting with suppriers from Kuta Bali
                  </p>
                  <p className="time">14.00 - 15.00</p>
                  <p className="time">at Sunset Road, Kuta Bali</p>
                </div>
                <div>
                  <p className="schedule-meet">
                    Check Operation at Giga - Factory
                  </p>
                  <p className="time">10.00 - 20.00</p>
                  <p className="time">at Central Jakrtha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
