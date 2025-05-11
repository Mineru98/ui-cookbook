"use client"

import SlideLayout from "../slide-layout"
import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"
import { PrismCode } from "@/components/ui/prism/PrismCode"

// Dart 코드 예제를 위한 컴포넌트
const DartCodeExamples = () => {
  // 기본형 스플래시 코드
  const basicSplashCode = `import 'package:flutter/material.dart';

class BasicSplashScreen extends StatelessWidget {
  const BasicSplashScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              width: 80,
              height: 80,
              decoration: BoxDecoration(
                color: const Color(0xFF268052),
                borderRadius: BorderRadius.circular(12),
              ),
              child: const Center(
                child: Text(
                  'APP',
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 20,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 16),
            const Text(
              '앱 이름',
              style: TextStyle(
                fontWeight: FontWeight.w500,
                color: Colors.black87,
              ),
            ),
            const SizedBox(height: 16),
            const SizedBox(
              width: 20,
              height: 20,
              child: CircularProgressIndicator(
                strokeWidth: 2,
                valueColor: AlwaysStoppedAnimation<Color>(Colors.black45),
              ),
            ),
          ],
        ),
      ),
    );
  }
}`;

  // 애니메이션형 스플래시 코드
  const animatedSplashCode = `import 'package:flutter/material.dart';

class AnimatedSplashScreen extends StatefulWidget {
  const AnimatedSplashScreen({Key? key}) : super(key: key);

  @override
  State<AnimatedSplashScreen> createState() => _AnimatedSplashScreenState();
}

class _AnimatedSplashScreenState extends State<AnimatedSplashScreen>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _bounceAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1500),
    )..repeat(reverse: true);

    _bounceAnimation = Tween<double>(begin: 0, end: 20).animate(
      CurvedAnimation(
        parent: _controller,
        curve: Curves.easeInOut,
      ),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topRight,
            end: Alignment.bottomLeft,
            colors: [
              Color(0xFF268052),
              Color(0xFF134429),
            ],
          ),
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              AnimatedBuilder(
                animation: _bounceAnimation,
                builder: (context, child) {
                  return Transform.translate(
                    offset: Offset(0, -_bounceAnimation.value),
                    child: child,
                  );
                },
                child: Container(
                  width: 80,
                  height: 80,
                  decoration: const BoxDecoration(
                    color: Colors.white,
                    shape: BoxShape.circle,
                  ),
                  child: const Center(
                    child: Text(
                      'LOGO',
                      style: TextStyle(
                        color: Color(0xFF268052),
                        fontWeight: FontWeight.bold,
                        fontSize: 18,
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 24),
              FadeTransition(
                opacity: _controller,
                child: const Text(
                  '애니메이션 스플래시',
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w500,
                    fontSize: 16,
                  ),
                ),
              ),
              const SizedBox(height: 8),
              FadeTransition(
                opacity: _controller,
                child: const Text(
                  '앱 로딩 중...',
                  style: TextStyle(
                    color: Colors.white70,
                    fontSize: 14,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`;

  // 진행률형 스플래시 코드
  const progressSplashCode = `import 'package:flutter/material.dart';
import 'dart:async';

class ProgressSplashScreen extends StatefulWidget {
  const ProgressSplashScreen({Key? key}) : super(key: key);

  @override
  State<ProgressSplashScreen> createState() => _ProgressSplashScreenState();
}

class _ProgressSplashScreenState extends State<ProgressSplashScreen> {
  double _progress = 0;
  late Timer _timer;

  @override
  void initState() {
    super.initState();
    _startLoading();
  }

  @override
  void dispose() {
    _timer.cancel();
    super.dispose();
  }

  void _startLoading() {
    _timer = Timer.periodic(const Duration(milliseconds: 300), (timer) {
      setState(() {
        if (_progress < 100) {
          _progress += 10;
        } else {
          _timer.cancel();
          // 여기서 홈 화면으로 이동
          // Navigator.of(context).pushReplacement(...);
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF4F4F4),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              width: 80,
              height: 80,
              decoration: const BoxDecoration(
                color: Color(0xFF268052),
                shape: BoxShape.circle,
              ),
              child: const Center(
                child: Text(
                  'UI',
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 20,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 24),
            Text(
              '\${_progress.toInt()}% 완료',
              style: const TextStyle(
                color: Color(0xFF268052),
                fontWeight: FontWeight.w500,
              ),
            ),
            const SizedBox(height: 8),
            SizedBox(
              width: 200,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(8),
                child: LinearProgressIndicator(
                  value: _progress / 100,
                  backgroundColor: Colors.grey.shade200,
                  valueColor: const AlwaysStoppedAnimation<Color>(Color(0xFF268052)),
                  minHeight: 8,
                ),
              ),
            ),
            const SizedBox(height: 8),
            const Text(
              '리소스 로딩 중...',
              style: TextStyle(
                color: Colors.grey,
                fontSize: 14,
              ),
            ),
          ],
        ),
      ),
    );
  }
}`;

  // 브랜딩형 스플래시 코드
  const brandedSplashCode = `import 'package:flutter/material.dart';

class BrandedSplashScreen extends StatelessWidget {
  const BrandedSplashScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF268052),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              width: 100,
              height: 100,
              decoration: const BoxDecoration(
                color: Colors.white,
                shape: BoxShape.circle,
              ),
              child: const Center(
                child: Text(
                  'UI',
                  style: TextStyle(
                    color: Color(0xFF268052),
                    fontWeight: FontWeight.bold,
                    fontSize: 24,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 16),
            const Text(
              '브랜드명',
              style: TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.bold,
                fontSize: 20,
                letterSpacing: 3,
              ),
            ),
            const SizedBox(height: 8),
            const Text(
              '브랜드 슬로건이나 한 줄 설명',
              style: TextStyle(
                color: Colors.white70,
                fontSize: 14,
              ),
            ),
            const SizedBox(height: 24),
            const SizedBox(
              width: 24,
              height: 24,
              child: CircularProgressIndicator(
                strokeWidth: 2,
                valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
              ),
            ),
          ],
        ),
      ),
    );
  }
}`;

  // 전체 스플래시 화면 관리 코드
  const splashManagerCode = `import 'package:flutter/material.dart';
import 'dart:async';

// 메인 애플리케이션
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '스플래시 화면 데모',
      theme: ThemeData(
        primaryColor: const Color(0xFF268052),
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF268052)),
      ),
      home: const SplashScreen(),
    );
  }
}

// 스플래시 화면
class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Timer(
      const Duration(seconds: 3), 
      () => Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (context) => const HomeScreen()),
      )
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF268052),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              width: 100,
              height: 100,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
              ),
              child: const Center(
                child: Text(
                  'APP',
                  style: TextStyle(
                    color: Color(0xFF268052),
                    fontWeight: FontWeight.bold,
                    fontSize: 24,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 32),
            const CircularProgressIndicator(
              valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
            ),
          ],
        ),
      ),
    );
  }
}

// 홈 화면 (스플래시 이후 표시)
class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('홈 화면'),
        backgroundColor: const Color(0xFF268052),
      ),
      body: const Center(
        child: Text('앱 메인 컨텐츠'),
      ),
    );
  }
}`;

  return (
    <div className="mt-8 space-y-6">
      <h3 className="text-lg font-medium mb-3">Flutter/Dart 구현 예제</h3>
      
      {/* 기본형 스플래시 */}
      <div className="space-y-2">
        <h4 className="font-medium">기본 스플래시 화면</h4>
        <PrismCode code={basicSplashCode} language="dart" />
      </div>

      {/* 애니메이션형 스플래시 */}
      <div className="space-y-2">
        <h4 className="font-medium">애니메이션 스플래시 화면</h4>
        <PrismCode code={animatedSplashCode} language="dart" />
      </div>

      {/* 진행률형 스플래시 */}
      <div className="space-y-2">
        <h4 className="font-medium">진행률 표시 스플래시 화면</h4>
        <PrismCode code={progressSplashCode} language="dart" />
      </div>

      {/* 브랜딩형 스플래시 */}
      <div className="space-y-2">
        <h4 className="font-medium">브랜딩 스플래시 화면</h4>
        <PrismCode code={brandedSplashCode} language="dart" />
      </div>
      
      {/* 전체 스플래시 화면 관리 */}
      <div className="space-y-2">
        <h4 className="font-medium">스플래시 화면 자동 전환 구현</h4>
        <PrismCode code={splashManagerCode} language="dart" />
      </div>
    </div>
  );
};

export default function SplashPageSlide() {
  const [splashType, setSplashType] = useState<"basic" | "animated" | "branded" | "progress">("basic")
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  
  // 스플래시 화면의 로딩 상태를 보여주기 위한 효과
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        if (progress < 100) {
          setProgress(prev => Math.min(prev + 10, 100))
        } else {
          setIsLoading(false)
          setProgress(0)
        }
      }, 300)
      
      return () => clearTimeout(timer)
    }
  }, [isLoading, progress])
  
  const handleStartLoading = () => {
    setIsLoading(true)
    setProgress(0)
  }
  
  const renderSplash = () => {
    if (!isLoading) {
      return (
        <div className="bg-white p-4 text-center">
          <button
            className="px-4 py-2 bg-[#268052] text-white rounded-md text-sm"
            onClick={handleStartLoading}
          >
            스플래시 화면 보기
          </button>
        </div>
      )
    }
    
    switch (splashType) {
      case "animated":
        return (
          <div className="h-72 bg-gradient-to-br from-[#268052] to-[#134429] flex flex-col items-center justify-center">
            <div className="animate-[bounce_1.5s_infinite]">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#268052] font-bold text-xl p-5">
                LOGO
              </div>
            </div>
            <div className="mt-6 text-white font-medium animate-[fadeIn_2s_ease-in]">
              애니메이션 스플래시
            </div>
            <div className="mt-2 text-white/70 text-sm animate-[fadeIn_2s_ease-in]">
              앱 로딩 중...
            </div>
          </div>
        );
        
      case "branded":
        return (
          <div className="h-72 bg-[#268052] flex flex-col items-center justify-center text-white">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#268052] font-bold text-2xl p-5 mb-4">
                UI
              </div>
              <div className="text-xl font-bold uppercase tracking-widest">브랜드명</div>
              <div className="mt-2 text-white/70 text-sm">브랜드 슬로건이나 한 줄 설명</div>
              <div className="mt-6">
                <Loader2 className="animate-spin h-6 w-6" />
              </div>
            </div>
          </div>
        );
        
      case "progress":
        return (
          <div className="h-72 bg-[#f4f4f4] flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-[#268052] rounded-full flex items-center justify-center text-white font-bold text-xl p-5">
              UI
            </div>
            <div className="mt-6 font-medium text-[#268052]">
              {progress}% 완료
            </div>
            <div className="w-56 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-[#268052] h-full transition-all duration-300 ease-in-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 text-gray-500 text-sm">
              리소스 로딩 중...
            </div>
          </div>
        );
        
      default: // basic
        return (
          <div className="h-72 bg-white flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#268052] rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto">
                APP
              </div>
              <div className="mt-4 font-medium text-gray-800">앱 이름</div>
              <div className="mt-4 flex justify-center">
                <Loader2 className="animate-spin h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
        );
    }
  };
  
  return (
    <SlideLayout title="Splash Page (스플래시 페이지)">
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
            스플래시 페이지(Splash Page) 또는 스플래시 스크린(Splash Screen)은 앱이나 웹사이트가 
            로딩되는 동안 사용자에게 표시되는 임시 화면입니다. 주로 브랜드 로고, 애니메이션, 
            로딩 표시기 등을 포함하며, 앱의 첫인상을 형성하고 로딩 시간 동안 사용자의 주의를 
            유지하는 역할을 합니다.
          </p>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-center mb-6 flex-wrap gap-2">
            <button
              className={`px-3 py-1.5 rounded text-sm ${splashType === "basic" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setSplashType("basic")}
            >
              기본형
            </button>
            <button
              className={`px-3 py-1.5 rounded text-sm ${splashType === "animated" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setSplashType("animated")}
            >
              애니메이션형
            </button>
            <button
              className={`px-3 py-1.5 rounded text-sm ${splashType === "branded" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setSplashType("branded")}
            >
              브랜딩형
            </button>
            <button
              className={`px-3 py-1.5 rounded text-sm ${splashType === "progress" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setSplashType("progress")}
            >
              진행률형
            </button>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            {/* 스플래시 페이지 렌더링 */}
            {renderSplash()}
            
            {/* 설명 */}
            {!isLoading && (
              <div className="p-4 bg-white">
                <h3 className="font-medium mb-2">
                  {splashType === "basic" 
                    ? "기본 스플래시 페이지" 
                    : splashType === "animated" 
                      ? "애니메이션 스플래시 페이지" 
                      : splashType === "branded" 
                        ? "브랜딩 스플래시 페이지" 
                        : "진행률 표시 스플래시 페이지"}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {splashType === "basic" 
                    ? "로고와 간단한 로딩 표시기를 포함한 기본적인 스플래시 화면입니다." 
                    : splashType === "animated" 
                      ? "움직이는 요소와 애니메이션을 활용하여 더 역동적인 첫인상을 제공합니다." 
                      : splashType === "branded" 
                        ? "브랜드 아이덴티티를 강조하고 회사/제품의 이미지를 강화하는 스플래시 화면입니다." 
                        : "앱 로딩 진행 상황을 보여주어 사용자에게 더 명확한 정보를 제공합니다."}
                </p>
                
                <div className="bg-gray-50 p-3 rounded-md border text-sm">
                  <strong>사용 시 고려사항:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>과도하게 길게 표시되지 않도록 설계</li>
                    <li>브랜드 아이덴티티와 일관된 디자인 사용</li>
                    <li>실제 로딩 시간과 표시 시간 조율</li>
                    <li>시각적으로 간결하고 집중적인 디자인</li>
                    <li>사용자에게 앱이 활성 상태임을 알리는 표시 포함</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-slate-50 rounded-md">
              <h3 className="text-lg font-medium mb-2">스플래시 페이지 유형</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>정적 스플래시 화면</strong>
                  <p className="text-sm text-gray-600">로고와 텍스트만 포함한 단순한 형태</p>
                </li>
                <li>
                  <strong>애니메이션 스플래시 화면</strong>
                  <p className="text-sm text-gray-600">움직이는 요소가 포함된 동적인 형태</p>
                </li>
                <li>
                  <strong>브랜딩 스플래시 화면</strong>
                  <p className="text-sm text-gray-600">회사/제품의 브랜드 아이덴티티를 강조</p>
                </li>
                <li>
                  <strong>진행률 표시 스플래시</strong>
                  <p className="text-sm text-gray-600">로딩 진행 상황을 시각적으로 표시</p>
                </li>
                <li>
                  <strong>인터랙티브 스플래시</strong>
                  <p className="text-sm text-gray-600">사용자의 상호작용을 유도하는 요소 포함</p>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-md">
              <h3 className="text-lg font-medium mb-2">주요 구성 요소</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>로고/브랜드 요소</strong>
                  <p className="text-sm text-gray-600">회사나 앱의 아이덴티티를 나타내는 시각적 요소</p>
                </li>
                <li>
                  <strong>로딩 표시기</strong>
                  <p className="text-sm text-gray-600">스피너, 프로그레스 바 등 진행 상황 표시</p>
                </li>
                <li>
                  <strong>배경</strong>
                  <p className="text-sm text-gray-600">단색, 그라데이션 또는 이미지 배경</p>
                </li>
                <li>
                  <strong>텍스트 정보</strong>
                  <p className="text-sm text-gray-600">앱 이름, 슬로건, 버전 정보 등</p>
                </li>
                <li>
                  <strong>애니메이션</strong>
                  <p className="text-sm text-gray-600">전환 효과, 로고 애니메이션 등</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md">
          <h3 className="text-lg font-medium mb-2 text-[#268052]">디자인 및 구현 고려사항</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>
              <strong>표시 시간 최적화</strong>
              <p className="text-sm">일반적으로 2-3초로 제한하여 사용자 경험 향상</p>
            </li>
            <li>
              <strong>브랜드 일관성</strong>
              <p className="text-sm">앱의 전체 디자인 언어와 일치하는 시각적 요소 사용</p>
            </li>
            <li>
              <strong>목적성</strong>
              <p className="text-sm">실제 리소스 로딩과 연계된 유의미한 스플래시 화면 구현</p>
            </li>
            <li>
              <strong>사용자 피드백</strong>
              <p className="text-sm">앱이 준비 중임을 사용자에게 명확히 알리는 표시</p>
            </li>
            <li>
              <strong>성능 고려</strong>
              <p className="text-sm">스플래시 화면 자체가 앱 로딩을 지연시키지 않도록 설계</p>
            </li>
            <li>
              <strong>크로스 플랫폼 일관성</strong>
              <p className="text-sm">다양한 디바이스와 OS에서 일관된 경험 제공</p>
            </li>
            <li>
              <strong>접근성</strong>
              <p className="text-sm">모든 사용자가 이해할 수 있는 명확한 시각적 요소 포함</p>
            </li>
          </ul>
        </div>
        
        {/* 다트 코드 예제 */}
        <DartCodeExamples />
      </div>
    </SlideLayout>
  )
} 