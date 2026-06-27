const DIRECTION_LABELS = ['一', '二', '三', '四'];

const RESEARCH_DIRECTIONS = [
  {
    title: '土壤地下水环境过程与归趋模拟',
    subs: [
      '土壤地下水多介质界面传输与跨介质归趋模拟',
      '重金属及有机污染物在地下水中的生物地球化学过程与演化机制'
    ]
  },
  {
    title: '功能材料研发与固碳协同增效',
    subs: [
      '生物炭及绿色友好型环境多功能修复材料的制备、改性及应用',
      '土壤生物炭固碳机制及其生态环境协同效应',
      '多源固废的低碳协同处理处置与土壤改良技术'
    ]
  },
  {
    title: '污染修复技术、风险评估与智慧管控',
    subs: [
      '土壤-地下水污染修复技术（含有机污染）研发与工程应用',
      '土壤地下水污染风险评估、动态管控与智能决策体系'
    ]
  },
  {
    title: '新污染物与金属纳米颗粒的生态毒理及全球格局',
    subs: [
      '微纳米塑料、稀土等新污染物的环境行为、人体健康效应及全球空间分布地理格局',
      '金属元素及其纳米颗粒的生态毒理学效应与微观作用机制'
    ]
  }
];

function renderDirectionGroups(container, options = {}) {
  if (!container || typeof RESEARCH_DIRECTIONS === 'undefined') return;
  const { compact = false } = options;
  container.className = compact ? 'directions-grid' : 'directions-groups';

  if (compact) {
    const icons = ['🌱', '💧', '♻️', '🔬'];
    container.innerHTML = RESEARCH_DIRECTIONS.map((group, i) => `
      <a href="directions.html" class="direction-card">
        <div class="direction-icon">${icons[i]}</div>
        <h3>方向${DIRECTION_LABELS[i]}：${group.title}</h3>
      </a>
    `).join('');
    return;
  }

  container.innerHTML = RESEARCH_DIRECTIONS.map((group, i) => `
    <article class="direction-group">
      <header class="direction-group-header">
        <span class="direction-label">方向${DIRECTION_LABELS[i]}</span>
        <h3>${group.title}</h3>
      </header>
      <ul class="direction-sub-list">
        ${group.subs.map(sub => `<li>${sub}</li>`).join('')}
      </ul>
    </article>
  `).join('');
}
