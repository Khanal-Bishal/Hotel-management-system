import { Badge } from '~/components/ui/badge';
import { Card } from '~/components/ui/card';
import { AlarmClockCheck, Mail, Phone } from 'lucide-react';
import AvatarIcon from '../common/AvatarIcon';
import { Spacer } from '../common/Spacer';
import { getDepartmentIcon } from '../performance/PerformanceRanking';

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
}: EmployeeCardProps) => {
  const safeName = name || 'Employee';
  const initials = safeName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

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
