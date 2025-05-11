"use client"

import SlideLayout from "../slide-layout"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { PrismCode } from "../../ui/prism/PrismCode"

export default function HeroSlide() {
  const [heroType, setHeroType] = useState<"basic" | "centered" | "split" | "video">("basic")
  
  const renderHero = () => {
    switch (heroType) {
      case "centered":
        return (
          <div className="relative">
            <div className="h-64 bg-gradient-to-r from-[#268052] to-[#134429] flex items-center justify-center">
              <div className="text-center text-white p-6 max-w-lg mx-auto">
                <h2 className="text-2xl font-bold mb-2">중앙 정렬 히어로 섹션</h2>
                <p className="text-white/80 mb-4 text-sm">
                  중요한 내용이나 주목을 끌어야 하는 정보를 중앙에 배치해 강조하는 히어로 섹션입니다. 
                  브랜드 메시지나 주요 마케팅 카피에 적합합니다.
                </p>
                <button className="bg-white text-[#268052] px-4 py-2 rounded-md font-medium text-sm">
                  자세히 알아보기
                </button>
              </div>
            </div>
          </div>
        );
        
      case "split":
        return (
          <div className="relative">
            <div className="h-64 bg-white flex flex-col md:flex-row">
              <div className="flex-1 bg-[#268052] flex items-center justify-center p-6">
                <div className="text-white max-w-xs">
                  <h2 className="text-xl font-bold mb-2">분할 히어로 섹션</h2>
                  <p className="text-white/80 mb-4 text-sm">
                    텍스트와 이미지를 나란히 배치하여 내용과 시각적 요소의 균형을 맞춘 히어로 섹션입니다.
                  </p>
                  <button className="text-white border border-white px-4 py-2 rounded-md font-medium text-sm flex items-center">
                    더 보기
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-gray-200 flex items-center justify-center">
                <div className="p-6 text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mb-3 mx-auto flex items-center justify-center">
                    <span className="text-3xl text-gray-500">🖼️</span>
                  </div>
                  <p className="text-gray-500 text-sm">이미지 또는 비디오 영역</p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "video":
        return (
          <div className="relative">
            <div className="h-64 bg-gray-800 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <span className="text-4xl text-gray-500">📹</span>
                </div>
              </div>
              
              <div className="relative z-20 text-white text-center max-w-lg mx-auto p-6">
                <h2 className="text-2xl font-bold mb-2">비디오 배경 히어로</h2>
                <p className="text-white/80 mb-4 text-sm">
                  움직이는 영상을 배경으로 활용하여 사용자의 주목을 끌고 역동적인 느낌을 전달합니다.
                </p>
                <button className="bg-[#268052] text-white px-4 py-2 rounded-md font-medium text-sm">
                  시작하기
                </button>
              </div>
            </div>
          </div>
        );
        
      default: // basic
        return (
          <div className="relative">
            <div className="h-64 bg-gray-200 flex items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#268052]/90 to-transparent z-10"></div>
              
              <div className="absolute inset-0">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-4xl text-gray-500">🏞️</span>
                </div>
              </div>
              
              <div className="relative z-20 text-white p-6 max-w-lg">
                <h2 className="text-2xl font-bold mb-2">기본 히어로 섹션</h2>
                <p className="text-white/80 mb-4 text-sm">
                  웹사이트의 첫인상을 결정하는 히어로 섹션은 방문자의 주의를 끌고 핵심 메시지를 효과적으로 전달합니다.
                </p>
                <button className="bg-white text-[#268052] px-4 py-2 rounded-md font-medium text-sm">
                  자세히 보기
                </button>
              </div>
            </div>
          </div>
        );
    }
  };
  
  return (
    <SlideLayout title="Hero (히어로)">
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
            히어로(Hero)는 웹사이트나 앱의 첫 화면에 위치하는 대형 배너 영역으로, 사용자의 주목을 끌고 
            핵심 메시지를 전달하는 역할을 합니다. 일반적으로 강렬한 이미지, 동영상, 또는 그래픽 요소와 함께 
            헤드라인, 간결한 설명, 그리고 행동 유도 버튼(CTA)으로 구성됩니다.
          </p>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-center mb-6 flex-wrap gap-2">
            <button
              className={`px-3 py-1.5 rounded text-sm ${heroType === "basic" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setHeroType("basic")}
            >
              기본형
            </button>
            <button
              className={`px-3 py-1.5 rounded text-sm ${heroType === "centered" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setHeroType("centered")}
            >
              중앙 정렬형
            </button>
            <button
              className={`px-3 py-1.5 rounded text-sm ${heroType === "split" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setHeroType("split")}
            >
              분할형
            </button>
            <button
              className={`px-3 py-1.5 rounded text-sm ${heroType === "video" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setHeroType("video")}
            >
              비디오형
            </button>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            {/* 히어로 렌더링 */}
            {renderHero()}
            
            {/* 설명 */}
            <div className="p-4 bg-white">
              <h3 className="font-medium mb-2">
                {heroType === "basic" 
                  ? "기본 히어로" 
                  : heroType === "centered" 
                    ? "중앙 정렬 히어로" 
                    : heroType === "split" 
                      ? "분할 히어로" 
                      : "비디오 배경 히어로"}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {heroType === "basic" 
                  ? "배경 이미지와 왼쪽 정렬된 텍스트가 있는 전통적인 히어로 섹션입니다. 대부분의 웹사이트에서 범용적으로 사용됩니다." 
                  : heroType === "centered" 
                    ? "모든 콘텐츠가 중앙에 정렬되어 집중도를 높이는 디자인입니다. 심플하고 강력한 메시지 전달에 효과적입니다." 
                    : heroType === "split" 
                      ? "화면을 반으로 나누어 한쪽은 텍스트, 다른 쪽은 이미지를 배치한 디자인입니다. 콘텐츠와 시각 요소의 균형을 중시합니다." 
                      : "배경에 동영상을 사용하여 역동적이고 몰입감 있는 첫 화면을 제공합니다. 브랜드 스토리텔링에 효과적입니다."}
              </p>
              
              <div className="bg-gray-50 p-3 rounded-md border text-sm">
                <strong>사용 시 고려사항:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>메시지는 간결하고 명확하게 작성</li>
                  <li>모바일 화면에 최적화된 반응형 디자인 적용</li>
                  <li>로딩 시간 최적화 (특히 비디오 배경 사용 시)</li>
                  <li>핵심 내용이 시각적 요소에 가려지지 않도록 주의</li>
                  <li>명확하고 눈에 띄는 행동 유도 버튼(CTA) 배치</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-slate-50 rounded-md">
              <h3 className="text-lg font-medium mb-2">히어로 섹션 유형</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>기본형 (Basic Hero)</strong>
                  <p className="text-sm text-gray-600">배경 이미지와 텍스트 오버레이를 사용한 기본 형태</p>
                </li>
                <li>
                  <strong>중앙 정렬형 (Centered Hero)</strong>
                  <p className="text-sm text-gray-600">모든 요소가 중앙에 정렬된 단순하고 집중적인 디자인</p>
                </li>
                <li>
                  <strong>분할형 (Split Hero)</strong>
                  <p className="text-sm text-gray-600">화면을 양분하여 텍스트와 이미지를 균등하게 배치</p>
                </li>
                <li>
                  <strong>비디오형 (Video Hero)</strong>
                  <p className="text-sm text-gray-600">움직이는 영상을 배경으로 사용하여 몰입감 제공</p>
                </li>
                <li>
                  <strong>풀스크린형 (Fullscreen Hero)</strong>
                  <p className="text-sm text-gray-600">화면 전체를 채우는 대형 히어로 섹션</p>
                </li>
                <li>
                  <strong>애니메이션형 (Animated Hero)</strong>
                  <p className="text-sm text-gray-600">동적 요소와 애니메이션을 활용한 인터랙티브 디자인</p>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-md">
              <h3 className="text-lg font-medium mb-2">주요 구성 요소</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>헤드라인 (Headline)</strong>
                  <p className="text-sm text-gray-600">주요 메시지를 담은 강력하고 간결한 제목</p>
                </li>
                <li>
                  <strong>서브헤드라인 (Subheadline)</strong>
                  <p className="text-sm text-gray-600">헤드라인을 보완하는 부연 설명</p>
                </li>
                <li>
                  <strong>CTA 버튼 (Call-to-Action)</strong>
                  <p className="text-sm text-gray-600">사용자의 다음 행동을 유도하는 버튼</p>
                </li>
                <li>
                  <strong>배경 이미지/비디오 (Background)</strong>
                  <p className="text-sm text-gray-600">주의를 끌고 메시지를 강화하는 시각적 요소</p>
                </li>
                <li>
                  <strong>오버레이 (Overlay)</strong>
                  <p className="text-sm text-gray-600">텍스트의 가독성을 높이기 위한 반투명 레이어</p>
                </li>
                <li>
                  <strong>내비게이션 요소 (Navigation)</strong>
                  <p className="text-sm text-gray-600">때로는 히어로 섹션 내에 포함되는 내비게이션 컴포넌트</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md">
          <h3 className="text-lg font-medium mb-2 text-[#268052]">효과적인 히어로 섹션 디자인 팁</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>
              <strong>명확한 목적 정의</strong>
              <p className="text-sm">히어로 섹션이 전달하고자 하는 핵심 메시지와 목표를 명확히 설정</p>
            </li>
            <li>
              <strong>시각적 계층 구조 확립</strong>
              <p className="text-sm">중요한 요소를 시각적으로 강조하여 사용자의 시선 유도</p>
            </li>
            <li>
              <strong>간결하고 강력한 복사 작성</strong>
              <p className="text-sm">불필요한 단어 없이 핵심 메시지를 명확하게 전달</p>
            </li>
            <li>
              <strong>고품질 이미지 사용</strong>
              <p className="text-sm">브랜드 이미지에 맞는 전문적이고 관련성 높은 시각적 요소 선택</p>
            </li>
            <li>
              <strong>모바일 최적화</strong>
              <p className="text-sm">다양한 화면 크기에서 효과적으로 작동하는 반응형 디자인 적용</p>
            </li>
            <li>
              <strong>로딩 시간 최적화</strong>
              <p className="text-sm">이미지 최적화 및 점진적 로딩 기법으로 성능 향상</p>
            </li>
            <li>
              <strong>A/B 테스트 실시</strong>
              <p className="text-sm">다양한 디자인 변형을 테스트하여 최적의 성과 도출</p>
            </li>
          </ul>
        </div>

        {/* 히어로 섹션 추가 내용 */}
        <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md mt-6">
          <h3 className="text-lg font-medium mb-2 text-[#268052]">Flutter 구현 코드</h3>
          <PrismCode
            language="dart"
            code={`// ${heroType === "basic" 
              ? "기본 히어로 섹션" 
              : heroType === "centered" 
                ? "중앙 정렬 히어로 섹션" 
                : heroType === "split" 
                  ? "분할 히어로 섹션" 
                  : "비디오 배경 히어로 섹션"} 구현

import 'package:flutter/material.dart';

class ${heroType === "basic" 
        ? "BasicHero" 
        : heroType === "centered" 
          ? "CenteredHero" 
          : heroType === "split" 
            ? "SplitHero" 
            : "VideoHero"} extends StatelessWidget {
  const ${heroType === "basic" 
        ? "BasicHero" 
        : heroType === "centered" 
          ? "CenteredHero" 
          : heroType === "split" 
            ? "SplitHero" 
            : "VideoHero"}({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    ${heroType === "basic" ? `return Container(
      height: 400,
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage('assets/images/background.jpg'),
          fit: BoxFit.cover,
        ),
      ),
      child: Stack(
        children: [
          // 그라디언트 오버레이
          Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.centerLeft,
                end: Alignment.centerRight,
                colors: [
                  Color(0xFF268052).withOpacity(0.9),
                  Colors.transparent,
                ],
              ),
            ),
          ),
          
          // 콘텐츠
          Padding(
            padding: const EdgeInsets.all(24.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                SizedBox(
                  width: MediaQuery.of(context).size.width * 0.6,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        '기본 히어로 섹션',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 28,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      SizedBox(height: 12),
                      Text(
                        '웹사이트의 첫인상을 결정하는 히어로 섹션은 방문자의 주의를 끌고 핵심 메시지를 효과적으로 전달합니다.',
                        style: TextStyle(
                          color: Colors.white.withOpacity(0.8),
                          fontSize: 16,
                        ),
                      ),
                      SizedBox(height: 24),
                      ElevatedButton(
                        onPressed: () {
                          // 자세히 보기 액션
                        },
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.white,
                          foregroundColor: Color(0xFF268052),
                          padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                        ),
                        child: Text('자세히 보기'),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );`
    : heroType === "centered" ? `return Container(
      height: 400,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.centerLeft,
          end: Alignment.centerRight,
          colors: [
            Color(0xFF268052),
            Color(0xFF134429),
          ],
        ),
      ),
      child: Center(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                '중앙 정렬 히어로 섹션',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                ),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 12),
              Container(
                constraints: BoxConstraints(maxWidth: 480),
                child: Text(
                  '중요한 내용이나 주목을 끌어야 하는 정보를 중앙에 배치해 강조하는 히어로 섹션입니다. 브랜드 메시지나 주요 마케팅 카피에 적합합니다.',
                  style: TextStyle(
                    color: Colors.white.withOpacity(0.8),
                    fontSize: 16,
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
              SizedBox(height: 24),
              ElevatedButton(
                onPressed: () {
                  // 자세히 알아보기 액션
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.white,
                  foregroundColor: Color(0xFF268052),
                  padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                ),
                child: Text('자세히 알아보기'),
              ),
            ],
          ),
        ),
      ),
    );`
    : heroType === "split" ? `return Container(
      height: 400,
      color: Colors.white,
      child: Row(
        children: [
          // 왼쪽 텍스트 영역
          Expanded(
            child: Container(
              color: Color(0xFF268052),
              padding: EdgeInsets.all(32),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    '분할 히어로 섹션',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 12),
                  Text(
                    '텍스트와 이미지를 나란히 배치하여 내용과 시각적 요소의 균형을 맞춘 히어로 섹션입니다.',
                    style: TextStyle(
                      color: Colors.white.withOpacity(0.8),
                      fontSize: 16,
                    ),
                  ),
                  SizedBox(height: 24),
                  OutlinedButton.icon(
                    onPressed: () {
                      // 더 보기 액션
                    },
                    style: OutlinedButton.styleFrom(
                      side: BorderSide(color: Colors.white),
                      foregroundColor: Colors.white,
                      padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                    ),
                    icon: Text('더 보기'),
                    label: Icon(Icons.arrow_forward, size: 16),
                  ),
                ],
              ),
            ),
          ),
          
          // 오른쪽 이미지 영역
          Expanded(
            child: Container(
              color: Colors.grey[200],
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      width: 96,
                      height: 96,
                      decoration: BoxDecoration(
                        color: Colors.grey[300],
                        shape: BoxShape.circle,
                      ),
                      child: Center(
                        child: Text(
                          '🖼️',
                          style: TextStyle(fontSize: 36),
                        ),
                      ),
                    ),
                    SizedBox(height: 12),
                    Text(
                      '이미지 또는 비디오 영역',
                      style: TextStyle(
                        color: Colors.grey[500],
                        fontSize: 14,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );`
    : `return Container(
      height: 400,
      child: Stack(
        children: [
          // 비디오 배경 (실제 앱에서는 VideoPlayer 위젯 사용)
          Container(
            color: Colors.black,
            child: Center(
              child: Text(
                '📹',
                style: TextStyle(fontSize: 48, color: Colors.grey[500]),
              ),
            ),
          ),
          
          // 오버레이 그라디언트
          Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [
                  Colors.transparent,
                  Colors.black.withOpacity(0.7),
                ],
              ),
            ),
          ),
          
          // 콘텐츠
          Center(
            child: Padding(
              padding: const EdgeInsets.all(24.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    '비디오 배경 히어로',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 28,
                      fontWeight: FontWeight.bold,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  SizedBox(height: 12),
                  Container(
                    constraints: BoxConstraints(maxWidth: 480),
                    child: Text(
                      '움직이는 영상을 배경으로 활용하여 사용자의 주목을 끌고 역동적인 느낌을 전달합니다.',
                      style: TextStyle(
                        color: Colors.white.withOpacity(0.8),
                        fontSize: 16,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),
                  SizedBox(height: 24),
                  ElevatedButton(
                    onPressed: () {
                      // 시작하기 액션
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Color(0xFF268052),
                      foregroundColor: Colors.white,
                      padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                    ),
                    child: Text('시작하기'),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );`}
  }
}`}
          />
        </div>
      </div>
    </SlideLayout>
  )
} 