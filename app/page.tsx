"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Menu, Home as HomeIcon } from "lucide-react"
import TitleSlide from "@/components/slides/title-slide"
import OverviewSlide from "@/components/slides/overview-slide"
import TextSlide from "@/components/slides/components/text-slide"
import ButtonSlide from "@/components/slides/components/button-slide"
import IconButtonSlide from "@/components/slides/components/icon-button-slide"
import OutlinedButtonSlide from "@/components/slides/components/outlined-button-slide"
import InputSlide from "@/components/slides/components/input-slide"
import RadioButtonSlide from "@/components/slides/components/radio-button-slide"
import CheckBoxSlide from "@/components/slides/components/checkbox-slide"
import DropdownSlide from "@/components/slides/components/dropdown-slide"
import SelectorSlide from "@/components/slides/components/selector-slide"
import FormSlide from "@/components/slides/components/form-slide"
import SliderSlide from "@/components/slides/components/slider-slide"
import DividerSlide from "@/components/slides/components/divider-slide"
import DatePickerSlide from "@/components/slides/components/date-picker-slide"
import TimePickerSlide from "@/components/slides/components/time-picker-slide"
import TableSlide from "@/components/slides/components/table-slide"
import ProgressBarSlide from "@/components/slides/components/progress-bar-slide"
import PaddingMarginSlide from "@/components/slides/properties/padding-margin-slide"
import ClickSlide from "@/components/slides/actions/click-slide"
import DragSlide from "@/components/slides/actions/drag-slide"
import GestureSlide from "@/components/slides/actions/gesture-slide"
import KeyboardSlide from "@/components/slides/actions/keyboard-slide"
import CardViewSlide from "@/components/slides/advanced/card-view-slide"
import ListViewSlide from "@/components/slides/advanced/list-view-slide"
import GridViewSlide from "@/components/slides/advanced/grid-view-slide"
import ScrollViewSlide from "@/components/slides/advanced/scroll-view-slide"
import InfiniteScrollSlide from "@/components/slides/advanced/infinite-scroll-slide"
import DrawerSlide from "@/components/slides/advanced/drawer-slide"
import BottomNavigationSlide from "@/components/slides/advanced/bottom-navigation-slide"
import BottomSheetSlide from "@/components/slides/advanced/bottom-sheet-slide"
import AppBarSlide from "@/components/slides/advanced/app-bar-slide"
import TabBarSlide from "@/components/slides/advanced/tab-bar-slide"
import FabSlide from "@/components/slides/advanced/fab-slide"
import SearchBarSlide from "@/components/slides/advanced/search-bar-slide"
import HeroSlide from "@/components/slides/advanced/hero-slide"
import SplashPageSlide from "@/components/slides/advanced/splash-page-slide"
import WebViewSlide from "@/components/slides/advanced/web-view-slide"
import ConclusionSlide from "@/components/slides/conclusion-slide"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { id: "title", component: <TitleSlide /> },
    { id: "overview", component: <OverviewSlide /> },

    // UI 요소
    { id: "text", component: <TextSlide /> },
    { id: "button", component: <ButtonSlide /> },
    { id: "icon-button", component: <IconButtonSlide /> },
    { id: "outlined-button", component: <OutlinedButtonSlide /> },
    { id: "input", component: <InputSlide /> },
    { id: "radio-button", component: <RadioButtonSlide /> },
    { id: "checkbox", component: <CheckBoxSlide /> },
    { id: "dropdown", component: <DropdownSlide /> },
    { id: "selector", component: <SelectorSlide /> },
    { id: "form", component: <FormSlide /> },
    { id: "slider", component: <SliderSlide /> },
    { id: "divider", component: <DividerSlide /> },
    { id: "date-picker", component: <DatePickerSlide /> },
    { id: "time-picker", component: <TimePickerSlide /> },
    { id: "table", component: <TableSlide /> },
    { id: "progress-bar", component: <ProgressBarSlide /> },

    // UI 속성 용어
    { id: "padding-margin", component: <PaddingMarginSlide /> },

    // UI 액션 용어
    { id: "click", component: <ClickSlide /> },
    { id: "drag", component: <DragSlide /> },
    { id: "gesture", component: <GestureSlide /> },
    { id: "keyboard", component: <KeyboardSlide /> },

    // 고급 컴포넌트
    { id: "card-view", component: <CardViewSlide /> },
    { id: "list-view", component: <ListViewSlide /> },
    { id: "grid-view", component: <GridViewSlide /> },
    { id: "scroll-view", component: <ScrollViewSlide /> },
    { id: "infinite-scroll", component: <InfiniteScrollSlide /> },
    { id: "drawer", component: <DrawerSlide /> },
    { id: "bottom-navigation", component: <BottomNavigationSlide /> },
    { id: "bottom-sheet", component: <BottomSheetSlide /> },
    { id: "app-bar", component: <AppBarSlide /> },
    { id: "tab-bar", component: <TabBarSlide /> },
    { id: "fab", component: <FabSlide /> },
    { id: "search-bar", component: <SearchBarSlide /> },
    { id: "hero", component: <HeroSlide /> },
    { id: "splash-page", component: <SplashPageSlide /> },
    { id: "web-view", component: <WebViewSlide /> },

    // 결론
    { id: "conclusion", component: <ConclusionSlide /> },
  ]

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index)
    }
  }

  const goToNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToHome = () => {
    setCurrentSlide(0)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col">
        <div className="flex-1 relative overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide
                  ? "translate-x-0"
                  : index < currentSlide
                    ? "-translate-x-full"
                    : "translate-x-full"
              }`}
            >
              {slide.component}
            </div>
          ))}
        </div>

        <div className="p-4 flex justify-between items-center border-t bg-white">
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={goToHome} aria-label="홈으로">
              <HomeIcon className="h-4 w-4" />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="목차">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent title="목차" side="left" className="w-[300px] sm:w-[400px]">
                <div className="py-4">
                  <h2 className="text-lg font-bold mb-4">목차</h2>
                  <div className="space-y-1 max-h-[calc(100vh-100px)] overflow-y-auto pr-2">
                    {/* 제목 및 개요 */}
                    {slides.slice(0, 2).map((slide, index) => (
                      <Button
                        key={slide.id}
                        variant={currentSlide === index ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => {
                          goToSlide(index)
                        }}
                      >
                        {index + 1}.{" "}
                        {slide.id
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </Button>
                    ))}

                    {/* UI 요소 섹션 */}
                    <div className="pt-2">
                      <h3 className="text-sm font-semibold text-muted-foreground px-4 py-1">UI 요소</h3>
                      <Separator className="my-1" />
                    </div>
                    {slides.slice(2, 20).map((slide, index) => (
                      <Button
                        key={slide.id}
                        variant={currentSlide === index + 2 ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => {
                          goToSlide(index + 2)
                        }}
                      >
                        {index + 3}.{" "}
                        {slide.id
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </Button>
                    ))}

                    {/* UI 속성 용어 섹션 */}
                    <div className="pt-2">
                      <h3 className="text-sm font-semibold text-muted-foreground px-4 py-1">UI 속성 용어</h3>
                      <Separator className="my-1" />
                    </div>
                    {slides.slice(20, 21).map((slide, index) => (
                      <Button
                        key={slide.id}
                        variant={currentSlide === index + 20 ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => {
                          goToSlide(index + 20)
                        }}
                      >
                        {index + 21}.{" "}
                        {slide.id
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </Button>
                    ))}

                    {/* UI 액션 용어 섹션 */}
                    <div className="pt-2">
                      <h3 className="text-sm font-semibold text-muted-foreground px-4 py-1">UI 액션 용어</h3>
                      <Separator className="my-1" />
                    </div>
                    {slides.slice(21, 25).map((slide, index) => (
                      <Button
                        key={slide.id}
                        variant={currentSlide === index + 21 ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => {
                          goToSlide(index + 21)
                        }}
                      >
                        {index + 22}.{" "}
                        {slide.id
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </Button>
                    ))}

                    {/* 고급 컴포넌트 섹션 */}
                    <div className="pt-2">
                      <h3 className="text-sm font-semibold text-muted-foreground px-4 py-1">고급 컴포넌트</h3>
                      <Separator className="my-1" />
                    </div>
                    {slides.slice(25, 38).map((slide, index) => (
                      <Button
                        key={slide.id}
                        variant={currentSlide === index + 25 ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => {
                          goToSlide(index + 25)
                        }}
                      >
                        {index + 26}.{" "}
                        {slide.id
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </Button>
                    ))}

                    {/* 결론 섹션 */}
                    <div className="pt-2">
                      <h3 className="text-sm font-semibold text-muted-foreground px-4 py-1">결론</h3>
                      <Separator className="my-1" />
                    </div>
                    {slides.slice(38).map((slide, index) => (
                      <Button
                        key={slide.id}
                        variant={currentSlide === index + 38 ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => {
                          goToSlide(index + 38)
                        }}
                      >
                        {index + 39}.{" "}
                        {slide.id
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </Button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="text-sm">
            {currentSlide + 1} / {slides.length}
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              disabled={currentSlide === 0}
              aria-label="이전 슬라이드"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              disabled={currentSlide === slides.length - 1}
              aria-label="다음 슬라이드"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
