export type ShiftType = 'morning' | 'evening' | 'night';

export type DepartmentType =
  | 'hr'
  | 'culinary'
  | 'administration'
  | 'housekeeping';

export interface AttendanceQuarter {
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  attendance_days: number;
  leave_days: number;
}

export interface Attendance {
  quarters: AttendanceQuarter[];
  total_attendance_days: number;
  attendance_percent: number;
}

export interface Performance {
  performance_review: number;
  performance_percent: number;
}

export interface Employee {
  id: number;
  name: string;
  jobTitle: string;
  employmentType: 'full time' | 'part time';
  department: DepartmentType;
  office: string;
  email: string;
  phone: string;
  shift: ShiftType;
  attendance: Attendance;
  performance: Performance;
  total_work_hours: number;
}
