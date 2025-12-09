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
import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Calendar } from '~/components/ui/calendar';
import toast from 'react-hot-toast';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover';
import { createDailyPerformance } from 'src/services/dailyPerformanceService';

interface NewDailyPerformanceSheetProps {
  onSuccess: () => void;
}

export function NewDailyPerformanceSheet({
  onSuccess,
}: {
  onSuccess?: () => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const [formData, setFormData] = React.useState({
    culinary: '',
    administration: '',
    housekeeping: '',
    hr: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date) {
      toast.error('Please select a date');
      return;
    }

    const payload = {
      date: date.toISOString().split('T')[0],
      culinary: Number(formData.culinary),
      administration: Number(formData.administration),
      housekeeping: Number(formData.housekeeping),
      hr: Number(formData.hr),
    };

    setIsSubmitting(true);

    const promise = createDailyPerformance(payload);

    toast.promise(promise, {
      loading: 'Adding performance...',
      success: 'Performance added successfully ',
      error: 'Failed to add performance',
    });

    try {
      await promise;

      setFormData({
        culinary: '',
        administration: '',
        housekeeping: '',
        hr: '',
      });

      setDate(undefined);
      setOpen(false);
      onSuccess?.();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Add Daily Performance</Button>
      </SheetTrigger>

      <SheetContent className="flex max-h-screen flex-col overflow-auto">
        <SheetHeader>
          <SheetTitle>Add daily performance</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="mx-4 flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <Label>Date of performance review</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-48 justify-between font-normal"
                >
                  {date ? date.toLocaleDateString() : 'Select date'}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(d) => {
                    setDate(d);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Culinary</Label>
              <Input
                id="culinary"
                type="number"
                value={formData.culinary}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Administration</Label>
              <Input
                id="administration"
                type="number"
                value={formData.administration}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>HouseKeeping</Label>
              <Input
                id="housekeeping"
                type="number"
                value={formData.housekeeping}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>HR</Label>
              <Input
                id="hr"
                type="number"
                value={formData.hr}
                onChange={handleChange}
              />
            </div>
          </div>

          <SheetFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add performance'}
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
