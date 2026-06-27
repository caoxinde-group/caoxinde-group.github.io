const TEACHING_DATA = [
  {
    id: 'caoxinde',
    name: '曹心德',
    role: '教授',
    courseGroups: [
      {
        type: '主讲',
        courses: [
          '土壤污染控制及修复工程',
          '环境化学原理',
          '高等环境化学'
        ]
      }
    ]
  },
  {
    id: 'qiuhao',
    name: '仇浩',
    role: '教授',
    courseGroups: [
      {
        type: '主讲',
        courses: ['土壤地下水污染修复']
      }
    ]
  },
  {
    id: 'zhaoling',
    name: '赵玲',
    role: '研究员',
    courseGroups: [
      {
        type: '主讲',
        courses: ['环境土壤学']
      },
      {
        type: '参讲',
        courses: [
          '土壤-地下水污染修复工程',
          '环境与可持续发展',
          '环境学导论',
          '环境工程大实验'
        ]
      }
    ]
  },
  {
    id: 'xuxiaoyun',
    name: '续晓云',
    role: '研究员',
    courseGroups: [
      {
        type: '主讲',
        courses: ['高等环境化学']
      }
    ]
  }
];

function renderTeachingList(container) {
  if (!container || typeof TEACHING_DATA === 'undefined') return;

  container.innerHTML = TEACHING_DATA.map(faculty => {
    const coursesHtml = faculty.courseGroups.map(group => `
      <div class="teaching-course-group">
        <span class="teaching-type">${group.type}</span>
        <ul class="teaching-course-list">
          ${group.courses.map(course => `<li>${course}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    return `
      <article class="teaching-card">
        <header class="teaching-card-header">
          <a href="person.html?id=${faculty.id}" class="teaching-name">${faculty.name}</a>
          <span class="teaching-role">${faculty.role}</span>
        </header>
        <div class="teaching-card-body">
          ${coursesHtml}
        </div>
      </article>
    `;
  }).join('');
}
