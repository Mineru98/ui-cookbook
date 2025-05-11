export default function ConclusionSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#268052] to-[#1a5c39]">
      <h1 className="text-4xl font-bold mb-8 text-white">결론</h1>
      
      <div className="max-w-2xl text-center text-white">
        <p className="text-xl mb-6">
          UI 컴포넌트와 상호작용 방식에 대한 이해는 효과적인 디자인과 개발의 핵심입니다.
        </p>
        
        <ul className="text-left space-y-4 mb-8">
          <li className="flex items-start">
            <div className="mr-3 text-xl">✓</div>
            <div>
              <strong className="text-white/90">일관된 용어 사용</strong>
              <p className="text-white/80 text-base">
                팀 전체가 동일한 UI 용어를 사용하면 소통과 협업이 원활해집니다.
              </p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="mr-3 text-xl">✓</div>
            <div>
              <strong className="text-white/90">사용자 경험 중심 설계</strong>
              <p className="text-white/80 text-base">
                적절한 UI 요소 선택은 직관적이고 사용하기 쉬운 인터페이스로 이어집니다.
              </p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="mr-3 text-xl">✓</div>
            <div>
              <strong className="text-white/90">접근성 고려</strong>
              <p className="text-white/80 text-base">
                다양한 상호작용 방식을 지원하여 모든 사용자가 접근할 수 있는 UI를 구축하세요.
              </p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="mr-3 text-xl">✓</div>
            <div>
              <strong className="text-white/90">재사용 가능한 컴포넌트 설계</strong>
              <p className="text-white/80 text-base">
                잘 설계된 컴포넌트 시스템은 개발 효율성과 디자인 일관성을 높입니다.
              </p>
            </div>
          </li>
        </ul>
        
        <div className="mt-8 bg-white/10 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">다음 단계</h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="bg-white/20 p-4 rounded-md flex-1">
              <h4 className="font-medium mb-2">UI 디자인 시스템 구축</h4>
              <p className="text-sm">조직 전체에서 사용할 수 있는 일관된 컴포넌트 라이브러리 개발</p>
            </div>
            <div className="bg-white/20 p-4 rounded-md flex-1">
              <h4 className="font-medium mb-2">사용성 테스트 진행</h4>
              <p className="text-sm">실제 사용자를 대상으로 UI 컴포넌트와 상호작용 테스트</p>
            </div>
            <div className="bg-white/20 p-4 rounded-md flex-1">
              <h4 className="font-medium mb-2">최신 UI 트렌드 학습</h4>
              <p className="text-sm">지속적인 학습을 통해 UI 디자인 역량 향상</p>
            </div>
          </div>
        </div>
        
        <p className="text-xl mt-8 font-light">
          감사합니다
        </p>
      </div>
    </div>
  )
} 