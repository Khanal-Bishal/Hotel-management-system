// import { Badge } from '~/components/ui/badge';
// import {
//   Card,
//   CardAction,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '~/components/ui/card';
// import { AlarmClockCheck, Cookie } from 'lucide-react';
// import { DEPARTMENT } from '~/types/Department';
// import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
// import AvatarIcon from '../common/AvatarIcon';

// interface EmployeeCardProps {
//   id: string | number;
//   name: string;
//   jobTitle: string;
//   employmentType: string;
//   department: string;
//   office: string;
//   email: string;
//   phone: string | number;
//   review: string | number
// }

// const EmployeeCard = ({
//   id,
//   name,
//   jobTitle,
//   employmentType,
//   department,
//   office,
//   email,
//   phone,
//   review
// }: EmployeeCardProps) => {
//   return (
//     <Card className="@container/card">
//       <CardHeader>
//         <AvatarIcon imgSrc="" fallback="BK" />

//         <CardDescription className="capitalize">{jobTitle}</CardDescription>
//         <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl"></CardTitle>
//         <CardAction>
//           <Badge
//             variant="outline"
//             className="text-muted-foreground px-1.5 capitalize"
//           >
//             {employmentType === 'full time' ? (
//               <AlarmClockCheck className="fill-green-600" />
//             ) : (
//               <AlarmClockCheck className="fill-red-500" />
//             )}
//             {employmentType}
//           </Badge>
//         </CardAction>
//       </CardHeader>
//       <CardFooter className="flex-col items-start gap-1.5 text-sm">
//         <div className="line-clamp-1 flex gap-2 font-medium">{department}</div>
//         {department == DEPARTMENT.CULINARY && <Cookie />}
//         <div className="text-muted-foreground">{email}</div>
//         <div className="text-muted-foreground">{phone}</div>
//       </CardFooter>
//     </Card>
//   );
// };

// export default EmployeeCard;

import { Badge } from '~/components/ui/badge';
import { Card, CardDescription } from '~/components/ui/card';
import {
  AlarmClockCheck,
  ChefHat,
  ClipboardList,
  Home,
  Mail,
  Phone,
  Users,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import AvatarIcon from '../common/AvatarIcon';
import { Spacer } from '../common/Spacer';
import { getDepartmentIcon } from '../performance/PerformanceRanking';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet';
import EmployeeCard from './EmployeeCard';

interface EmployeeSheetProps {
  id: string | number;
  name: string;
  jobTitle: string;
  employmentType: string;
  department: string;
  office: string;
  email: string;
  phone: string | number;
  imgSrc?: string;
}

const EmployeeSheet = (employeeDetails: EmployeeSheetProps) => {
  const safeName = employeeDetails.name || 'Employee';
  const initials = safeName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <EmployeeCard {...employeeDetails} />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Employee Details</SheetTitle>
          <SheetDescription>
            <span>
              {safeName} is working {employeeDetails.employmentType} as{' '}
              {employeeDetails.jobTitle} in {employeeDetails.office}.
            </span>
          </SheetDescription>
        </SheetHeader>
        <div className="ca flex items-center justify-center gap-1.5">
          {getDepartmentIcon(employeeDetails.department)}
        </div>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label className="text-primary">Employee Name</Label>
            <Input
              id="sheet-demo-username"
              value={safeName}
              className="uppercase"
              disabled
            />
          </div>
          <div className="grid gap-3">
            <Label className="text-primary">Department</Label>
            <Input
              value={employeeDetails.department}
              className="uppercase"
              disabled
            />
          </div>
          <div className="grid gap-3">
            <Label className="text-primary">Email</Label>
            <Input value={employeeDetails.email} className="" disabled />
          </div>
          <div className="grid gap-3">
            <Label className="text-primary">Phone</Label>
            <Input
              id="sheet-demo-username"
              value={employeeDetails.phone}
              className="pointer-events-none"
              disabled
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="default">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default EmployeeSheet;
