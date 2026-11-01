type UpcomingStory = {
  id: string;
  category: string;
  english: string;
  title: string;
  description: string;
  visual: string;
};

const upcomingStories: UpcomingStory[] = [
  {
    id: "01",
    category: "근대거리",
    english: "HISTORY & STREETS",
    title: "시간을 품은 군산의 골목",
    description: "직접 걸으며 발견한 오래된 거리의 표정을 담아낼 예정입니다.",
    visual: "streets",
  },
  {
    id: "02",
    category: "바다·섬",
    english: "SEA & ISLAND",
    title: "바다가 가까워지는 하루",
    description: "군산의 바다와 섬을 직접 둘러본 이야기를 준비합니다.",
    visual: "sea",
  },
  {
    id: "03",
    category: "맛집",
    english: "FOOD JOURNAL",
    title: "한 끼에도 이유가 있는 여행",
    description: "직접 먹어보고 장점과 아쉬운 점까지 솔직히 기록하겠습니다.",
    visual: "food",
  },
  {
    id: "04",
    category: "자연·트레킹",
    english: "WALK & NATURE",
    title: "발로 찾아내는 새로운 길",
    description: "직접 걷고 확인한 산책길과 트레킹 코스를 소개할 예정입니다.",
    visual: "trail",
  },
];

export default function EditorialStories() {
  return (
    <section className="stories" id="field-stories" aria-labelledby="stories-title">
      <div className="stories__inner">
        <div className="stories__heading">
          <div className="stories__heading-copy">
            <p className="section-overline">EDITOR&apos;S PICK</p>
            <h2 id="stories-title">직접 다녀온 군산 이야기</h2>
            <p className="stories__subheading">
              발로 뛰고, 보고, 먹으며 기록할 군산의 진짜 여행 이야기입니다.
            </p>
          </div>
          <span className="stories__all" aria-label="전체 보기 기능은 콘텐츠 발행 후 제공 예정">
            전체 보기 <span aria-hidden="true">↗</span>
            <span className="stories__all-note">콘텐츠 공개 후 연결</span>
          </span>
        </div>

        <div className="stories__grid">
          {upcomingStories.map((story) => (
            <article className="stories-card" key={story.id}>
              <div className={`stories-card__art stories-card__art--${story.visual}`}>
                <span className="stories-card__art-issue" aria-hidden="true">
                  FIELD NOTES / {story.id}
                </span>
                <span className="stories-card__art-word" aria-hidden="true">
                  {story.english}
                </span>
                <span className="stories-card__art-note">이미지 준비 중</span>
              </div>
              <div className="stories-card__body">
                <span className="stories-card__category">{story.category}</span>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <div className="stories-card__status">
                  <span className="stories-card__status-dot" aria-hidden="true" />
                  현장 취재 후 공개
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="stories__footnote">
          지금 보이는 카드는 편집 구성을 확인하기 위한 자리입니다.
          실제 방문·촬영·검증을 마친 콘텐츠부터 사진과 기록으로 교체합니다.
        </p>
      </div>
    </section>
  );
}
