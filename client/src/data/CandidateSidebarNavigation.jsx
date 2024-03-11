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
    FiPhone,
    FiFlag,
    FiUsers
} from 'react-icons/fi'

export const CandidateSidebarNavigation = [

    // {
    //     key: 'dashboard',
    //     label: 'Dashboard',
    //     path: '/candidate',
    //     icon: <FiAirplay />
    // },
    {
        key: 'profile',
        label: 'Profile',
        path: '/candidate',
        icon: <FiUser />
    },
    {
        key: 'applied-vacancies',
        label: 'Applied Vacancies',
        path: '/candidate/applied-vacancies',
        icon: <FiCheckCircle />
    },
    {
        key: 'interviews',
        label: ' Interviews',
        path: '/candidate/interviews',
        icon: <FiCalendar />
    },
    {
        key: 'all-vacancies',
        label: 'All Vacancies',
        path: '/candidate/all-vacancies',
        icon: <FiPlusCircle />
    },
    {
        key: 'companies',
        label: 'Companies',
        path: '/candidate/companies',
        icon: <FiGrid />
    },
    {
        key: 'events',
        label: 'Events',
        path: '/candidate/events',
        icon: <FiFlag />
    },
    
]


