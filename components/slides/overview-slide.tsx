import SlideLayout from "./slide-layout"

export default function OverviewSlide() {
  return (
    <SlideLayout title="개요">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-[#268052]">UI 요소</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Text, Button, Icon Button</li>
              <li>Input, Radio Button, Check Box</li>
              <li>Dropdown, Selector, Form</li>
              <li>Slider, Divider, Date/Time Picker</li>
              <li>Table, Progress Bar</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-[#268052]">UI 속성 용어</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Padding</li>
              <li>Margin</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-[#268052]">UI 액션 용어</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Click (Tap, Touch)</li>
              <li>Drag</li>
              <li>Gesture</li>
              <li>Keyboard</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-[#268052]">고급 컴포넌트</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Card View, List View, Grid View</li>
              <li>Scroll View, Infinite Scroll</li>
              <li>Drawer, Bottom Navigation, Bottom Sheet</li>
              <li>App Bar, Tab Bar, FAB</li>
              <li>Search Bar, Hero, Splash Page, WebView</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
