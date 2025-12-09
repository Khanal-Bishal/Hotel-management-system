'use client';

import * as React from 'react';
import { ChevronDownIcon } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { Calendar } from '~/components/ui/calendar';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover';

interface AttendanceTimePickerProps {
  value: string;
  onChange: (value: string) => void;
}

export function AttendanceTimePicker({
  value,
  onChange,
}: AttendanceTimePickerProps) {
  return (
    <input
      type="time"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded border px-2 py-1"
    />
  );
}
