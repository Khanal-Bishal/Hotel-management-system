import { Star } from 'lucide-react';
import React from 'react';
import { Spacer } from '../common/Spacer';

const HomeBanner = () => {
  return (
    <div className="relative h-96 lg:h-full">
      <div className="relative flex h-full w-full items-center justify-center">
        {/* Gradient shapes background */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/*  gradient shape */}
          <div className="absolute h-72 w-72 rounded-3xl bg-gradient-to-br from-orange-50 via-orange-200 to-orange-600 opacity-70 blur-2xl"></div>
          {/* Red accent */}
          <div className="bg-primary absolute right-0 bottom-10 h-64 w-48 rounded-2xl opacity-60 blur-2xl"></div>
        </div>

        {/* Content with illustration */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Profile cards and dashboard preview mockup */}
          <div className="relative">
            {/* Person image placeholder */}
            <div className="mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-orange-200 to-orange-400 shadow-lg">
              <div className="text-center">
                <div className="text-3xl">👩‍💼</div>
              </div>
            </div>

            {/* Card overlays */}
            <div className="absolute top-1 -right-5 w-32 rounded bg-white p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-orange-600 text-xs">
                  👨‍⚕️
                </div>
                <div>
                  <p className="text-xs text-gray-500">Leader</p>
                </div>
                <Star className="text-primary" />
              </div>
            </div>

            {/* Manager card */}
            <div className="absolute bottom-0 left-0 w-32 rounded bg-white p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-orange-600 text-xs">
                  👨‍💼
                </div>
                <div>
                  <p className="text-xs text-gray-500">Manager</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard preview */}
          <Spacer size="4xs" />
          <div className="w-80 overflow-hidden rounded bg-white shadow-2xl">
            <div className="h-2 bg-gradient-to-r"></div>
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-muted-foreground text-sm font-bold">
                  Dashboard Overview
                </h3>
                <div className="text-xs text-gray-500">Nov 2025</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Attendance Rate</span>
                  <span className="font-semibold">94%</span>
                </div>
                <div className="bg-accent-foreground h-2 w-full rounded-full">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: '94%' }}
                  ></div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded bg-green-50 p-2 text-center">
                  <p className="text-muted-foreground text-xs">Present</p>
                  <p className="text-sm font-bold text-green-600">245</p>
                </div>
                <div className="rounded bg-red-50 p-2 text-center">
                  <p className="text-muted-foreground text-xs">Absent</p>
                  <p className="text-primary text-sm font-bold">15</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Man figure illustration */}
        <div className="absolute -right-10 bottom-0 text-6xl opacity-80">
          🧑‍💼
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
