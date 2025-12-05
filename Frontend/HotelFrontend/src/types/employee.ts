export type AttendanceQuarter = {
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  attendance_days: number;
  leave_days: number;
};

export type Attendance = {
  quarters: AttendanceQuarter[];
  total_attendance_days: number;
  attendance_percent: number;
};

export type Performance = {
  performance_review: number;
  performance_percent: number;
};

export type Employee = {
  id: number;
  name: string;
  jobTitle: string;
  employmentType: 'full time' | 'part time';
  department: string;
  office: string;
  email: string;
  phone: string;
  shift: 'morning' | 'evening' | 'night';
  attendance: Attendance;
  performance: Performance;
  total_work_hours: number;
};
