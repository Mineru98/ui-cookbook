"use client"

import SlideLayout from "../slide-layout"
import { useState } from "react"
import { Search, X, Mic, ArrowLeft, Filter, Camera, Sliders } from "lucide-react"
import { PrismCode } from "../../ui/prism/PrismCode"

export default function SearchBarSlide() {
  const [searchBarType, setSearchBarType] = useState<"basic" | "expandable" | "persistent" | "with-filters">("basic")
  const [searchText, setSearchText] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  
  const handleClear = () => {
    setSearchText("")
  }
  
  const renderSearchBar = () => {
    switch (searchBarType) {
      case "expandable":
        return (
          <div className="bg-white border-b p-2">
            <div className="flex items-center">
              {isExpanded ? (
                <>
                  <button 
                    className="p-2 text-gray-500"
                    onClick={() => setIsExpanded(false)}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="검색어를 입력하세요"
                      className="w-full pl-3 pr-8 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#268052]"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                    {searchText && (
                      <button 
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                        onClick={handleClear}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <button className="p-2 text-gray-500 ml-1">
                    <Mic className="h-5 w-5" />
                  </button>
                </>
              ) : (
                <>
                  <span className="text-lg font-medium flex-1">앱 타이틀</span>
                  <button 
                    className="p-2 text-gray-500"
                    onClick={() => setIsExpanded(true)}
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        );
        
      case "persistent":
        return (
          <div className="bg-[#268052] text-white p-2">
            <div className="flex items-center">
              <button className="p-2">
                <ArrowLeft className="h-5 w-5" />
              </button>
              
              <div className="flex-1 mx-2 relative bg-[#268052]/20 rounded-lg flex items-center">
                <Search className="h-4 w-4 absolute left-3 text-white/70" />
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  className="w-full pl-9 pr-8 py-2 bg-transparent text-white placeholder-white/70 border-0 focus:outline-none focus:ring-0"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                {searchText && (
                  <button 
                    className="absolute right-2 text-white/70"
                    onClick={handleClear}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              <button className="p-2">
                <Mic className="h-5 w-5" />
              </button>
            </div>
          </div>
        );
        
      case "with-filters":
        return (
          <div className="bg-white border-b">
            <div className="p-2">
              <div className="flex items-center relative bg-gray-100 rounded-lg">
                <Search className="h-4 w-4 absolute left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  className="w-full pl-9 pr-8 py-2.5 bg-transparent border-0 focus:outline-none focus:ring-0"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                {searchText ? (
                  <button 
                    className="absolute right-2 text-gray-400"
                    onClick={handleClear}
                  >
                    <X className="h-4 w-4" />
                  </button>
                ) : (
                  <button className="absolute right-2 text-gray-400">
                    <Mic className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
            
            <div className="py-1 px-2 flex items-center overflow-x-auto gap-2 whitespace-nowrap">
              <button className="px-3 py-1 text-xs bg-[#268052]/10 text-[#268052] rounded-full flex items-center">
                <Filter className="h-3 w-3 mr-1" />
                필터
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                최신순
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                인기순
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                가격 낮은순
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                가격 높은순
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                평점순
              </button>
            </div>
          </div>
        );
        
      default: // basic
        return (
          <div className="bg-white border-b p-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="w-full pl-10 pr-8 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#268052]"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                {searchText && (
                  <button 
                    className="h-full px-2 text-gray-400"
                    onClick={handleClear}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <button className="h-full px-3 text-gray-500">
                  <Mic className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        );
    }
  };
  
  return (
    <SlideLayout title="Search Bar (검색 바)">
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
            검색 바(Search Bar)는 사용자가 애플리케이션 내에서 특정 콘텐츠를 검색할 수 있게 해주는 
            사용자 인터페이스 요소입니다. 일반적으로 텍스트 입력 필드와 검색 아이콘으로 구성되며, 
            때로는 음성 검색, 필터링 옵션 등 추가 기능을 포함할 수 있습니다.
          </p>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-center mb-6 flex-wrap gap-2">
            <button
              className={`px-3 py-1.5 rounded text-sm ${searchBarType === "basic" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setSearchBarType("basic")}
            >
              기본형
            </button>
            <button
              className={`px-3 py-1.5 rounded text-sm ${searchBarType === "expandable" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => {setSearchBarType("expandable"); setIsExpanded(false);}}
            >
              확장형
            </button>
            <button
              className={`px-3 py-1.5 rounded text-sm ${searchBarType === "persistent" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setSearchBarType("persistent")}
            >
              영구형
            </button>
            <button
              className={`px-3 py-1.5 rounded text-sm ${searchBarType === "with-filters" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setSearchBarType("with-filters")}
            >
              필터형
            </button>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            {/* 검색 바 렌더링 */}
            {renderSearchBar()}
            
            {/* 검색 결과 예시 */}
            <div className="p-4 bg-white">
              <h3 className="font-medium mb-2">
                {searchBarType === "basic" 
                  ? "기본 검색 바" 
                  : searchBarType === "expandable" 
                    ? "확장형 검색 바" 
                    : searchBarType === "persistent" 
                      ? "영구형 검색 바" 
                      : "필터 포함 검색 바"}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {searchBarType === "basic" 
                  ? "가장 일반적인 형태의 검색 바로, 검색 아이콘과 텍스트 필드로 구성됩니다." 
                  : searchBarType === "expandable" 
                    ? "처음에는 아이콘만 표시되다가 클릭 시 전체 검색 바로 확장되는 방식입니다." 
                    : searchBarType === "persistent" 
                      ? "화면 상단에 항상 표시되는 형태의 검색 바입니다." 
                      : "검색 필터 옵션을 함께 제공하는 확장된 검색 바입니다."}
              </p>
              
              {searchText ? (
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-3 border rounded-md">
                      <div className="flex items-center">
                        <div className="bg-gray-100 rounded-md w-10 h-10 flex items-center justify-center">
                          <Search className="h-5 w-5 text-gray-500" />
                        </div>
                        <div className="ml-3">
                          <div className="font-medium">검색 결과 {i}: {searchText}</div>
                          <div className="text-sm text-gray-500">관련 검색어가 포함된 항목입니다.</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                  <Search className="h-10 w-10 mb-2 text-gray-300" />
                  <p>검색어를 입력하세요</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-slate-50 rounded-md">
              <h3 className="text-lg font-medium mb-2">검색 바 유형</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>기본형 (Basic)</strong>
                  <p className="text-sm text-gray-600">항상 표시되는 기본적인 검색 필드</p>
                </li>
                <li>
                  <strong>확장형 (Expandable)</strong>
                  <p className="text-sm text-gray-600">아이콘을 클릭하면 확장되는 검색 바</p>
                </li>
                <li>
                  <strong>영구형 (Persistent)</strong>
                  <p className="text-sm text-gray-600">앱 바에 통합된 형태의 검색 필드</p>
                </li>
                <li>
                  <strong>필터형 (With Filters)</strong>
                  <p className="text-sm text-gray-600">추가 필터 옵션이 포함된 검색 바</p>
                </li>
                <li>
                  <strong>서제스트형 (Suggestions)</strong>
                  <p className="text-sm text-gray-600">검색어 입력 시 제안 항목을 표시</p>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-md">
              <h3 className="text-lg font-medium mb-2">주요 구성 요소</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>검색 아이콘</li>
                <li>텍스트 입력 필드</li>
                <li>지우기 버튼</li>
                <li>음성 검색 버튼 (선택)</li>
                <li>필터 옵션 (선택)</li>
                <li>추천 검색어 (선택)</li>
                <li>최근 검색어 (선택)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md mt-6">
          <h3 className="text-lg font-medium mb-2 text-[#268052]">Flutter 구현 코드</h3>
          <PrismCode
            language="dart"
            code={`// ${searchBarType === "basic" 
              ? "기본 검색 바" 
              : searchBarType === "expandable" 
                ? "확장형 검색 바" 
                : searchBarType === "persistent" 
                  ? "영구형 검색 바" 
                  : "필터형 검색 바"} 구현 예시

import 'package:flutter/material.dart';

class ${searchBarType === "basic" 
        ? "BasicSearchBar" 
        : searchBarType === "expandable" 
          ? "ExpandableSearchBar" 
          : searchBarType === "persistent" 
            ? "PersistentSearchBar" 
            : "FilterSearchBar"} extends StatefulWidget {
  @override
  _${searchBarType === "basic" 
      ? "BasicSearchBar" 
      : searchBarType === "expandable" 
        ? "ExpandableSearchBar" 
        : searchBarType === "persistent" 
          ? "PersistentSearchBar" 
          : "FilterSearchBar"}State createState() => _${searchBarType === "basic" 
                                                      ? "BasicSearchBar" 
                                                      : searchBarType === "expandable" 
                                                        ? "ExpandableSearchBar" 
                                                        : searchBarType === "persistent" 
                                                          ? "PersistentSearchBar" 
                                                          : "FilterSearchBar"}State();
}

class _${searchBarType === "basic" 
        ? "BasicSearchBar" 
        : searchBarType === "expandable" 
          ? "ExpandableSearchBar" 
          : searchBarType === "persistent" 
            ? "PersistentSearchBar" 
            : "FilterSearchBar"}State extends State<${searchBarType === "basic" 
                                                   ? "BasicSearchBar" 
                                                   : searchBarType === "expandable" 
                                                     ? "ExpandableSearchBar" 
                                                     : searchBarType === "persistent" 
                                                       ? "PersistentSearchBar" 
                                                       : "FilterSearchBar"}> {
  TextEditingController _searchController = TextEditingController();
  ${searchBarType === "expandable" ? "bool _isExpanded = false;" : ""}

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  void _clearSearch() {
    setState(() {
      _searchController.clear();
    });
  }

  @override
  Widget build(BuildContext context) {
    ${searchBarType === "basic" 
      ? "return Container(\n      decoration: BoxDecoration(\n        border: Border(\n          bottom: BorderSide(color: Colors.grey[300]!),\n        ),\n      ),\n      padding: EdgeInsets.all(8),\n      child: Container(\n        decoration: BoxDecoration(\n          color: Colors.grey[100],\n          borderRadius: BorderRadius.circular(8),\n        ),\n        child: TextField(\n          controller: _searchController,\n          decoration: InputDecoration(\n            hintText: '검색어를 입력하세요',\n            prefixIcon: Icon(Icons.search, color: Colors.grey[400], size: 20),\n            suffixIcon: _searchController.text.isNotEmpty\n                ? IconButton(\n                    icon: Icon(Icons.clear, color: Colors.grey[400], size: 20),\n                    onPressed: _clearSearch,\n                  )\n                : IconButton(\n                    icon: Icon(Icons.mic, color: Colors.grey[500], size: 20),\n                    onPressed: () {\n                      // 음성 검색 기능 실행\n                    },\n                  ),\n            border: InputBorder.none,\n            contentPadding: EdgeInsets.symmetric(vertical: 12),\n          ),\n          onChanged: (value) {\n            setState(() {});\n          },\n        ),\n      ),\n    );"
      : searchBarType === "expandable"
      ? "return Container(\n      decoration: BoxDecoration(\n        border: Border(\n          bottom: BorderSide(color: Colors.grey[300]!),\n        ),\n      ),\n      padding: EdgeInsets.all(8),\n      child: Row(\n        children: [\n          _isExpanded\
              ? IconButton(\n                  icon: Icon(Icons.arrow_back),\n                  onPressed: () {\n                    setState(() {\n                      _isExpanded = false;\n                      _searchController.clear();\n                    });\n                  },\n                )\n              : Container(),\n          _isExpanded\
              ? Expanded(\n                  child: Container(\n                    height: 40,\n                    decoration: BoxDecoration(\n                      color: Colors.grey[100],\n                      borderRadius: BorderRadius.circular(8),\n                    ),\n                    child: TextField(\n                      controller: _searchController,\n                      decoration: InputDecoration(\n                        hintText: '검색어를 입력하세요',\n                        border: InputBorder.none,\n                        contentPadding: EdgeInsets.only(left: 12, bottom: 10, top: 10),\n                        suffixIcon: _searchController.text.isNotEmpty\
                            ? IconButton(\n                                icon: Icon(Icons.clear, color: Colors.grey[400], size: 18),\n                                onPressed: _clearSearch,\n                              )\n                            : null,\n                      ),\n                      onChanged: (value) {\n                        setState(() {});\n                      },\n                    ),\n                  ),\n                )\n              : Expanded(\n                  child: Text(\n                    '앱 타이틀',\n                    style: TextStyle(\n                      fontSize: 18,\n                      fontWeight: FontWeight.w500,\n                    ),\n                  ),\n                ),\n          _isExpanded\
              ? IconButton(\n                  icon: Icon(Icons.mic),\n                  onPressed: () {\n                    // 음성 검색 기능 실행\n                  },\n                )\n              : IconButton(\n                  icon: Icon(Icons.search),\n                  onPressed: () {\n                    setState(() {\n                      _isExpanded = true;\n                    });\n                  },\n                ),\n        ],\n      ),\n    );"
      : searchBarType === "persistent"
      ? "return Container(\n      color: Color(0xFF268052),\n      padding: EdgeInsets.all(8),\n      child: Row(\n        children: [\n          IconButton(\n            icon: Icon(Icons.arrow_back, color: Colors.white),\n            onPressed: () {\n              // 뒤로 가기 기능\n            },\n          ),\n          Expanded(\n            child: Container(\n              decoration: BoxDecoration(\n                color: Colors.white.withOpacity(0.2),\n                borderRadius: BorderRadius.circular(8),\n              ),\n              child: Row(\n                children: [\n                  Padding(\n                    padding: EdgeInsets.only(left: 12),\n                    child: Icon(Icons.search, color: Colors.white.withOpacity(0.7), size: 20),\n                  ),\n                  Expanded(\n                    child: TextField(\n                      controller: _searchController,\n                      style: TextStyle(color: Colors.white),\n                      decoration: InputDecoration(\n                        hintText: '검색어를 입력하세요',\n                        hintStyle: TextStyle(color: Colors.white.withOpacity(0.7)),\n                        border: InputBorder.none,\n                        contentPadding: EdgeInsets.symmetric(horizontal: 8, vertical: 12),\n                      ),\n                      onChanged: (value) {\n                        setState(() {});\n                      },\n                    ),\n                  ),\n                  if (_searchController.text.isNotEmpty)\n                    IconButton(\n                      icon: Icon(Icons.clear, color: Colors.white.withOpacity(0.7), size: 20),\n                      onPressed: _clearSearch,\n                    ),\n                ],\n              ),\n            ),\n          ),\n          IconButton(\n            icon: Icon(Icons.mic, color: Colors.white),\n            onPressed: () {\n              // 음성 검색 기능\n            },\n          ),\n        ],\n      ),\n    );"
      : "return Column(\n      children: [\n        // 상단 검색 필드\n        Container(\n          decoration: BoxDecoration(\n            border: Border(bottom: BorderSide(color: Colors.grey[300]!)),\n            color: Colors.white,\n          ),\n          padding: EdgeInsets.all(8),\n          child: Container(\n            decoration: BoxDecoration(\n              color: Colors.grey[100],\n              borderRadius: BorderRadius.circular(8),\n            ),\n            child: Row(\n              children: [\n                Padding(\n                  padding: EdgeInsets.only(left: 12),\n                  child: Icon(Icons.search, color: Colors.grey[400], size: 20),\n                ),\n                Expanded(\n                  child: TextField(\n                    controller: _searchController,\n                    decoration: InputDecoration(\n                      hintText: '검색어를 입력하세요',\n                      border: InputBorder.none,\n                      contentPadding: EdgeInsets.symmetric(horizontal: 8, vertical: 14),\n                    ),\n                    onChanged: (value) {\n                      setState(() {});\n                    },\n                  ),\n                ),\n                _searchController.text.isNotEmpty\
                    ? IconButton(\n                        icon: Icon(Icons.clear, color: Colors.grey[400], size: 20),\n                        onPressed: _clearSearch,\n                        padding: EdgeInsets.zero,\n                        constraints: BoxConstraints(),\n                      )\n                    : IconButton(\n                        icon: Icon(Icons.mic, color: Colors.grey[400], size: 20),\n                        onPressed: () {\n                          // 음성 검색 기능\n                        },\n                        padding: EdgeInsets.zero,\n                        constraints: BoxConstraints(),\n                      ),\
                SizedBox(width: 8),\n              ],\n            ),\n          ),\n        ),\n        \
        // 필터 칩 목록\n        Container(\n          height: 50,\n          decoration: BoxDecoration(\n            border: Border(bottom: BorderSide(color: Colors.grey[200]!)),\n          ),\n          padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),\n          child: ListView(\n            scrollDirection: Axis.horizontal,\n            children: [\n              FilterChip(\n                label: Row(\n                  mainAxisSize: MainAxisSize.min,\n                  children: [\n                    Icon(Icons.filter_list, size: 14, color: Color(0xFF268052)),\n                    SizedBox(width: 4),\n                    Text('필터'),\n                  ],\n                ),\n                backgroundColor: Color(0xFF268052).withOpacity(0.1),\n                labelStyle: TextStyle(color: Color(0xFF268052), fontSize: 12),\n                onSelected: (bool selected) {\n                  // 필터 선택 동작\n                },\n                shape: RoundedRectangleBorder(\n                  borderRadius: BorderRadius.circular(16),\n                ),\n              ),\n              SizedBox(width: 8),\n              buildFilterChip('최신순'),\n              SizedBox(width: 8),\n              buildFilterChip('인기순'),\n              SizedBox(width: 8),\n              buildFilterChip('가격 낮은순'),\n              SizedBox(width: 8),\n              buildFilterChip('가격 높은순'),\n              SizedBox(width: 8),\n              buildFilterChip('평점순'),\n            ],\n          ),\n        ),\n      ],\n    );\n  }\n  \
  Widget buildFilterChip(String label) {\n    return FilterChip(\n      label: Text(label),\n      backgroundColor: Colors.grey[100],\n      labelStyle: TextStyle(color: Colors.grey[700], fontSize: 12),\n      onSelected: (bool selected) {\n        // 필터 선택 동작\n      },\n      shape: RoundedRectangleBorder(\n        borderRadius: BorderRadius.circular(16),\n      ),\n    );\n  }"
    }
  }
}`}
          />
        </div>
      </div>
    </SlideLayout>
  )
} 