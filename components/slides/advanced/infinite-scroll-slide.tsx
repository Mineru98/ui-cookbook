"use client"

import SlideLayout from "../slide-layout"
import { useState, useEffect, useRef } from "react"
import { Loader2 } from "lucide-react"
import { PrismCode } from "@/components/ui/prism/PrismCode"

interface Post {
  id: number
  title: string
  content: string
  author: string
  date: string
  likes: number
  comments: number
}

export default function InfiniteScrollSlide() {
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const loaderRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // 더미 포스트 생성 헬퍼 함수
  const generatePosts = (pageNumber: number, limit: number) => {
    const startId = (pageNumber - 1) * limit + 1
    const endId = startId + limit - 1
    const result: Post[] = []
    
    for (let id = startId; id <= endId; id++) {
      const post: Post = {
        id,
        title: `인피니트 스크롤에 대한 포스트 #${id}`,
        content: `이것은 인피니트 스크롤 예시를 위한 더미 콘텐츠입니다. 이 포스트는 ID ${id}를 가지고 있습니다. 실제로는 API에서 데이터를 가져오게 됩니다.`,
        author: `사용자_${id % 5 + 1}`,
        date: new Date(Date.now() - id * 86400000).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }),
        likes: Math.floor(Math.random() * 100),
        comments: Math.floor(Math.random() * 20)
      }
      result.push(post)
    }
    
    return result
  }
  
  // 페이지 로딩 함수
  const loadMorePosts = () => {
    if (loading || !hasMore) return
    
    setLoading(true)
    
    // API 호출 시뮬레이션
    setTimeout(() => {
      const newPosts = generatePosts(page, 5)
      setPosts(prevPosts => [...prevPosts, ...newPosts])
      setPage(page + 1)
      setLoading(false)
      
      // 최대 30개의 포스트 (6페이지) 까지만 로드
      if (page >= 6) {
        setHasMore(false)
      }
    }, 1000)
  }
  
  // Intersection Observer를 사용하여 무한 스크롤 구현
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMorePosts()
        }
      },
      { threshold: 1.0 }
    )
    
    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }
    
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current)
      }
    }
  }, [loaderRef, loading, hasMore])
  
  // 초기 포스트 로딩
  useEffect(() => {
    loadMorePosts()
  }, [])
  
  return (
    <SlideLayout title="Infinite Scroll (무한 스크롤)">
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
            무한 스크롤은 사용자가 페이지 하단에 도달했을 때 자동으로 추가 콘텐츠를 로드하는 UX 패턴입니다.
            별도의 페이지 이동이나 '더 보기' 버튼 없이 연속적인 콘텐츠 소비 경험을 제공합니다.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">무한 스크롤 예시</h3>
          <p className="text-sm text-gray-600 mb-4">
            아래로 스크롤하면 추가 포스트를 자동으로 로드합니다.
          </p>
          
          <div 
            ref={containerRef}
            className="h-80 border rounded-lg overflow-y-auto bg-white p-4"
            style={{ 
              scrollbarWidth: 'thin',
              scrollbarColor: '#268052 #f1f1f1' 
            }}
          >
            {posts.length > 0 ? (
              <div className="space-y-4">
                {posts.map(post => (
                  <div 
                    key={post.id}
                    className="p-4 border rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <h4 className="font-medium text-lg">{post.title}</h4>
                    <p className="text-gray-600 my-2">{post.content}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <div>작성자: {post.author} • {post.date}</div>
                      <div>좋아요 {post.likes} • 댓글 {post.comments}</div>
                    </div>
                  </div>
                ))}
                
                {/* 로딩 표시기 */}
                <div 
                  ref={loaderRef}
                  className="py-4 flex justify-center items-center"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 text-[#268052] animate-spin" />
                      <span className="text-gray-600">로딩 중...</span>
                    </div>
                  ) : !hasMore ? (
                    <span className="text-gray-500">더 이상 포스트가 없습니다.</span>
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="h-full flex justify-center items-center">
                <Loader2 className="w-6 h-6 text-[#268052] animate-spin" />
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">구현 방식</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Intersection Observer API</strong>
                <p className="text-sm text-gray-600">요소가 뷰포트에 들어왔는지 감지하는 현대적인 방식</p>
              </li>
              <li>
                <strong>스크롤 이벤트</strong>
                <p className="text-sm text-gray-600">스크롤 위치를 추적하는 전통적인 방식 (성능 주의)</p>
              </li>
              <li>
                <strong>가상화(Virtualization)</strong>
                <p className="text-sm text-gray-600">대량의 데이터에서 화면에 보이는 항목만 렌더링</p>
              </li>
              <li>
                <strong>페이지네이션 API 활용</strong>
                <p className="text-sm text-gray-600">서버에서 페이지 또는 커서 기반 데이터 호출</p>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">적용 사례</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>소셜 미디어 피드 (Facebook, Twitter, Instagram 등)</li>
              <li>검색 결과 목록</li>
              <li>제품 카탈로그</li>
              <li>뉴스 피드</li>
              <li>이미지 갤러리</li>
              <li>댓글 섹션</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4 mb-2">장단점</h3>
            <div className="flex gap-4">
              <div className="flex-1">
                <h4 className="font-medium text-[#268052] mb-1">장점</h4>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>연속적인 탐색 경험</li>
                  <li>페이지 전환 없음</li>
                  <li>사용자 참여 증가</li>
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-red-600 mb-1">단점</h4>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>성능 이슈 가능성</li>
                  <li>특정 항목 찾기 어려움</li>
                  <li>접근성 문제 발생 가능</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md">
          <h3 className="text-lg font-medium mb-2 text-[#268052]">구현 시 고려사항</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>로딩 상태 표시기 제공</li>
            <li>에러 처리 및 재시도 메커니즘</li>
            <li>메모리 사용량 관리 (항목 수가 많을 경우)</li>
            <li>디바운싱(debouncing) 또는 스로틀링(throttling) 적용</li>
            <li>초기 로드 시간 최적화</li>
            <li>SEO 및 접근성 고려</li>
            <li>특정 항목으로의 딥 링크(deep linking) 지원</li>
          </ul>
        </div>

        <div className="border rounded-md mt-6 bg-gray-800 p-4 rounded-lg">
          <PrismCode
            language="dart"
            code={`import 'package:flutter/material.dart';

class Post {
  final int id;
  final String title;
  final String content;
  final String author;
  final String date;
  final int likes;
  final int comments;

  Post({
    required this.id,
    required this.title,
    required this.content,
    required this.author,
    required this.date,
    required this.likes,
    required this.comments,
  });
}

class InfiniteScrollExample extends StatefulWidget {
  @override
  _InfiniteScrollExampleState createState() => _InfiniteScrollExampleState();
}

class _InfiniteScrollExampleState extends State<InfiniteScrollExample> {
  final ScrollController _scrollController = ScrollController();
  final List<Post> _posts = [];
  int _page = 1;
  bool _loading = false;
  bool _hasMore = true;
  
  @override
  void initState() {
    super.initState();
    _loadMorePosts();
    
    // 스크롤 리스너 추가
    _scrollController.addListener(() {
      if (_scrollController.position.pixels >= 
          _scrollController.position.maxScrollExtent * 0.8 && 
          !_loading && 
          _hasMore) {
        _loadMorePosts();
      }
    });
  }
  
  // 더미 포스트 생성 함수
  List<Post> _generatePosts(int pageNumber, int limit) {
    final startId = (pageNumber - 1) * limit + 1;
    final endId = startId + limit - 1;
    final result = <Post>[];
    
    for (int id = startId; id <= endId; id++) {
      final post = Post(
        id: id,
        title: '인피니트 스크롤에 대한 포스트 #' + id.toString(),
        content: '이것은 인피니트 스크롤 예시를 위한 더미 콘텐츠입니다. 이 포스트는 ID ' + id.toString() + '를 가지고 있습니다.',
        author: '사용자_' + ((id % 5) + 1).toString(),
        date: DateTime.now().subtract(Duration(days: id)).toString().substring(0, 10),
        likes: (id * 3) % 100,
        comments: (id * 7) % 20,
      );
      result.add(post);
    }
    
    return result;
  }
  
  // 포스트 로딩 함수
  Future<void> _loadMorePosts() async {
    if (_loading || !_hasMore) return;
    
    setState(() {
      _loading = true;
    });
    
    // API 호출 시뮬레이션
    await Future.delayed(Duration(seconds: 1));
    
    final newPosts = _generatePosts(_page, 5);
    
    setState(() {
      _posts.addAll(newPosts);
      _page++;
      _loading = false;
      
      // 최대 30개의 포스트 (6페이지) 까지만 로드
      if (_page > 6) {
        _hasMore = false;
      }
    });
  }
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('인피니트 스크롤 예시')),
      body: _posts.isEmpty
          ? Center(child: CircularProgressIndicator())
          : ListView.builder(
              controller: _scrollController,
              itemCount: _posts.length + 1, // +1은 로딩 표시기 위함
              itemBuilder: (context, index) {
                if (index < _posts.length) {
                  final post = _posts[index];
                  return Card(
                    margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                    child: Padding(
                      padding: EdgeInsets.all(16),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            post.title,
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(height: 8),
                          Text(post.content),
                          SizedBox(height: 12),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                '작성자: ' + post.author + ' • ' + post.date,
                                style: TextStyle(
                                  color: Colors.grey[600],
                                  fontSize: 12,
                                ),
                              ),
                              Text(
                                '좋아요 ' + post.likes.toString() + ' • 댓글 ' + post.comments.toString(),
                                style: TextStyle(
                                  color: Colors.grey[600],
                                  fontSize: 12,
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  );
                } else if (_hasMore) {
                  return Center(
                    child: Padding(
                      padding: EdgeInsets.all(16),
                      child: CircularProgressIndicator(),
                    ),
                  );
                } else {
                  return Center(
                    child: Padding(
                      padding: EdgeInsets.all(16),
                      child: Text('더 이상 포스트가 없습니다'),
                    ),
                  );
                }
              },
            ),
    );
  }
  
  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }
}`}
          />
        </div>
      </div>
    </SlideLayout>
  )
} 