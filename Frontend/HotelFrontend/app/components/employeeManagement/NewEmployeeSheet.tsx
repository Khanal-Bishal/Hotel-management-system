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

export function NewEmployeeSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Create Employee</Button>
      </SheetTrigger>
      <SheetContent className="flex max-h-screen flex-col overflow-auto">
        <SheetHeader>
          <SheetTitle>Create Employee</SheetTitle>
        </SheetHeader>
        <form className="mx-4 flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <Label htmlFor="name">Employee Name</Label>
            <Input id="name" placeholder="Enter name" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="employmentType">Employment Type</Label>
              <Select defaultValue="Full time">
                <SelectTrigger id="employmentType" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full time">Full time</SelectItem>
                  <SelectItem value="Part time">Part time</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="department">Department</Label>
              <Select defaultValue="culinary">
                <SelectTrigger id="department" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hr">HR</SelectItem>
                  <SelectItem value="culinary">Culinary</SelectItem>
                  <SelectItem value="administration">Administration</SelectItem>
                  <SelectItem value="housekeeping">House Keeping</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="department">Job title</Label>
              <Input
                id="department"
                placeholder="Enter job title"
                className=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="office">Office</Label>
              <Input
                id="office"
                placeholder="Enter office"
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter email" className="w-full" />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                placeholder="Enter phone number"
                className="w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="total_attendance_days">
                Total attendance days
              </Label>
              <Input
                id="total_attendance_days"
                type="number"
                placeholder="Enter total attendance days"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="attendance_percent">Attendance percent</Label>
              <Input
                id="attendance_percent"
                placeholder="Attendance percent"
                className="w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="performance_review">Performance Review</Label>
              <Input
                id="performance_review"
                type="number"
                placeholder="Enter performance review"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="performance_percent">Performance Percent</Label>
              <Input
                id="performance_percent"
                placeholder="Enter performance percent"
                className="w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="shift">Shift</Label>
              <Select defaultValue="morning">
                <SelectTrigger id="shift" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning</SelectItem>
                  <SelectItem value="evening">Evening</SelectItem>
                  <SelectItem value="night">Night</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="total_work_hours">Total work hours</Label>
              <Input
                id="total_work_hours"
                placeholder="Enter total work hour"
                className="w-full"
              />
            </div>
          </div>
        </form>
        {/* </div> */}
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
