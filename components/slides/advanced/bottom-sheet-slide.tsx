"use client"

import SlideLayout from "../slide-layout"
import { useState } from "react"
import { ChevronUp, ChevronDown, Filter, X, Share, Trash, Edit, Copy, Download, Heart } from "lucide-react"
import { PrismCode } from "@/components/ui/prism/PrismCode"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BottomSheetSlide() {
  const [isOpen, setIsOpen] = useState(false)
  const [sheetHeight, setSheetHeight] = useState<"small" | "medium" | "large" | "full">("medium")
  const [sheetType, setSheetType] = useState<"basic" | "modal" | "scrollable" | "actions">("basic")
  
  const toggleSheet = () => {
    setIsOpen(!isOpen)
  }
  
  const closeSheet = () => {
    setIsOpen(false)
  }
  
  const getHeightClass = () => {
    switch (sheetHeight) {
      case "small":
        return "h-1/4";
      case "medium":
        return "h-1/2";
      case "large":
        return "h-3/4";
      case "full":
        return "h-full";
      default:
        return "h-1/2";
    }
  }
  
  const renderSheetContent = () => {
    switch (sheetType) {
      case "modal":
        return (
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">필터 설정</h3>
              <button 
                onClick={closeSheet}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">가격 범위</h4>
                <div className="flex gap-2">
                  <input 
                    type="range"
                    className="w-full accent-[#268052]"
                  />
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>₩0</span>
                  <span>₩50,000</span>
                  <span>₩100,000+</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">카테고리</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["의류", "신발", "액세서리", "가방", "뷰티", "가전"].map((category) => (
                    <div key={category} className="flex items-center">
                      <input 
                        type="checkbox"
                        id={`category-${category}`}
                        className="w-4 h-4 rounded accent-[#268052]"
                      />
                      <label htmlFor={`category-${category}`} className="ml-2 text-sm">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex gap-2">
                <button
                  onClick={closeSheet}
                  className="flex-1 px-3 py-2 border rounded-md text-sm hover:bg-gray-50"
                >
                  초기화
                </button>
                <button
                  onClick={closeSheet}
                  className="flex-1 px-3 py-2 bg-[#268052] text-white rounded-md text-sm hover:bg-[#268052]/90"
                >
                  적용하기
                </button>
              </div>
            </div>
          </div>
        );
        
      case "scrollable":
        return (
          <div>
            <div className="px-4 py-3 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
              <h3 className="text-lg font-medium">댓글 (25개)</h3>
              <button 
                onClick={closeSheet}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <div className="p-4 overflow-y-auto max-h-[calc(100%-3rem)]">
              <div className="space-y-4">
                {[...Array(12)].map((_, idx) => (
                  <div key={idx} className="border-b pb-3">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#268052]/20 flex items-center justify-center text-[#268052]">
                          {String.fromCharCode(65 + (idx % 26))}
                        </div>
                        <div className="ml-2">
                          <div className="font-medium text-sm">사용자{idx + 1}</div>
                          <div className="text-xs text-gray-500">3일 전</div>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-2 text-sm">
                      {idx % 3 === 0 
                        ? "정말 유용한 내용입니다. 감사합니다!" 
                        : idx % 3 === 1
                          ? "좋은 정보 공유해주셔서 감사합니다. 많은 도움이 되었어요."
                          : "이 내용에 대해 좀 더 자세히 알고 싶어요. 추가 설명 부탁드립니다."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case "actions":
        return (
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">문서 작업</h3>
              <button 
                onClick={closeSheet}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-2">
              <button 
                className="w-full flex items-center p-3 hover:bg-gray-100 rounded-lg"
                onClick={closeSheet}
              >
                <Share className="h-5 w-5 mr-3 text-blue-500" />
                <span>공유하기</span>
              </button>
              <button 
                className="w-full flex items-center p-3 hover:bg-gray-100 rounded-lg"
                onClick={closeSheet}
              >
                <Copy className="h-5 w-5 mr-3 text-gray-500" />
                <span>복사하기</span>
              </button>
              <button 
                className="w-full flex items-center p-3 hover:bg-gray-100 rounded-lg"
                onClick={closeSheet}
              >
                <Edit className="h-5 w-5 mr-3 text-[#268052]" />
                <span>편집하기</span>
              </button>
              <button 
                className="w-full flex items-center p-3 hover:bg-gray-100 rounded-lg"
                onClick={closeSheet}
              >
                <Download className="h-5 w-5 mr-3 text-purple-500" />
                <span>다운로드</span>
              </button>
              <div className="py-2">
                <div className="border-t"></div>
              </div>
              <button 
                className="w-full flex items-center p-3 hover:bg-red-50 rounded-lg text-red-500"
                onClick={closeSheet}
              >
                <Trash className="h-5 w-5 mr-3" />
                <span>삭제하기</span>
              </button>
            </div>
          </div>
        );
        
      default: // basic
        return (
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">바텀 시트 제목</h3>
              <button 
                onClick={closeSheet}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">
              바텀 시트는 화면 아래에서 올라오는 컴포넌트로, 추가 정보나 작업을 표시하는 데 사용됩니다.
              다양한 높이와 콘텐츠로 구성할 수 있습니다.
            </p>
            
            <div className="mt-2">
              <div className="flex justify-center gap-3">
                <button
                  className={`px-3 py-1.5 rounded text-xs ${sheetHeight === "small" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                  onClick={() => setSheetHeight("small")}
                >
                  작은 높이
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-xs ${sheetHeight === "medium" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                  onClick={() => setSheetHeight("medium")}
                >
                  중간 높이
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-xs ${sheetHeight === "large" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                  onClick={() => setSheetHeight("large")}
                >
                  큰 높이
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-xs ${sheetHeight === "full" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                  onClick={() => setSheetHeight("full")}
                >
                  전체 화면
                </button>
              </div>
            </div>
          </div>
        );
    }
  }
  
  return (
    <SlideLayout title="Bottom Sheet (바텀 시트)">
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
                바텀 시트는 화면 하단에서 올라오는 패널로, 주 화면을 유지하면서 추가적인 콘텐츠나 작업을 
                표시합니다. 대화상자(Modal)의 대안으로, 문맥을 유지하면서 상호작용할 수 있는 UI 패턴입니다.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">바텀 시트 유형</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>기본형 (Standard)</strong>
                    <p className="text-sm text-gray-600">일반적인 바텀 시트로, 추가 정보나 설정을 표시</p>
                  </li>
                  <li>
                    <strong>모달형 (Modal)</strong>
                    <p className="text-sm text-gray-600">배경이 어두워지며 주 콘텐츠와의 인터랙션 차단</p>
                  </li>
                  <li>
                    <strong>확장형 (Expandable)</strong>
                    <p className="text-sm text-gray-600">여러 단계의 높이로 확장 가능한 형태</p>
                  </li>
                  <li>
                    <strong>스크롤형 (Scrollable)</strong>
                    <p className="text-sm text-gray-600">길이가 긴 콘텐츠를 표시하기 위해 내부 스크롤 제공</p>
                  </li>
                  <li>
                    <strong>액션 시트 (Action Sheet)</strong>
                    <p className="text-sm text-gray-600">여러 작업 옵션을 리스트로 제공</p>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">사용 사례</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>필터링 및 정렬 옵션</li>
                  <li>댓글 및 리뷰 목록</li>
                  <li>지도 상세 정보</li>
                  <li>공유 메뉴</li>
                  <li>설정 패널</li>
                  <li>미디어 컨트롤</li>
                  <li>폼 입력</li>
                  <li>장바구니 요약</li>
                </ul>
                
                <h3 className="text-lg font-medium mt-4 mb-2">사용자 경험 고려사항</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
                  <li>부드럽고 자연스러운 애니메이션</li>
                  <li>여러 방법으로 닫을 수 있는 옵션 (핸들 드래그, 외부 클릭, X 버튼)</li>
                  <li>적절한 높이로 중요 콘텐츠 표시</li>
                  <li>상황에 맞는 키보드 처리</li>
                  <li>제스처 지원 (스와이프로 닫기)</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#268052]">구현 팁</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>터치 제스처 인식으로 스와이프하여 열고 닫기 구현</li>
                <li>변환(transform) 속성으로 성능 최적화된 애니메이션</li>
                <li>상단 둥근 모서리와 핸들 바로 시각적 인지성 향상</li>
                <li>모바일 키보드 표시 시 적절한 위치 조정</li>
                <li>다단계 높이(기본, 중간, 최대)로 사용자 경험 개선</li>
                <li>오버스크롤 동작 처리 (시트 콘텐츠 끝에 도달했을 때)</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="dart"
                code={`import 'package:flutter/material.dart';

class BottomSheetExample extends StatefulWidget {
  @override
  _BottomSheetExampleState createState() => _BottomSheetExampleState();
}

class _BottomSheetExampleState extends State<BottomSheetExample> {
  SheetHeight _sheetHeight = SheetHeight.medium;
  SheetType _sheetType = SheetType.basic;
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('바텀 시트 예제')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('현재 시트 유형: \${_sheetType.toString().split('.').last}'),
            Text('시트 높이: \${_sheetHeight.toString().split('.').last}'),
            SizedBox(height: 20),
            
            // 시트 타입 선택
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: [
                _buildTypeButton(SheetType.basic, '기본형'),
                _buildTypeButton(SheetType.modal, '모달형'),
                _buildTypeButton(SheetType.scrollable, '스크롤형'),
                _buildTypeButton(SheetType.actions, '액션 시트'),
              ],
            ),
            
            SizedBox(height: 20),
            
            // 시트 높이 선택
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: [
                _buildHeightButton(SheetHeight.small, '작은 높이'),
                _buildHeightButton(SheetHeight.medium, '중간 높이'),
                _buildHeightButton(SheetHeight.large, '큰 높이'),
                _buildHeightButton(SheetHeight.full, '전체 화면'),
              ],
            ),
            
            SizedBox(height: 30),
            
            ElevatedButton.icon(
              icon: Icon(Icons.arrow_upward),
              label: Text('바텀 시트 열기'),
              style: ElevatedButton.styleFrom(
                primary: Color(0xFF268052),
                onPrimary: Colors.white,
                padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
              ),
              onPressed: () => _showBottomSheet(context),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildTypeButton(SheetType type, String label) {
    return ElevatedButton(
      child: Text(label),
      style: ElevatedButton.styleFrom(
        primary: _sheetType == type ? Color(0xFF268052) : Colors.grey[200],
        onPrimary: _sheetType == type ? Colors.white : Colors.black87,
      ),
      onPressed: () => setState(() => _sheetType = type),
    );
  }

  Widget _buildHeightButton(SheetHeight height, String label) {
    return ElevatedButton(
      child: Text(label),
      style: ElevatedButton.styleFrom(
        primary: _sheetHeight == height ? Color(0xFF268052) : Colors.grey[200],
        onPrimary: _sheetHeight == height ? Colors.white : Colors.black87,
      ),
      onPressed: () => setState(() => _sheetHeight = height),
    );
  }

  void _showBottomSheet(BuildContext context) {
    double sheetHeight;
    switch (_sheetHeight) {
      case SheetHeight.small:
        sheetHeight = MediaQuery.of(context).size.height * 0.25;
        break;
      case SheetHeight.medium:
        sheetHeight = MediaQuery.of(context).size.height * 0.5;
        break;
      case SheetHeight.large:
        sheetHeight = MediaQuery.of(context).size.height * 0.75;
        break;
      case SheetHeight.full:
        sheetHeight = MediaQuery.of(context).size.height * 0.95;
        break;
    }

    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => _buildBottomSheetContent(context, sheetHeight),
    );
  }

  Widget _buildBottomSheetContent(BuildContext context, double height) {
    Widget content;
    
    switch (_sheetType) {
      case SheetType.modal:
        content = _buildModalContent(context);
        break;
      case SheetType.scrollable:
        content = _buildScrollableContent(context);
        break;
      case SheetType.actions:
        content = _buildActionsContent(context);
        break;
      default:
        content = _buildBasicContent(context);
    }
    
    return Container(
      height: height,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // 핸들 바
          Container(
            margin: EdgeInsets.symmetric(vertical: 8),
            width: 40,
            height: 4,
            decoration: BoxDecoration(
              color: Colors.grey[300],
              borderRadius: BorderRadius.circular(2),
            ),
          ),
          Expanded(child: content),
        ],
      ),
    );
  }

  Widget _buildBasicContent(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                '바텀 시트 제목',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
              IconButton(
                icon: Icon(Icons.close),
                onPressed: () => Navigator.pop(context),
              ),
            ],
          ),
          SizedBox(height: 16),
          Text(
            '바텀 시트는 화면 아래에서 올라오는 컴포넌트로, 추가 정보나 작업을 표시하는 데 사용됩니다. 다양한 높이와 콘텐츠로 구성할 수 있습니다.',
            style: TextStyle(color: Colors.grey[600]),
          ),
        ],
      ),
    );
  }

  Widget _buildModalContent(BuildContext context) {
    // 필터 설정 UI 구현
    return Padding(
      padding: EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                '필터 설정',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
              IconButton(
                icon: Icon(Icons.close),
                onPressed: () => Navigator.pop(context),
              ),
            ],
          ),
          // 필터 UI 내용
          // ...
        ],
      ),
    );
  }

  Widget _buildScrollableContent(BuildContext context) {
    // 스크롤 가능한 댓글 목록 UI 구현
    return Column(
      children: [
        Container(
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          decoration: BoxDecoration(
            border: Border(bottom: BorderSide(color: Colors.grey[300]!)),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                '댓글 (25개)',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
              IconButton(
                icon: Icon(Icons.close),
                onPressed: () => Navigator.pop(context),
              ),
            ],
          ),
        ),
        Expanded(
          child: ListView.builder(
            itemCount: 20,
            padding: EdgeInsets.all(16),
            itemBuilder: (context, index) => _buildCommentItem(index),
          ),
        ),
      ],
    );
  }

  Widget _buildCommentItem(int index) {
    return Container(
      padding: EdgeInsets.only(bottom: 12),
      margin: EdgeInsets.only(bottom: 12),
      decoration: BoxDecoration(
        border: Border(bottom: BorderSide(color: Colors.grey[200]!)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  CircleAvatar(
                    backgroundColor: Color(0x33268052),
                    child: Text(
                      String.fromCharCode(65 + (index % 26)),
                      style: TextStyle(color: Color(0xFF268052)),
                    ),
                  ),
                  SizedBox(width: 8),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('사용자\${index + 1}', style: TextStyle(fontWeight: FontWeight.bold)),
                      Text('3일 전', style: TextStyle(fontSize: 12, color: Colors.grey)),
                    ],
                  ),
                ],
              ),
              Icon(Icons.favorite_border, size: 16, color: Colors.grey),
            ],
          ),
          SizedBox(height: 8),
          Text(
            index % 3 == 0
                ? '정말 유용한 내용입니다. 감사합니다!'
                : index % 3 == 1
                    ? '좋은 정보 공유해주셔서 감사합니다. 많은 도움이 되었어요.'
                    : '이 내용에 대해 좀 더 자세히 알고 싶어요. 추가 설명 부탁드립니다.',
          ),
        ],
      ),
    );
  }

  Widget _buildActionsContent(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                '문서 작업',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
              IconButton(
                icon: Icon(Icons.close),
                onPressed: () => Navigator.pop(context),
              ),
            ],
          ),
          SizedBox(height: 8),
          _buildActionButton(Icons.share, '공유하기', Colors.blue),
          _buildActionButton(Icons.copy, '복사하기', Colors.grey),
          _buildActionButton(Icons.edit, '편집하기', Color(0xFF268052)),
          _buildActionButton(Icons.file_download, '다운로드', Colors.purple),
          Divider(height: 32),
          _buildActionButton(Icons.delete, '삭제하기', Colors.red),
        ],
      ),
    );
  }

  Widget _buildActionButton(IconData icon, String label, Color color) {
    return InkWell(
      onTap: () {},
      borderRadius: BorderRadius.circular(8),
      child: Padding(
        padding: EdgeInsets.symmetric(vertical: 12, horizontal: 8),
        child: Row(
          children: [
            Icon(icon, color: color),
            SizedBox(width: 12),
            Text(label),
          ],
        ),
      ),
    );
  }
}

enum SheetHeight { small, medium, large, full }
enum SheetType { basic, modal, scrollable, actions }`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="flex justify-center mb-4">
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  className={`px-3 py-1.5 rounded text-sm ${sheetType === "basic" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                  onClick={() => setSheetType("basic")}
                >
                  기본형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${sheetType === "modal" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                  onClick={() => setSheetType("modal")}
                >
                  모달형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${sheetType === "scrollable" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                  onClick={() => setSheetType("scrollable")}
                >
                  스크롤형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${sheetType === "actions" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                  onClick={() => setSheetType("actions")}
                >
                  액션 시트
                </button>
              </div>
            </div>
            
            <div className="border rounded-lg bg-gray-100 overflow-hidden relative h-[400px]">
              {/* 메인 콘텐츠 */}
              <div className="p-4 h-full">
                <div className="bg-white rounded-lg shadow-sm border p-4 mb-4">
                  <h3 className="text-lg font-medium mb-2">메인 콘텐츠 영역</h3>
                  <p className="text-gray-600 mb-4">
                    {sheetType === "modal" 
                      ? "필터 옵션을 확인하려면 바텀 시트를 열어보세요." 
                      : sheetType === "scrollable" 
                        ? "댓글을 확인하려면 바텀 시트를 열어보세요."
                        : sheetType === "actions"
                          ? "문서 작업 메뉴를 보려면 바텀 시트를 열어보세요."
                          : "다양한 형태의 바텀 시트를 경험해보세요."}
                  </p>
                  <button
                    onClick={toggleSheet}
                    className="flex items-center gap-2 px-4 py-2 bg-[#268052] text-white rounded-lg hover:bg-[#268052]/90"
                  >
                    {isOpen ? (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        시트 닫기
                      </>
                    ) : (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        {sheetType === "modal" 
                          ? <><Filter className="w-4 h-4 mr-1" /> 필터 열기</> 
                          : sheetType === "scrollable" 
                            ? "댓글 보기"
                            : sheetType === "actions"
                              ? "액션 메뉴 열기"
                              : "바텀 시트 열기"}
                      </>
                    )}
                  </button>
                </div>
                
                <div className="text-center text-sm text-gray-500">
                  <p>현재 시트 유형: <strong>{sheetType}</strong></p>
                  <p>시트 높이: <strong>{sheetHeight}</strong></p>
                  <div className="flex justify-center gap-3 mt-4">
                    <button
                      className={`px-3 py-1.5 rounded text-xs ${sheetHeight === "small" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                      onClick={() => setSheetHeight("small")}
                    >
                      작은 높이
                    </button>
                    <button
                      className={`px-3 py-1.5 rounded text-xs ${sheetHeight === "medium" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                      onClick={() => setSheetHeight("medium")}
                    >
                      중간 높이
                    </button>
                    <button
                      className={`px-3 py-1.5 rounded text-xs ${sheetHeight === "large" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                      onClick={() => setSheetHeight("large")}
                    >
                      큰 높이
                    </button>
                    <button
                      className={`px-3 py-1.5 rounded text-xs ${sheetHeight === "full" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                      onClick={() => setSheetHeight("full")}
                    >
                      전체 화면
                    </button>
                  </div>
                </div>
              </div>
              
              {/* 바텀 시트 */}
              <div 
                className={`absolute left-0 right-0 bottom-0 bg-white rounded-t-xl shadow-lg transition-transform duration-300 ease-out ${
                  isOpen ? 'translate-y-0' : 'translate-y-full'
                } ${getHeightClass()}`}
              >
                {/* 핸들 바 */}
                <div className="flex justify-center py-2">
                  <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
                </div>
                
                {renderSheetContent()}
              </div>
              
              {/* 오버레이 - 모달형일 때만 표시 */}
              {isOpen && sheetType === "modal" && (
                <div 
                  className="absolute inset-0 bg-black/20"
                  onClick={closeSheet}
                ></div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
} 