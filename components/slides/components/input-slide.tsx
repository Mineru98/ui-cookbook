"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function InputSlide() {
  const [inputType, setInputType] = useState<string>("text")
  const [placeholder, setPlaceholder] = useState<string>("여기에 입력하세요")
  const [value, setValue] = useState<string>("")

  return (
    <SlideLayout title="Input / TextField">
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
                Input(또는 TextField)은 사용자로부터 텍스트 데이터를 입력받는 UI 요소입니다. 다양한 유형의 데이터(텍스트,
                숫자, 이메일, 비밀번호 등)를 수집할 수 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>로그인/회원가입 양식</li>
                <li>검색 필드</li>
                <li>연락처 정보 수집</li>
                <li>설문조사 및 피드백 양식</li>
                <li>결제 정보 입력</li>
                <li>필터링 및 정렬 옵션</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="dart"
                code={`// 기본 입력 필드
TextField(
  decoration: InputDecoration(
    hintText: '이름을 입력하세요',
  ),
),

// 레이블이 있는 입력 필드
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text('이메일'),
    SizedBox(height: 8),
    TextField(
      keyboardType: TextInputType.emailAddress,
      decoration: InputDecoration(
        hintText: '이메일 주소',
      ),
    ),
  ],
),

// 비활성화된 입력 필드
TextField(
  enabled: false,
  controller: TextEditingController(text: '편집할 수 없음'),
),

// 다양한 유형의 입력 필드
TextField(
  obscureText: true, // 비밀번호 필드
  decoration: InputDecoration(
    hintText: '비밀번호',
  ),
),
TextField(
  keyboardType: TextInputType.number, // 숫자 입력
  decoration: InputDecoration(
    hintText: '나이',
  ),
),
TextField(
  readOnly: true,
  controller: TextEditingController(text: '\${DateTime.now().toString().split('T')[0]}'),
  onTap: () async {
    final date = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime(1900),
      lastDate: DateTime(2100),
    );
    // date를 처리하는 코드 추가
  },
),
ElevatedButton(
  onPressed: () async {
    final result = await FilePicker.platform.pickFiles();
    // 파일 처리 로직
  },
  child: Text('파일 선택'),
),

// 이벤트 핸들러가 있는 입력 필드
TextField(
  decoration: InputDecoration(
    hintText: '검색...',
  ),
  onChanged: (value) {
    print(value);
  },
)`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">입력 필드 유형</label>
                  <select
                    value={inputType}
                    onChange={(e) => setInputType(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="text">텍스트 (Text)</option>
                    <option value="password">비밀번호 (Password)</option>
                    <option value="email">이메일 (Email)</option>
                    <option value="number">숫자 (Number)</option>
                    <option value="tel">전화번호 (Tel)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">플레이스홀더</label>
                  <Input
                    type="text"
                    value={placeholder}
                    onChange={(e) => setPlaceholder(e.target.value)}
                    placeholder="플레이스홀더 텍스트 입력"
                  />
                </div>
              </div>

              <div className="p-4 border rounded-md">
                <div className="space-y-2">
                  <Label htmlFor="demo-input">데모 입력 필드</Label>
                  <Input
                    id="demo-input"
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>

                {value && <p className="mt-4 text-sm">입력된 값: {value}</p>}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
