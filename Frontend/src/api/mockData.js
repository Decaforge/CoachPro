// This file simulates API responses with realistic data

// Users data
export const users = {
  admin: {
    id: 1,
    name: 'Admin User',
    email: 'admin@coachpro.com',
    role: 'admin',
    phone: '+91 98765 43210'
  },
  teacher: {
    id: 2,
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@coachpro.com',
    role: 'teacher',
    phone: '+91 98765 43211',
    teacherId: 1,
    employeeId: 'TCH001',
    subject: 'Mathematics',
    qualification: 'PhD in Mathematics',
    experience: 12
  },
  student: {
    id: 3,
    name: 'Rahul Sharma',
    email: 'rahul.sharma@coachpro.com',
    role: 'student',
    phone: '+91 98765 43212',
    studentId: 1,
    rollNumber: 'STD001',
    batch: 'Batch A',
    course: 'JEE Advanced',
    currentRank: 12,
    overallPercentage: 85.5,
    attendancePercentage: 92.0
  }
};

// Admin Dashboard Data
export const adminDashboardData = {
  stats: {
    totalStudents: 1000,
    totalTeachers: 45,
    avgPerformance: 82.5,
    attendanceRate: 87.3,
    trends: {
      students: '+12%',
      teachers: '+5%',
      performance: '+3.2%',
      attendance: '+2.1%'
    }
  },
  batchPerformance: [
    { batch: 'Batch A', performance: 88.5 },
    { batch: 'Batch B', performance: 85.2 },
    { batch: 'Batch C', performance: 82.8 },
    { batch: 'Batch D', performance: 79.4 },
    { batch: 'Batch E', performance: 86.1 }
  ],
  attendanceToday: {
    present: 874,
    absent: 126
  },
  growthTrend: [
    { month: 'Jan', students: 850, teachers: 40 },
    { month: 'Feb', students: 900, teachers: 42 },
    { month: 'Mar', students: 950, teachers: 44 },
    { month: 'Apr', students: 1000, teachers: 45 }
  ],
  topStudents: [
    { rank: 1, name: 'Arjun Patel', batch: 'Batch A', percentage: 96.8 },
    { rank: 2, name: 'Priya Desai', batch: 'Batch B', percentage: 95.2 },
    { rank: 3, name: 'Vikram Singh', batch: 'Batch A', percentage: 94.7 },
    { rank: 4, name: 'Ananya Reddy', batch: 'Batch C', percentage: 93.5 },
    { rank: 5, name: 'Rohan Gupta', batch: 'Batch B', percentage: 92.8 }
  ],
  teacherPerformance: [
    { name: 'Dr. Sarah Johnson', subject: 'Mathematics', lectures: 156, rating: 4.8 },
    { name: 'Prof. Amit Kumar', subject: 'Physics', lectures: 148, rating: 4.7 },
    { name: 'Ms. Lisa Chen', subject: 'Chemistry', lectures: 142, rating: 4.9 },
    { name: 'Dr. Rajesh Verma', subject: 'Biology', lectures: 138, rating: 4.6 },
    { name: 'Mr. David Lee', subject: 'English', lectures: 134, rating: 4.5 }
  ],
  aiInsights: {
    predictedToppers: '5 students showing excellent improvement trajectory',
    atRiskStudents: '8 students need immediate attention and support',
    batchHealth: 'Overall batch performance trending upward by 5.2%'
  }
};

// Students data
export const studentsData = [
  {
    id: 1,
    name: 'Rahul Sharma',
    email: 'rahul.sharma@coachpro.com',
    rollNumber: 'STD001',
    batch: 'Batch A',
    course: 'JEE Advanced',
    rank: 12,
    percentage: 85.5,
    attendance: 92.0,
    phone: '+91 98765 43212',
    dateOfBirth: '2005-03-15',
    address: 'Mumbai, Maharashtra',
    parentName: 'Mr. Vijay Sharma',
    parentPhone: '+91 98765 43213',
    admissionDate: '2023-04-01'
  },
  {
    id: 2,
    name: 'Priya Desai',
    email: 'priya.desai@coachpro.com',
    rollNumber: 'STD002',
    batch: 'Batch B',
    course: 'NEET',
    rank: 2,
    percentage: 95.2,
    attendance: 96.5,
    phone: '+91 98765 43214',
    dateOfBirth: '2005-06-22',
    address: 'Pune, Maharashtra',
    parentName: 'Mrs. Meera Desai',
    parentPhone: '+91 98765 43215',
    admissionDate: '2023-04-01'
  },
  {
    id: 3,
    name: 'Arjun Patel',
    email: 'arjun.patel@coachpro.com',
    rollNumber: 'STD003',
    batch: 'Batch A',
    course: 'JEE Advanced',
    rank: 1,
    percentage: 96.8,
    attendance: 98.0,
    phone: '+91 98765 43216',
    dateOfBirth: '2005-01-10',
    address: 'Ahmedabad, Gujarat',
    parentName: 'Mr. Kiran Patel',
    parentPhone: '+91 98765 43217',
    admissionDate: '2023-04-01'
  },
  {
    id: 4,
    name: 'Ananya Reddy',
    email: 'ananya.reddy@coachpro.com',
    rollNumber: 'STD004',
    batch: 'Batch C',
    course: 'JEE Mains',
    rank: 4,
    percentage: 93.5,
    attendance: 94.0,
    phone: '+91 98765 43218',
    dateOfBirth: '2005-09-18',
    address: 'Hyderabad, Telangana',
    parentName: 'Dr. Krishna Reddy',
    parentPhone: '+91 98765 43219',
    admissionDate: '2023-04-01'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    email: 'vikram.singh@coachpro.com',
    rollNumber: 'STD005',
    batch: 'Batch A',
    course: 'JEE Advanced',
    rank: 3,
    percentage: 94.7,
    attendance: 95.5,
    phone: '+91 98765 43220',
    dateOfBirth: '2005-11-25',
    address: 'Delhi NCR',
    parentName: 'Col. Rajendra Singh',
    parentPhone: '+91 98765 43221',
    admissionDate: '2023-04-01'
  },
  {
    id: 6,
    name: 'Sneha Kapoor',
    email: 'sneha.kapoor@coachpro.com',
    rollNumber: 'STD006',
    batch: 'Batch B',
    course: 'NEET',
    rank: 8,
    percentage: 89.2,
    attendance: 91.0,
    phone: '+91 98765 43222',
    dateOfBirth: '2005-04-30',
    address: 'Bangalore, Karnataka',
    parentName: 'Mrs. Sunita Kapoor',
    parentPhone: '+91 98765 43223',
    admissionDate: '2023-04-01'
  }
];

// Teachers data
export const teachersData = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@coachpro.com',
    employeeId: 'TCH001',
    subject: 'Mathematics',
    qualification: 'PhD in Mathematics',
    experience: 12,
    phone: '+91 98765 43230',
    joiningDate: '2020-01-15',
    totalStudents: 245,
    lecturesCompleted: 156,
    totalHours: 234,
    averageRating: 4.8
  },
  {
    id: 2,
    name: 'Prof. Amit Kumar',
    email: 'amit.kumar@coachpro.com',
    employeeId: 'TCH002',
    subject: 'Physics',
    qualification: 'M.Sc Physics, B.Ed',
    experience: 10,
    phone: '+91 98765 43231',
    joiningDate: '2020-06-01',
    totalStudents: 230,
    lecturesCompleted: 148,
    totalHours: 222,
    averageRating: 4.7
  },
  {
    id: 3,
    name: 'Ms. Lisa Chen',
    email: 'lisa.chen@coachpro.com',
    employeeId: 'TCH003',
    subject: 'Chemistry',
    qualification: 'M.Sc Chemistry',
    experience: 8,
    phone: '+91 98765 43232',
    joiningDate: '2021-03-10',
    totalStudents: 220,
    lecturesCompleted: 142,
    totalHours: 213,
    averageRating: 4.9
  }
];

// Teacher Dashboard Data
export const teacherDashboardData = {
  stats: {
    totalStudents: 245,
    lecturesScheduled: 18,
    totalHours: 234,
    averageRating: 4.8
  },
  myStudents: studentsData.slice(0, 6),
  recentLectures: [
    {
      id: 1,
      topic: 'Differential Equations',
      date: '2025-01-08',
      batch: 'Batch A',
      duration: '2 hours',
      status: 'Completed',
      type: 'Scheduled',
      rating: 4.8
    },
    {
      id: 2,
      topic: 'Integral Calculus',
      date: '2025-01-09',
      batch: 'Batch B',
      duration: '1.5 hours',
      status: 'Scheduled',
      type: 'Scheduled',
      rating: null
    },
    {
      id: 3,
      topic: 'Trigonometry Advanced',
      date: '2025-01-10',
      batch: 'Batch A',
      duration: '2 hours',
      status: 'Scheduled',
      type: 'Direct',
      rating: null
    }
  ],
  recentAssignments: [
    {
      id: 1,
      title: 'Chapter 5 Problems',
      subject: 'Mathematics',
      batch: 'Batch A',
      dueDate: '2025-01-12',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Calculus Worksheet',
      subject: 'Mathematics',
      batch: 'Batch B',
      dueDate: '2025-01-15',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Integration Practice',
      subject: 'Mathematics',
      batch: 'Batch C',
      dueDate: '2025-01-10',
      status: 'Active'
    }
  ]
};

// Student Dashboard Data
export const studentDashboardData = {
  stats: {
    currentRank: 12,
    overallPercentage: 85.5,
    attendance: 92.0,
    pendingAssignments: 2
  },
  performanceTrend: [
    { month: 'Aug', percentage: 78.5 },
    { month: 'Sep', percentage: 80.2 },
    { month: 'Oct', percentage: 82.8 },
    { month: 'Nov', percentage: 84.1 },
    { month: 'Dec', percentage: 85.5 }
  ],
  subjectPerformance: [
    { subject: 'Mathematics', percentage: 88 },
    { subject: 'Physics', percentage: 86 },
    { subject: 'Chemistry', percentage: 84 },
    { subject: 'Biology', percentage: 85 },
    { subject: 'English', percentage: 82 }
  ],
  recentTests: [
    {
      id: 1,
      name: 'Monthly Test - Mathematics',
      date: '2025-01-05',
      marks: 88,
      maxMarks: 100,
      grade: 'A',
      subject: 'Mathematics'
    },
    {
      id: 2,
      name: 'Unit Test - Physics',
      date: '2025-01-03',
      marks: 86,
      maxMarks: 100,
      grade: 'A',
      subject: 'Physics'
    },
    {
      id: 3,
      name: 'Surprise Test - Chemistry',
      date: '2024-12-28',
      marks: 84,
      maxMarks: 100,
      grade: 'A',
      subject: 'Chemistry'
    }
  ],
  upcomingAssignments: [
    {
      id: 1,
      title: 'Chapter 5 Problems',
      subject: 'Mathematics',
      dueDate: '2025-01-12',
      daysRemaining: 3,
      status: 'Pending'
    },
    {
      id: 2,
      title: 'Physics Numerical Practice',
      subject: 'Physics',
      dueDate: '2025-01-14',
      daysRemaining: 5,
      status: 'Pending'
    }
  ]
};

// Test and Marks Data
export const testsData = [
  {
    id: 1,
    name: 'Monthly Test - Mathematics',
    subject: 'Mathematics',
    batch: 'Batch A',
    date: '2025-01-05',
    maxMarks: 100,
    duration: 180,
    type: 'Monthly',
    status: 'Completed'
  },
  {
    id: 2,
    name: 'Unit Test - Physics',
    subject: 'Physics',
    batch: 'Batch A',
    date: '2025-01-03',
    maxMarks: 100,
    duration: 120,
    type: 'Unit',
    status: 'Completed'
  },
  {
    id: 3,
    name: 'Final Test - Chemistry',
    subject: 'Chemistry',
    batch: 'Batch B',
    date: '2025-01-15',
    maxMarks: 150,
    duration: 180,
    type: 'Final',
    status: 'Scheduled'
  }
];

// Mock API functions
export const mockApi = {
  // Auth
  login: (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email.includes('admin')) {
          resolve({ user: users.admin, token: 'mock-admin-token' });
        } else if (email.includes('teacher') || email.includes('sarah')) {
          resolve({ user: users.teacher, token: 'mock-teacher-token' });
        } else {
          resolve({ user: users.student, token: 'mock-student-token' });
        }
      }, 500);
    });
  },

  // Admin APIs
  getAdminDashboard: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(adminDashboardData), 300);
    });
  },

  getStudents: (filters = {}) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = [...studentsData];
        if (filters.batch) {
          filtered = filtered.filter(s => s.batch === filters.batch);
        }
        if (filters.search) {
          const search = filters.search.toLowerCase();
          filtered = filtered.filter(s => 
            s.name.toLowerCase().includes(search) ||
            s.rollNumber.toLowerCase().includes(search) ||
            s.email.toLowerCase().includes(search)
          );
        }
        resolve(filtered);
      }, 300);
    });
  },

  getTeachers: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(teachersData), 300);
    });
  },

  // Teacher APIs
  getTeacherDashboard: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(teacherDashboardData), 300);
    });
  },

  getMyStudents: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(studentsData), 300);
    });
  },

  getTests: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(testsData), 300);
    });
  },

  // Student APIs
  getStudentDashboard: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(studentDashboardData), 300);
    });
  },

  getStudentPerformance: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        overall: studentDashboardData.stats,
        subjects: studentDashboardData.subjectPerformance,
        tests: studentDashboardData.recentTests,
        trend: studentDashboardData.performanceTrend
      }), 300);
    });
  }
};
