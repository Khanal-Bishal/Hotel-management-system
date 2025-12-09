import { Button } from '~/components/ui/button';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet';

import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import React from 'react';
import { createEmployee } from 'src/services/employeeService';
import type { Employee } from 'src/types/employee';
import { toast } from 'sonner';

type NewEmployeePayload = Omit<Employee, 'id'>;
export function NewEmployeeSheet() {
  const [formData, setFormData] = React.useState<Omit<Employee, 'id'>>({
    name: '',
    jobTitle: '',
    employmentType: 'full time',
    department: 'housekeeping',
    office: '',
    email: '',
    phone: '',
    shift: 'morning',
    total_work_hours: 0,
    attendance: {
      quarters: [
        { quarter: 'Q1', attendance_days: 0, leave_days: 0 },
        { quarter: 'Q2', attendance_days: 0, leave_days: 0 },
        { quarter: 'Q3', attendance_days: 0, leave_days: 0 },
        { quarter: 'Q4', attendance_days: 0, leave_days: 0 },
      ],
      total_attendance_days: 0,
      attendance_percent: 0,
    },
    performance: {
      performance_review: 0,
      performance_percent: 0,
    },
  });
  const [errors, setErrors] = React.useState<Record<string, boolean>>({});

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      await createEmployee(formData);
      toast.success('Employee Created Successfully ');
      window.location.reload();
    } catch (err) {
      console.error(err);
      toast.error('Failed to create employee ❌');
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.jobTitle.trim()) newErrors.jobTitle = true;
    if (!formData.office.trim()) newErrors.office = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.shift) newErrors.shift = true;

    if (formData.total_work_hours <= 0) newErrors.total_work_hours = true;

    formData.attendance.quarters.forEach((q, index) => {
      if (q.attendance_days <= 0) newErrors[`attendance_days_${index}`] = true;
      if (q.leave_days < 0) newErrors[`leave_days_${index}`] = true;
    });

    if (formData.attendance.total_attendance_days <= 0)
      newErrors.total_attendance_days = true;

    if (formData.attendance.attendance_percent <= 0)
      newErrors.attendance_percent = true;

    if (formData.performance.performance_review <= 0)
      newErrors.performance_review = true;

    if (formData.performance.performance_percent <= 0)
      newErrors.performance_percent = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const err = (key: string) =>
    errors[key] ? 'border-red-500 focus:ring-red-500' : '';

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Create Employee</Button>
      </SheetTrigger>

      <SheetContent className="flex max-h-screen flex-col overflow-auto">
        <SheetHeader>
          <SheetTitle>Create Employee</SheetTitle>
        </SheetHeader>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-4 flex flex-col gap-4"
        >
          {/* NAME */}
          <div className="flex flex-col gap-3">
            <Label htmlFor="name">Employee Name</Label>
            <Input
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={errors.name ? 'border-red-500 focus:ring-red-500' : ''}
              placeholder="Enter name"
            />
          </div>

          {/* EMPLOYMENT + DEPARTMENT */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label>Employment Type</Label>
              <Select
                value={formData.employmentType}
                onValueChange={(value: 'full time' | 'part time') =>
                  handleChange('employmentType', value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full time">Full time</SelectItem>
                  <SelectItem value="Part time">Part time</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Department</Label>
              <Select
                value={formData.department}
                onValueChange={(
                  value: 'hr' | 'culinary' | 'administration' | 'housekeeping'
                ) => handleChange('department', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hr">HR</SelectItem>
                  <SelectItem value="culinary">Culinary</SelectItem>
                  <SelectItem value="administration">Administration</SelectItem>
                  <SelectItem value="housekeeping">Housekeeping</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* JOB + OFFICE */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label>Job title</Label>
              <Input
                value={formData.jobTitle}
                onChange={(e) => handleChange('jobTitle', e.target.value)}
                className={
                  errors.jobTitle ? 'border-red-500 focus:ring-red-500' : ''
                }
                placeholder="Enter job title"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label>Office</Label>
              <Input
                value={formData.office}
                onChange={(e) => handleChange('office', e.target.value)}
                className={
                  errors.office ? 'border-red-500 focus:ring-red-500' : ''
                }
                placeholder="Enter office"
              />
            </div>
          </div>

          {/* EMAIL + PHONE */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label>Email</Label>
              <Input
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={
                  errors.email ? 'border-red-500 focus:ring-red-500' : ''
                }
                placeholder="Enter email"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label>Phone</Label>
              <Input
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={
                  errors.phone ? 'border-red-500 focus:ring-red-500' : ''
                }
                placeholder="Enter phone"
              />
            </div>
          </div>

          {/* SHIFT + WORK HOURS */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label>Shift</Label>
              <Select
                value={formData.shift}
                onValueChange={(value: 'morning' | 'evening' | 'night') =>
                  handleChange('shift', value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  className={
                    errors.name ? 'border-red-500 focus:ring-red-500' : ''
                  }
                >
                  <SelectItem value="morning">Morning</SelectItem>
                  <SelectItem value="evening">Evening</SelectItem>
                  <SelectItem value="night">Night</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Total work hours</Label>
              <Input
                type="number"
                value={formData.total_work_hours}
                onChange={(e) =>
                  handleChange('total_work_hours', Number(e.target.value))
                }
                className={
                  errors.total_work_hours
                    ? 'border-red-500 focus:ring-red-500'
                    : ''
                }
                placeholder="Enter total work hours"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <span className="font-semibold">Quarter</span>
            <span className="font-semibold">Attendance</span>
            <span className="font-semibold">Leave</span>
            <span></span>
          </div>

          {formData.attendance.quarters.map((q, index) => (
            <div key={q.quarter} className="grid grid-cols-3 gap-2">
              <Input
                value={q.quarter}
                disabled
                className={
                  errors.name ? 'border-red-500 focus:ring-red-500' : ''
                }
              />
              <Input
                min={1}
                max={100}
                value={q.attendance_days}
                className={
                  errors[`attendance_days_${index}`]
                    ? 'border-red-500 focus:ring-red-500'
                    : ''
                }
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setFormData((prev) => {
                    const updated = [...prev.attendance.quarters];
                    updated[index].attendance_days = value;
                    return {
                      ...prev,
                      attendance: { ...prev.attendance, quarters: updated },
                    };
                  });
                }}
              />

              <Input
                min={0}
                max={100}
                value={q.leave_days}
                className={
                  errors[`leave_days_${index}`]
                    ? 'border-red-500 focus:ring-red-500'
                    : ''
                }
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setFormData((prev) => {
                    const updated = [...prev.attendance.quarters];
                    updated[index].leave_days = value;
                    return {
                      ...prev,
                      attendance: { ...prev.attendance, quarters: updated },
                    };
                  });
                }}
              />
            </div>
          ))}
          <div className="grid grid-cols-2 gap-4">
            <Label htmlFor="total_attendance_days">Total attendance days</Label>
            <Input
              min={1}
              max={400}
              className={err('total_attendance_days')}
              value={formData.attendance.total_attendance_days}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  attendance: {
                    ...prev.attendance,
                    total_attendance_days: Number(e.target.value),
                  },
                }))
              }
            />

            <Label htmlFor="total_attendance_percent">
              Total attendance percent
            </Label>
            <Input
              min={1}
              max={100}
              className={err('attendance_percent')}
              value={formData.attendance.attendance_percent}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  attendance: {
                    ...prev.attendance,
                    attendance_percent: Number(e.target.value),
                  },
                }))
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Label htmlFor="performance_review">Performance review</Label>
            <Input
              value={formData.performance.performance_review}
              className={
                errors.performance_review
                  ? 'border-red-500 focus:ring-red-500'
                  : ''
              }
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  performance: {
                    ...prev.performance,
                    performance_review: Number(e.target.value),
                  },
                }))
              }
            />

            <Label htmlFor="performance_percent">Performance Percent</Label>
            <Input
              min={1}
              max={100}
              id="performance_percent"
              className={errors.name ? 'border-red-500 focus:ring-red-500' : ''}
              value={formData.performance.performance_percent}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  performance: {
                    ...prev.performance,
                    performance_percent: Number(e.target.value),
                  },
                }))
              }
            />
          </div>

          <SheetFooter>
            <Button type="button" onClick={handleSubmit}>
              Save changes
            </Button>

            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
