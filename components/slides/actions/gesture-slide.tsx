"use client"

import SlideLayout from "../slide-layout"
import { useState, useRef, useEffect } from "react"
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, Maximize2, Minimize2, RotateCw } from "lucide-react"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function GestureSlide() {
  return (
    <SlideLayout title="Gesture (제스처)">
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
            제스처(Gesture)는 터치스크린이나 트랙패드에서 손가락 움직임을 통해 인터페이스와 상호작용하는 방식입니다.
            일반적으로 탭, 스와이프, 핀치, 스프레드, 더블탭, 롱 프레스 등이 포함됩니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GestureDemo 
            title="탭 (Tap)"
            description="화면을 빠르게 터치했다 떼는 동작"
            instruction="박스를 탭해보세요"
            gesture="tap"
          />
          <GestureDemo 
            title="더블 탭 (Double Tap)"
            description="같은 위치를 연속해서 두 번 탭하는 동작"
            instruction="박스를 더블 탭해보세요"
            gesture="doubletap"
          />
          <GestureDemo 
            title="롱 프레스 (Long Press)"
            description="화면을 길게 누르고 있는 동작"
            instruction="박스를 길게 누르세요"
            gesture="longpress"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GestureDemo 
            title="스와이프 (Swipe)"
            description="화면을 특정 방향으로 밀어내는 동작"
            instruction="박스를 옆으로 스와이프하세요"
            gesture="swipe"
          />
          <GestureDemo 
            title="핀치 & 스프레드 (Pinch/Spread)"
            description="두 손가락을 모으거나 벌리는 동작"
            instruction="두 손가락으로 확대/축소해보세요"
            gesture="pinch"
          />
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Flutter에서의 제스처 구현</h3>
          <PrismCode
            language="dart"
            code={`// 기본 탭 제스처
GestureDetector(
  onTap: () {
    print('탭 감지됨!');
  },
  child: Container(
    width: 100,
    height: 100,
    color: Colors.blue,
    child: Center(
      child: Text(
        '탭',
        style: TextStyle(color: Colors.white),
      ),
    ),
  ),
),

// 더블 탭 제스처
GestureDetector(
  onDoubleTap: () {
    print('더블 탭 감지됨!');
  },
  child: Container(
    width: 100,
    height: 100,
    color: Colors.green,
    child: Center(
      child: Text(
        '더블 탭',
        style: TextStyle(color: Colors.white),
      ),
    ),
  ),
),

// 롱 프레스 제스처
GestureDetector(
  onLongPress: () {
    print('롱 프레스 감지됨!');
  },
  child: Container(
    width: 100,
    height: 100,
    color: Colors.orange,
    child: Center(
      child: Text(
        '길게 누르기',
        style: TextStyle(color: Colors.white),
      ),
    ),
  ),
),

// 스와이프 제스처
GestureDetector(
  onHorizontalDragEnd: (DragEndDetails details) {
    // 속도로 방향 감지
    if (details.primaryVelocity! > 0) {
      print('오른쪽으로 스와이프!');
    } else if (details.primaryVelocity! < 0) {
      print('왼쪽으로 스와이프!');
    }
  },
  child: Container(
    width: 200,
    height: 100,
    color: Colors.purple,
    child: Center(
      child: Text(
        '스와이프',
        style: TextStyle(color: Colors.white),
      ),
    ),
  ),
),

// 스케일 제스처 (핀치/스프레드)
class ScaleExample extends StatefulWidget {
  @override
  _ScaleExampleState createState() => _ScaleExampleState();
}

class _ScaleExampleState extends State<ScaleExample> {
  double _scale = 1.0;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onScaleUpdate: (ScaleUpdateDetails details) {
        setState(() {
          _scale = details.scale.clamp(0.5, 2.0);
        });
      },
      onScaleEnd: (ScaleEndDetails details) {
        setState(() {
          // 점진적으로 원래 크기로 돌아가기 (선택사항)
          // _scale = 1.0;
        });
      },
      child: Transform.scale(
        scale: _scale,
        child: Container(
          width: 150,
          height: 150,
          color: Colors.red,
          child: Center(
            child: Text(
              '핀치/스프레드',
              style: TextStyle(color: Colors.white),
            ),
          ),
        ),
      ),
    );
  }
}

// 회전 제스처
class RotationExample extends StatefulWidget {
  @override
  _RotationExampleState createState() => _RotationExampleState();
}

class _RotationExampleState extends State<RotationExample> {
  double _rotation = 0.0;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onPanUpdate: (DragUpdateDetails details) {
        final RenderBox renderBox = context.findRenderObject() as RenderBox;
        final center = renderBox.size.center(Offset.zero);
        final position = renderBox.globalToLocal(details.globalPosition);
        final double angle = (position - center).direction;
        
        setState(() {
          _rotation = angle;
        });
      },
      child: Transform.rotate(
        angle: _rotation,
        child: Container(
          width: 100,
          height: 100,
          color: Colors.amber,
          child: Center(
            child: Text(
              '회전',
              style: TextStyle(color: Colors.black),
            ),
          ),
        ),
      ),
    );
  }
}
`}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">일반적인 제스처 유형</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>탭(Tap):</strong> 클릭과 동일, 요소 선택</li>
              <li><strong>더블 탭(Double Tap):</strong> 확대/축소, 특별 기능 활성화</li>
              <li><strong>롱 프레스(Long Press):</strong> 컨텍스트 메뉴, 추가 옵션 표시</li>
              <li><strong>스와이프(Swipe):</strong> 페이지 전환, 목록 스크롤</li>
              <li><strong>핀치(Pinch)/스프레드(Spread):</strong> 확대/축소</li>
              <li><strong>회전(Rotate):</strong> 이미지나 요소 회전</li>
              <li><strong>멀티 터치:</strong> 여러 손가락을 사용한 복합 동작</li>
            </ul>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">구현 고려사항</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>다양한 기기에서 일관된 인식률 보장</li>
              <li>접근성 고려 (대체 상호작용 방식 제공)</li>
              <li>시각적 피드백으로 제스처 인식 표시</li>
              <li>제스처 간의 충돌 방지 (예: 스와이프와 스크롤)</li>
              <li>성능 최적화 (이벤트 스로틀링, 디바운싱)</li>
              <li>사용자 교육 및 온보딩 고려</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

interface GestureDemoProps {
  title: string
  description: string
  instruction: string
  gesture: "tap" | "doubletap" | "longpress" | "swipe" | "pinch"
}

function GestureDemo({ title, description, instruction, gesture }: GestureDemoProps) {
  const [action, setAction] = useState("")
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const initialTouchRef = useRef<{ x: number, y: number } | null>(null)
  const lastTapTimeRef = useRef(0)

  // 탭 처리
  const handleTap = () => {
    if (gesture === "tap") {
      setAction("탭 감지됨!")
      setTimeout(() => setAction(""), 800)
    } else if (gesture === "doubletap") {
      const now = Date.now()
      const timeSinceLastTap = now - lastTapTimeRef.current
      
      if (timeSinceLastTap < 300) {
        setAction("더블 탭 감지됨!")
        setTimeout(() => setAction(""), 800)
      }
      
      lastTapTimeRef.current = now
    }
  }

  // 롱 프레스 처리
  const handleTouchStart = () => {
    if (gesture === "longpress") {
      initialTouchRef.current = { x: 0, y: 0 }
      
      timerRef.current = setTimeout(() => {
        setAction("롱 프레스 감지됨!")
        setTimeout(() => setAction(""), 800)
      }, 500)
    } else if (gesture === "swipe") {
      initialTouchRef.current = { x: 0, y: 0 }
    }
  }
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (timerRef.current && gesture === "longpress") {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    
    if (gesture === "swipe" && initialTouchRef.current) {
      const touch = e.touches[0]
      const deltaX = touch.clientX - initialTouchRef.current.x
      
      if (Math.abs(deltaX) > 50) {
        const direction = deltaX > 0 ? "오른쪽" : "왼쪽"
        setAction(`${direction}으로 스와이프!`)
        setPosition({ x: deltaX / 5, y: 0 })
        setTimeout(() => {
          setAction("")
          setPosition({ x: 0, y: 0 })
        }, 800)
        initialTouchRef.current = null
      }
    }
    
    if (gesture === "pinch" && e.touches.length === 2) {
      e.preventDefault()
      const touch1 = e.touches[0]
      const touch2 = e.touches[1]
      
      const distance = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      )
      
      setScale(Math.min(Math.max(0.5, distance / 100), 2))
      setAction("핀치/스프레드 중...")
    }
  }
  
  const handleTouchEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    
    if (gesture === "pinch") {
      setScale(1)
      setAction("")
    }
    
    initialTouchRef.current = null
  }
  
  const resetDemo = () => {
    setAction("")
    setScale(1)
    setRotation(0)
    setPosition({ x: 0, y: 0 })
  }
  
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])
  
  const renderGestureIcon = () => {
    switch (gesture) {
      case "tap":
        return <div className="w-8 h-8 bg-[#268052]/20 rounded-full flex items-center justify-center"><ArrowDownIcon className="w-5 h-5 text-[#268052]" /></div>
      case "doubletap":
        return (
          <div className="flex">
            <div className="w-8 h-8 bg-[#268052]/20 rounded-full flex items-center justify-center"><ArrowDownIcon className="w-5 h-5 text-[#268052]" /></div>
            <div className="w-8 h-8 bg-[#268052]/20 rounded-full flex items-center justify-center ml-1"><ArrowDownIcon className="w-5 h-5 text-[#268052]" /></div>
          </div>
        )
      case "longpress":
        return <div className="w-8 h-8 bg-[#268052]/20 rounded-full flex items-center justify-center border-2 border-[#268052]"></div>
      case "swipe":
        return (
          <div className="flex">
            <ArrowLeftIcon className="w-5 h-5 text-[#268052] mr-1" />
            <ArrowRightIcon className="w-5 h-5 text-[#268052]" />
          </div>
        )
      case "pinch":
        return (
          <div className="flex">
            <Minimize2 className="w-5 h-5 text-[#268052] mr-1" />
            <Maximize2 className="w-5 h-5 text-[#268052]" />
          </div>
        )
      default:
        return null
    }
  }
  
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white h-full">
      <div className="bg-slate-50 p-3 border-b">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{title}</h3>
          {renderGestureIcon()}
        </div>
        <p className="text-xs text-gray-600 mt-1">{description}</p>
      </div>
      
      <div
        className="p-4 flex flex-col items-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`
            w-32 h-32 bg-[#268052]/10 border-2 border-[#268052] rounded-lg 
            flex items-center justify-center cursor-pointer transition-all
            ${action ? 'bg-[#268052]/20' : ''}
          `}
          style={{
            transform: `
              scale(${scale}) 
              rotate(${rotation}deg)
              translateX(${position.x}px)
              translateY(${position.y}px)
            `,
          }}
          onClick={handleTap}
        >
          {action ? (
            <div className="font-medium text-[#268052] text-center text-sm">{action}</div>
          ) : (
            <div className="text-xs text-gray-600 text-center px-2">{instruction}</div>
          )}
        </div>
        
        <button
          className="mt-4 text-xs text-gray-500 hover:text-gray-700"
          onClick={resetDemo}
        >
          초기화
        </button>
      </div>
    </div>
  )
} 