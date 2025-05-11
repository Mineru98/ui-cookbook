"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function DatePickerSlide() {
  const [date, setDate] = useState<Date>()

  return (
    <SlideLayout title="Date Picker">
      <style jsx global>{`
          div {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }
          div::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
      `}</style>
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">데모</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">정의</h3>
              <p>
                Date Picker는 사용자가 날짜를 선택할 수 있는 캘린더 형태의 UI 요소입니다. 날짜 입력을 직관적이고 사용하기
                쉽게 만들어줍니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>예약 시스템 (호텔, 항공권 등)</li>
                <li>일정 관리 및 캘린더 앱</li>
                <li>이벤트 계획</li>
                <li>생년월일 입력</li>
                <li>날짜 범위 필터</li>
                <li>프로젝트 마감일 설정</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <PrismCode
                language="dart"
                code={`// 기본 날짜 선택기
GestureDetector(
  onTap: () async {
    final DateTime? selectedDate = await showDatePicker(
      context: context,
      initialDate: date ?? DateTime.now(),
      firstDate: DateTime(1900),
      lastDate: DateTime(2100),
    );
    if (selectedDate != null) {
      setState(() {
        date = selectedDate;
      });
    }
  },
  child: Container(
    width: 240,
    padding: EdgeInsets.symmetric(horizontal: 12, vertical: 10),
    decoration: BoxDecoration(
      border: Border.all(color: Colors.grey.shade300),
      borderRadius: BorderRadius.circular(4),
    ),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          date != null 
              ? DateFormat('yyyy년 MM월 dd일').format(date!)
              : '날짜 선택',
        ),
        Icon(Icons.calendar_today, size: 18, color: Colors.grey),
      ],
    ),
  ),
),

// 날짜 범위 선택기
DateRangePickerDialog(
  initialDateRange: dateRange,
  firstDate: DateTime(1900),
  lastDate: DateTime(2100),
  onDateRangeSelected: (DateTimeRange range) {
    setState(() {
      dateRange = range;
    });
  },
),

// 다중 날짜 선택기
CalendarDatePicker(
  initialDate: DateTime.now(),
  firstDate: DateTime(1900),
  lastDate: DateTime(2100),
  selectableDayPredicate: (DateTime day) {
    // 선택된 날짜 목록에 있는지 확인
    return !selectedDates.contains(day);
  },
  onDateChanged: (DateTime date) {
    setState(() {
      if (selectedDates.contains(date)) {
        selectedDates.remove(date);
      } else {
        selectedDates.add(date);
      }
    });
  },
)`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex flex-col items-center space-y-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      {date ? format(date, "PPP", { locale: ko }) : <span>날짜 선택</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>

                {date && (
                  <p className="text-sm">선택된 날짜: {format(date, "yyyy년 MM월 dd일 (EEEE)", { locale: ko })}</p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
