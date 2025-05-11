"use client"

import SlideLayout from "../slide-layout"
import { useState } from "react"
import { ArrowLeft, ArrowRight, RefreshCw, Home, X, Share, MoreVertical, Globe } from "lucide-react"
import { PrismCode } from "../../ui/prism/PrismCode"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WebViewSlide() {
  const [webViewType, setWebViewType] = useState<"basic" | "custom-ui" | "embedded" | "full-page">("basic")
  const [url, setUrl] = useState("https://google.com")

  const renderWebView = () => {
    switch (webViewType) {
      case "custom-ui":
        return (
          <div className="h-72 bg-white border rounded-md overflow-hidden flex flex-col">
            <div className="px-3 py-2 border-b flex items-center justify-between bg-[#268052]">
              <div className="flex items-center">
                <button className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 ml-1">
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 ml-1">
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 mx-3">
                <div className="bg-white/10 rounded-full px-3 py-1 text-white text-sm flex items-center">
                  <Globe className="h-3 w-3 mr-2 text-white/70" />
                  {url}
                </div>
              </div>

              <div className="flex items-center">
                <button className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10">
                  <Share className="h-4 w-4" />
                </button>
                <button className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 ml-1">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-100 flex items-center justify-center p-4 text-center">
              <div>
                <div className="mx-auto w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                  <Globe className="h-8 w-8 text-gray-500" />
                </div>
                <p className="text-gray-600 text-sm mb-2">웹 콘텐츠가 여기에 표시됩니다</p>
                <p className="text-gray-500 text-xs">{url}</p>
              </div>
            </div>
          </div>
        )

      case "embedded":
        return (
          <div className="h-72 flex flex-col bg-white overflow-hidden border">
            <div className="p-3 bg-gray-50 border-b">
              <h3 className="font-medium text-gray-800">앱 내 임베디드 웹뷰</h3>
            </div>
            <div className="flex-1 flex items-center justify-center p-6 bg-white">
              <div className="bg-gray-100 border rounded-lg p-4 w-full mx-auto max-w-sm">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-gray-800 font-medium">외부 웹 콘텐츠</div>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-center py-8 bg-white border rounded-md mb-3">
                  <Globe className="h-8 w-8 text-gray-300" />
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-[#268052] text-white rounded-md py-1.5 text-sm">동의</button>
                  <button className="flex-1 bg-gray-200 text-gray-700 rounded-md py-1.5 text-sm">취소</button>
                </div>
              </div>
            </div>
          </div>
        )

      case "full-page":
        return (
          <div className="h-72 flex flex-col">
            {/* 전체 콘텐츠가 웹뷰 */}
            <div className="flex-1 bg-gray-100 flex items-center justify-center text-center">
              <div>
                <div className="mx-auto w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-4">
                  <Globe className="h-10 w-10 text-[#268052]" />
                </div>
                <h3 className="font-medium text-gray-800 mb-1">전체 페이지 웹뷰</h3>
                <p className="text-gray-600 text-sm">
                  앱 네이티브 UI 없이 전체 화면이 웹 콘텐츠로 표시됩니다.
                </p>
                <p className="text-[#268052] text-xs mt-3">{url}</p>
              </div>
            </div>

            {/* 하단 네비게이션 바 */}
            <div className="bg-white border-t py-2 px-4 flex justify-around">
              <button className="p-2 text-gray-500 flex flex-col items-center">
                <Home className="h-5 w-5" />
                <span className="text-xs mt-1">홈</span>
              </button>
              <button className="p-2 text-[#268052] flex flex-col items-center">
                <Globe className="h-5 w-5" />
                <span className="text-xs mt-1">웹</span>
              </button>
              <button className="p-2 text-gray-500 flex flex-col items-center">
                <MoreVertical className="h-5 w-5" />
                <span className="text-xs mt-1">더보기</span>
              </button>
            </div>
          </div>
        )

      default: // basic
        return (
          <div className="h-72 bg-white border overflow-hidden flex flex-col">
            <div className="px-3 py-2 border-b flex items-center bg-gray-50">
              <button className="p-1.5 text-gray-500">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button className="p-1.5 text-gray-500 ml-1">
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="p-1.5 text-gray-500 ml-1">
                <RefreshCw className="h-4 w-4" />
              </button>

              <div className="flex-1 mx-3">
                <div className="bg-white border rounded-md px-3 py-1 text-gray-600 text-sm">{url}</div>
              </div>
            </div>

            <div className="flex-1 bg-gray-100 flex items-center justify-center p-4 text-center">
              <div>
                <div className="mx-auto w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                  <Globe className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-600 text-sm">웹 콘텐츠가 여기에 표시됩니다</p>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <SlideLayout title="WebView (웹뷰)">
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
        <div className="prose max-w-none mb-6">
          <h2 className="text-xl font-semibold mb-3">정의</h2>
          <p>
            웹뷰(WebView)는 모바일 앱 내에서 웹 콘텐츠를 표시하기 위한 컴포넌트입니다. 
            네이티브 애플리케이션 안에 내장된 브라우저로, HTML, CSS, JavaScript로 작성된
            웹 페이지를 앱 내부에서 보여줄 수 있습니다. 이를 통해 앱과 웹 기술을 혼합하여 
            하이브리드 앱을 개발하거나 외부 웹 콘텐츠를 앱 내에 통합할 수 있습니다.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6">
          <div className="flex justify-center mb-6 flex-wrap gap-2">
            {["basic","custom-ui","embedded","full-page"].map((type) => (
              <button
                key={type}
                className={`px-3 py-1.5 rounded text-sm ${
                  webViewType===type ? "bg-[#268052] text-white" : "bg-gray-100"
                }`}
                onClick={()=>setWebViewType(type as any)}
              >
                {type==="basic"? "기본형": type==="custom-ui"? "커스텀 UI형":
                 type==="embedded"? "임베디드형": "전체페이지형"}
              </button>
            ))}
          </div>

          <div className="border rounded-lg overflow-hidden">
            {renderWebView()}

            <div className="p-4 bg-white">
              <h3 className="font-medium mb-2">
                {webViewType==="basic"? "기본 웹뷰":
                 webViewType==="custom-ui"? "커스텀 UI 웹뷰":
                 webViewType==="embedded"? "임베디드 웹뷰": "전체 페이지 웹뷰"}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {webViewType==="basic"?
                  "기본적인 형태의 웹뷰로, 앱 내에서 웹 콘텐츠를 표시하는 심플한 구현입니다.":
                 webViewType==="custom-ui"?
                  "앱의 디자인 시스템에 맞춰 커스터마이징된 UI를 가진 웹뷰입니다.":
                 webViewType==="embedded"?
                  "앱 화면의 일부에만 웹 콘텐츠를 표시하는 임베디드 형태의 웹뷰입니다.":
                  "전체 화면이 웹 콘텐츠로 채워지는 형태로, 앱 내 최소한의 네이티브 UI만 표시합니다."}
              </p>

              <div className="bg-gray-50 p-3 rounded-md border text-sm">
                <strong>주요 특징:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>네이티브 앱과 웹 기술의 결합</li>
                  <li>외부 웹 콘텐츠 표시 가능</li>
                  <li>JavaScript와 네이티브 코드 간 양방향 통신 지원</li>
                  <li>앱 내에서 일관된 사용자 경험 제공</li>
                  <li>웹 업데이트가 앱 업데이트 없이 가능</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 활용 사례 & 주요 기능 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">웹뷰 활용 사례</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>하이브리드 앱 개발</strong><p className="text-sm text-gray-600">앱의 일부 또는 전체를 웹으로 구현</p></li>
              <li><strong>외부 콘텐츠 표시</strong><p className="text-sm text-gray-600">외부 사이트나 콘텐츠 표시</p></li>
              <li><strong>인앱 브라우저</strong><p className="text-sm text-gray-600">앱 종료 없이 웹 탐색 지원</p></li>
              <li><strong>OAuth 인증</strong><p className="text-sm text-gray-600">소셜 로그인 등 웹 기반 인증 처리</p></li>
              <li><strong>동적 콘텐츠 업데이트</strong><p className="text-sm text-gray-600">앱 업데이트 없이 콘텐츠 갱신</p></li>
            </ul>
          </div>
          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">주요 기능</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>웹 페이지 로드 및 렌더링</li>
              <li>JavaScript 실행 및 처리</li>
              <li>JS-네이티브 브릿지 통신</li>
              <li>쿠키 및 세션 관리</li>
              <li>네비게이션 제어</li>
              <li>파일 업로드/다운로드</li>
              <li>오프라인 지원 (캐싱)</li>
              <li>보안 정책 적용</li>
            </ul>
          </div>
        </div>

        {/* 고려사항 */}
        <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md mt-6">
          <h3 className="text-lg font-medium mb-2 text-[#268052]">웹뷰 구현 시 고려사항</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li><strong>보안</strong><p className="text-sm">HTTPS 사용, 인증 토큰 관리</p></li>
            <li><strong>성능</strong><p className="text-sm">로딩 시간·메모리 최적화</p></li>
            <li><strong>반응형</strong><p className="text-sm">다양한 화면 크기 대응</p></li>
            <li><strong>오프라인</strong><p className="text-sm">캐싱 전략</p></li>
            <li><strong>UX</strong><p className="text-sm">일관된 사용자 경험</p></li>
            <li><strong>플랫폼 차이</strong><p className="text-sm">Android vs iOS 차이 이해</p></li>
            <li><strong>접근성</strong><p className="text-sm">웹 접근성 준수</p></li>
            <li><strong>세션 관리</strong><p className="text-sm">앱↔️웹 인증 상태 공유</p></li>
          </ul>
        </div>

        {/* Flutter 구현 코드 */}
        <div className="bg-gray-800 p-4 border rounded-md mb-6">
          <PrismCode
            language="dart"
            code={`// ${webViewType === "basic" ? "BasicWebView" : webViewType === "custom-ui" ? "CustomUIWebView" : webViewType === "embedded" ? "EmbeddedWebView" : "FullPageWebView"} 구현 예시
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class ${webViewType === "basic" ? "BasicWebView" : webViewType === "custom-ui" ? "CustomUIWebView" : webViewType === "embedded" ? "EmbeddedWebView" : "FullPageWebView"} extends StatefulWidget {
  const ${webViewType === "basic" ? "BasicWebView" : webViewType === "custom-ui" ? "CustomUIWebView" : webViewType === "embedded" ? "EmbeddedWebView" : "FullPageWebView"}({Key? key}) : super(key: key);

  @override
  State<${webViewType === "basic" ? "BasicWebView" : webViewType === "custom-ui" ? "CustomUIWebView" : webViewType === "embedded" ? "EmbeddedWebView" : "FullPageWebView"}> createState() => _${webViewType === "basic" ? "BasicWebView" : webViewType === "custom-ui" ? "CustomUIWebView" : webViewType === "embedded" ? "EmbeddedWebView" : "FullPageWebView"}State();
}

class _${webViewType === "basic" ? "BasicWebView" : webViewType === "custom-ui" ? "CustomUIWebView" : webViewType === "embedded" ? "EmbeddedWebView" : "FullPageWebView"}State extends State<${webViewType === "basic" ? "BasicWebView" : webViewType === "custom-ui" ? "CustomUIWebView" : webViewType === "embedded" ? "EmbeddedWebView" : "FullPageWebView"}> {
  late WebViewController _controller;
  bool _isLoading = true;
  String _currentUrl = '$url';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          // 컨트롤 바
          Container(
            color: ${webViewType==="custom-ui"?"Color(0xFF268052)":"Colors.grey[50]"},
            padding: EdgeInsets.symmetric(horizontal: 8,vertical: 8),
            child: Row(
              children: [
                IconButton(icon: Icon(Icons.arrow_back${webViewType==="custom-ui"?",color:Colors.white70":""}), onPressed:() async { if(await _controller.canGoBack()) _controller.goBack(); }),
                IconButton(icon: Icon(Icons.arrow_forward${webViewType==="custom-ui"?",color:Colors.white70":""}), onPressed:() async { if(await _controller.canGoForward()) _controller.goForward(); }),
                IconButton(icon: Icon(Icons.refresh${webViewType==="custom-ui"?",color:Colors.white70":""}), onPressed:() => _controller.reload()),
                Expanded(child: Text(_currentUrl,overflow: TextOverflow.ellipsis)),
              ],
            ),
          ),
          Expanded(
            child: Stack(
              children: [
                WebView(
                  initialUrl: _currentUrl,
                  javascriptMode: JavascriptMode.unrestricted,
                  onWebViewCreated:(c)=>_controller=c,
                  onPageStarted:(u)=>setState(()=>_isLoading=true),
                  onPageFinished:(u)=>setState(()=>_isLoading=false),
                ),
                if(_isLoading) Center(child:CircularProgressIndicator()),
              ],
            ),
          ),
        ],
      ),
      bottomNavigationBar: ${webViewType==="full-page"?"BottomNavigationBar(\n        currentIndex:1,\n        items:[\n          BottomNavigationBarItem(icon:Icon(Icons.home),label:'홈'),\n          BottomNavigationBarItem(icon:Icon(Icons.public),label:'웹'),\n          BottomNavigationBarItem(icon:Icon(Icons.more_vert),label:'더보기'),\n        ],\n      )":"null"},
    );
  }
}`}
          />
        </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
