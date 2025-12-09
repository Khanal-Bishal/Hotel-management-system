from enum import Enum
from typing import List, Optional

from pydantic import BaseModel


class ShiftType(str, Enum):
    morning = "morning"
    evening = "evening"
    night = "night"


class DepartmentType(str, Enum):
    culinary = "culinary"
    administration = "administration"
    housekeeping = "housekeeping"
    hr = "hr"


class QuarterAttendance(BaseModel):
    quarter: str
    attendance_days: Optional[int] = None
    leave_days: Optional[int] = None


class Attendance(BaseModel):
    quarters: Optional[List[QuarterAttendance]] = None
    total_attendance_days: Optional[int] = None
    attendance_percent: Optional[int] = None


class Performance(BaseModel):
    performance_review: Optional[int] = None
    performance_percent: Optional[int] = None


class Employee(BaseModel):
    name: str
    jobTitle: str
    employmentType: str
    department: DepartmentType
    office: str
    email: str
    phone: str
    shift: ShiftType

    attendance: Optional[Attendance] = None
    performance: Optional[Performance] = None
    total_work_hours: Optional[int] = None


class EmployeeUpdate(BaseModel):
    name: Optional[str] = None
    jobTitle: Optional[str] = None
    employmentType: Optional[str] = None
    department: Optional[DepartmentType] = None
    office: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    shift: Optional[ShiftType] = None

    attendance: Optional[Attendance] = None
    performance: Optional[Performance] = None
    total_work_hours: Optional[int] = None
