import React from 'react'
import {
    FiUser,
    FiAirplay,
    FiBookOpen,
    FiBox,
    FiCalendar,
    FiCheckCircle,
    FiDollarSign,
    FiMessageCircle,
    FiPlusCircle,
    FiGrid,
    FiFlag,
    FiPhone,
    FiUsers
} from 'react-icons/fi'

export const CompanyNavbarNavigation = [

    // {
    //     key: 'dashboard',
    //     label: 'Dashboard',
    //     path: '/company',
    //     icon: <FiAirplay />
    // },
    {
        key: 'profile',
        label: 'Profile',
        path: '/company',
        icon: <FiUser />
    },
    {
        key: 'interviews',
        label: ' Interviews',
        path: '/company/interviews',
        icon: <FiCalendar />
    },
    // {
    //     key: 'all-vacancies',
    //     label: 'All Vacancies',
    //     path: '/company/all-vacancies',
    //     icon: <FiPlusCircle />
    // },
    {
        key: 'events',
        label: 'Events',
        path: '/company/events',
        icon: <FiFlag />
    },
    {
        key: 'talent-pool',
        label: 'Talent Pool',
        path: '/company/talent-pool',
        icon: <FiBookOpen />
    },
]
  


