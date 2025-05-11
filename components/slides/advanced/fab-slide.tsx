"use client"

import SlideLayout from "../slide-layout"
import { useState } from "react"
import { Plus, MessageSquare, Mail, Phone, Share2, X } from "lucide-react"
import { PrismCode } from "../../ui/prism/PrismCode"

export default function FabSlide() {
  const [fabType, setFabType] = useState<"basic" | "extended" | "mini" | "speed-dial">("basic")
  const [isSpeedDialOpen, setIsSpeedDialOpen] = useState(false)
  
  const renderFAB = () => {
    switch (fabType) {
      case "extended":
        return (
          <div className="relative h-48 bg-gray-50 border rounded-lg p-4 flex items-end justify-end">
            <button 
              className="px-4 py-3 bg-[#268052] text-white rounded-full shadow-lg flex items-center"
            >
              <Plus className="h-5 w-5 mr-2" />
              <span className="font-medium text-sm">새 항목 추가</span>
            </button>
          </div>
        );
        
      case "mini":
        return (
          <div className="relative h-48 bg-gray-50 border rounded-lg p-4 flex items-end justify-end">
            <button 
              className="p-2 bg-[#268052] text-white rounded-full shadow-lg flex items-center justify-center"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        );
        
      case "speed-dial":
        return (
          <div className="relative h-48 bg-gray-50 border rounded-lg p-4 flex items-end justify-end">
            {isSpeedDialOpen && (
              <div className="absolute bottom-20 right-4 flex flex-col items-center gap-3 mb-2">
                <div className="flex items-center">
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                    메시지
                  </span>
                  <button className="p-3 bg-blue-500 text-white rounded-full shadow-md">
                    <MessageSquare className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                    이메일
                  </span>
                  <button className="p-3 bg-red-500 text-white rounded-full shadow-md">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                    전화
                  </span>
                  <button className="p-3 bg-green-500 text-white rounded-full shadow-md">
                    <Phone className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                    공유
                  </span>
                  <button className="p-3 bg-purple-500 text-white rounded-full shadow-md">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
            <button 
              className="p-4 bg-[#268052] text-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-200"
              onClick={() => setIsSpeedDialOpen(!isSpeedDialOpen)}
            >
              {isSpeedDialOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Plus className="h-6 w-6" />
              )}
            </button>
          </div>
        );
        
      default: // basic
        return (
          <div className="relative h-48 bg-gray-50 border rounded-lg p-4 flex items-end justify-end">
            <button 
              className="p-4 bg-[#268052] text-white rounded-full shadow-lg flex items-center justify-center"
            >
              <Plus className="h-6 w-6" />
            </button>
          </div>
        );
    }
  };

  const getDartCode = () => {
    switch (fabType) {
      case "extended":
        return `import 'package:flutter/material.dart';

class ExtendedFabExample extends StatelessWidget {
  const ExtendedFabExample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text('화면 콘텐츠'),
      ),
      floatingActionButton: FloatingActionButton.extended(
        backgroundColor: Color(0xFF268052),
        onPressed: () {
          // 버튼 클릭 시 실행할 코드
        },
        icon: Icon(Icons.add),
        label: Text('새 항목 추가'),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
    );
  }
}`;
        
      case "mini":
        return `import 'package:flutter/material.dart';

class MiniFabExample extends StatelessWidget {
  const MiniFabExample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text('화면 콘텐츠'),
      ),
      floatingActionButton: SizedBox(
        width: 40.0, // 미니 FAB 크기
        height: 40.0,
        child: FloatingActionButton(
          backgroundColor: Color(0xFF268052),
          mini: true,
          onPressed: () {
            // 버튼 클릭 시 실행할 코드
          },
          child: Icon(
            Icons.add,
            size: 20.0,
          ),
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
    );
  }
}`;
        
      case "speed-dial":
        return `import 'package:flutter/material.dart';

class SpeedDialFabExample extends StatefulWidget {
  const SpeedDialFabExample({Key? key}) : super(key: key);

  @override
  _SpeedDialFabExampleState createState() => _SpeedDialFabExampleState();
}

class _SpeedDialFabExampleState extends State<SpeedDialFabExample> {
  bool _isDialOpen = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text('화면 콘텐츠'),
      ),
      floatingActionButton: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // 스피드 다이얼 옵션들
          if (_isDialOpen) ...[
            _buildFabOption(
              icon: Icons.message,
              label: '메시지',
              color: Colors.blue,
              onTap: () {
                // 메시지 기능 실행
              },
            ),
            SizedBox(height: 12),
            _buildFabOption(
              icon: Icons.mail,
              label: '이메일',
              color: Colors.red,
              onTap: () {
                // 이메일 기능 실행
              },
            ),
            SizedBox(height: 12),
            _buildFabOption(
              icon: Icons.phone,
              label: '전화',
              color: Colors.green,
              onTap: () {
                // 전화 기능 실행
              },
            ),
            SizedBox(height: 12),
            _buildFabOption(
              icon: Icons.share,
              label: '공유',
              color: Colors.purple,
              onTap: () {
                // 공유 기능 실행
              },
            ),
            SizedBox(height: 16),
          ],
          // 메인 FAB
          FloatingActionButton(
            backgroundColor: Color(0xFF268052),
            onPressed: () {
              setState(() {
                _isDialOpen = !_isDialOpen;
              });
            },
            child: Icon(
              _isDialOpen ? Icons.close : Icons.add,
            ),
          ),
        ],
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
    );
  }

  Widget _buildFabOption({
    required IconData icon,
    required String label,
    required Color color,
    required VoidCallback onTap,
  }) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        // 라벨
        Container(
          padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
          decoration: BoxDecoration(
            color: Colors.black87,
            borderRadius: BorderRadius.circular(4),
          ),
          child: Text(
            label,
            style: TextStyle(color: Colors.white, fontSize: 12),
          ),
        ),
        SizedBox(width: 8),
        // 버튼
        FloatingActionButton(
          mini: true,
          backgroundColor: color,
          onPressed: onTap,
          child: Icon(icon, size: 18),
        ),
      ],
    );
  }
}`;
        
      default: // basic
        return `import 'package:flutter/material.dart';

class BasicFabExample extends StatelessWidget {
  const BasicFabExample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text('화면 콘텐츠'),
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: Color(0xFF268052),
        onPressed: () {
          // 버튼 클릭 시 실행할 코드
        },
        child: Icon(Icons.add),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
    );
  }
}`;
    }
  };
  
  return (
    <SlideLayout title="FloatingActionButton (FAB)">
      <style jsx global>{`
          div {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }
          div::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
      `}</style>
      <div className="space-y-8 max-h-[calc(100vh-12rem)] overflow-y-auto">
        <div className="prose max-w-none mb-6">
          <h2 className="text-xl font-semibold mb-3">정의</h2>
          <p>
            Floating Action Button(FAB)은 화면 위에 떠 있는 원형 버튼으로, 사용자가 앱에서 취할 수 있는 
            주요 액션을 나타냅니다. 일반적으로 화면의 오른쪽 하단이나 중앙 하단에 위치하며, 
            가장 중요하거나 자주 사용하는 작업에 빠르게 접근할 수 있게 합니다.
          </p>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-center mb-6 flex-wrap gap-2">
            <button
              className={`px-3 py-1.5 rounded text-sm ${fabType === "basic" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setFabType("basic")}
            >
              기본형
            </button>
            <button
              className={`px-3 py-1.5 rounded text-sm ${fabType === "extended" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setFabType("extended")}
            >
              확장형
            </button>
            <button
              className={`px-3 py-1.5 rounded text-sm ${fabType === "mini" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setFabType("mini")}
            >
              미니형
            </button>
            <button
              className={`px-3 py-1.5 rounded text-sm ${fabType === "speed-dial" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setFabType("speed-dial")}
            >
              스피드 다이얼
            </button>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            {/* FAB 렌더링 */}
            {renderFAB()}
            
            {/* 설명 */}
            <div className="p-4 bg-white">
              <h3 className="font-medium mb-2">
                {fabType === "basic" 
                  ? "기본 FAB" 
                  : fabType === "extended" 
                    ? "확장형 FAB" 
                    : fabType === "mini" 
                      ? "미니 FAB" 
                      : "스피드 다이얼 FAB"}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {fabType === "basic" 
                  ? "일반적인 크기의 원형 버튼으로 아이콘만 표시합니다." 
                  : fabType === "extended" 
                    ? "텍스트와 아이콘을 함께 표시하는 확장된 형태의 FAB입니다." 
                    : fabType === "mini" 
                      ? "더 작은 크기의 FAB로 보조 액션에 사용됩니다." 
                      : "클릭 시 여러 관련 액션을 표시하는 확장 가능한 FAB입니다."}
              </p>
              
              <div className="bg-gray-50 p-3 rounded-md border text-sm">
                <strong>사용 예시:</strong>
                <p className="mt-1">
                  {fabType === "basic" 
                    ? "새 메시지 작성, 새 항목 추가 등 주요 액션" 
                    : fabType === "extended" 
                      ? "새 문서 만들기, 검색 시작하기 등 명확한 레이블이 필요한 경우" 
                      : fabType === "mini" 
                        ? "주요 FAB 옆에서 보조 액션 제공 또는 공간이 제한된 경우" 
                        : "연락처 공유, 소셜 미디어 공유 등 여러 관련 옵션이 필요한 경우"}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Flutter 구현 코드</h3>
            <div className="overflow-x-auto rounded-lg">
              <PrismCode code={getDartCode()} language="dart" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-slate-50 rounded-md">
              <h3 className="text-lg font-medium mb-2">FAB 유형</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>기본형 (Regular FAB)</strong>
                  <p className="text-sm text-gray-600">지름 56dp의 표준 크기, 주요 액션에 사용</p>
                </li>
                <li>
                  <strong>미니형 (Mini FAB)</strong>
                  <p className="text-sm text-gray-600">지름 40dp의 작은 크기, 보조 액션에 사용</p>
                </li>
                <li>
                  <strong>확장형 (Extended FAB)</strong>
                  <p className="text-sm text-gray-600">텍스트와 아이콘을 함께 표시하는 직사각형 형태</p>
                </li>
                <li>
                  <strong>스피드 다이얼 (Speed Dial)</strong>
                  <p className="text-sm text-gray-600">클릭 시 여러 관련 액션을 보여주는 확장 가능 FAB</p>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-md">
              <h3 className="text-lg font-medium mb-2">위치 및 동작</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>일반적으로 오른쪽 하단이나 중앙 하단에 위치</li>
                <li>스크롤 시에도 항상 보이도록 고정 위치 사용</li>
                <li>화면 간 이동 시 일관된 위치 유지</li>
                <li>탭 전환 시 FAB 액션이 변경될 수 있음</li>
                <li>FAB는 화면에 표시된 내용과 관련된 액션 제공</li>
                <li>접근성을 위한 충분한 터치 영역 확보</li>
                <li>시각적 피드백과 애니메이션으로 상호작용 강화</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md">
          <h3 className="text-lg font-medium mb-2 text-[#268052]">디자인 권장사항</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>
              <strong>Z-축 그림자</strong>
              <p className="text-sm">FAB의 떠 있는 효과를 강조하기 위해 그림자 적용</p>
            </li>
            <li>
              <strong>명확한 아이콘 사용</strong>
              <p className="text-sm">FAB의 기능을 직관적으로 이해할 수 있는 아이콘 선택</p>
            </li>
            <li>
              <strong>사용자 인터페이스 일관성</strong>
              <p className="text-sm">애플리케이션의 브랜드 색상과 디자인 언어 유지</p>
            </li>
            <li>
              <strong>애니메이션 효과</strong>
              <p className="text-sm">클릭, 호버, 확장 시 부드러운 애니메이션 적용</p>
            </li>
            <li>
              <strong>모바일 최적화</strong>
              <p className="text-sm">터치 조작에 최적화된 크기와 간격 확보</p>
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
} 