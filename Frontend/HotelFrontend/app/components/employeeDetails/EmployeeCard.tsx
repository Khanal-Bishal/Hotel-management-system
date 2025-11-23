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

interface EmployeeCardProps {
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

const EmployeeCard = ({
  id,
  name,
  jobTitle,
  employmentType,
  department,
  office,
  email,
  phone,
  imgSrc = '',
}: EmployeeCardProps) => {
  const safeName = name || 'Employee';
  const initials = safeName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const getDepartmentIcon = (department: string) => {
    switch (department.toLowerCase()) {
      case 'culinary':
        return <ChefHat className="text-primary size-5" />;

      case 'hr':
        return <Users className="text-primary size-5" />;

      case 'administration':
        return <ClipboardList className="text-primary size-5" />;

      case 'housekeeping':
        return <Home className="text-primary size-5" />;

      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-2xl">
      {/* Header section with gradient background */}
      <div className="p-6"></div>

      {/* Content section */}
      <div className="flex flex-col items-center px-6 pb-6">
        {/* Avatar - positioned to overlap header */}
        <div className="-mt-12 mb-4">
          <AvatarIcon imgSrc="" fallback={initials} />
        </div>

        {/* Name */}
        <h2 className="text-foreground mt-2 text-center text-2xl font-bold">
          {safeName}
        </h2>

        {/* Job Title */}

        {/* Employment Type Badge */}
        <Spacer size="4xs" />
        <div className="flex items-center justify-center gap-1">
          <Badge
            variant="outline"
            className="flex items-center gap-1.5 capitalize"
          >
            {getDepartmentIcon(department)}
            {jobTitle}
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1.5 capitalize"
          >
            <AlarmClockCheck
              size={16}
              className={
                employmentType === 'full time'
                  ? 'fill-green-600 text-green-600'
                  : 'fill-amber-600 text-amber-600'
              }
            />
            {employmentType}
          </Badge>
        </div>

        {/* Contact Info */}
        <div className="border-primary mt-6 flex w-full flex-col items-center space-y-2.5 border-t pt-4">
          {/* Phone */}
          <div className="flex items-center gap-3 text-xs">
            <Phone size={16} className="text-muted-foreground flex-shrink-0" />
            <span className="text-foreground">{phone}</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-xs">
            <Mail size={16} className="text-muted-foreground flex-shrink-0" />
            <span className="text-foreground truncate">{email}</span>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Card>
  );
};

export default EmployeeCard;
