# heymy · 明艺薇 / Evie Ming

[![Live Portfolio](https://img.shields.io/badge/Live-lmzq.yunzhicompany.com-5b7fe6?style=for-the-badge)](https://lmzq.yunzhicompany.com/)
[![Bilingual](https://img.shields.io/badge/Language-中文%20%7C%20English-8b7de8?style=for-the-badge)](https://lmzq.yunzhicompany.com/)
[![Responsive](https://img.shields.io/badge/UI-Responsive-62a7a2?style=for-the-badge)](https://lmzq.yunzhicompany.com/)

这是 **明艺薇（Evie Ming / EV0331）** 的个人主页、个人作品集与项目入口。网站记录我在 **AI 应用开发、教育科技、前端与全栈开发、产品设计、UI/UX、视觉设计和金融科技** 方向的学习与实践。

This is the personal website and portfolio of **Evie Ming (明艺薇 / EV0331)**, documenting work across **AI application development, education technology, frontend and full-stack engineering, product design, UI/UX, visual design, and fintech**.

**在线访问 / Live website:** [https://lmzq.yunzhicompany.com/](https://lmzq.yunzhicompany.com/)

## 关于我 / About

你好，我是明艺薇，目前就读于中国人民大学金融学专业。我是一名 AI 应用独立开发者，也是 Adobe Certified Professional。我喜欢把一个还不完整的想法，从产品定义、用户体验和视觉设计开始，推进到前端、后端、部署以及真实可用的线上产品。

我持续关注 AI 如何进入真实的学习、内容和协作场景，尤其关心教育科技、人机交互、上下文组织、提示词设计、模型与 MCP 接入，以及产品从原型走向稳定体验的过程。

Hi, I’m Evie Ming, a Finance student at Renmin University of China, an independent AI application developer, and an Adobe Certified Professional. I enjoy taking early ideas through product definition, interface design, engineering, deployment, and the many small decisions that turn a prototype into something people can actually use.

My current interests include AI for education, human–computer interaction, context design, prompt and workflow design, model and MCP integration, frontend systems, and the intersection of finance, technology, and product thinking.

## 代表项目 / Selected work

| 项目 | 简介 | 链接 |
| --- | --- | --- |
| 小云智 / Xiao Yunzhi | 结合错题记忆与学习工作流的 AI 学习伙伴，探索更适合学生的回答与使用体验。 | [访问](https://www.yunzhicompany.com/) |
| WordWiki | 将查词、复习和个人单词表整合到同一学习流程中的词汇产品。 | [访问](https://word.yunzhicompany.com/) |
| 在场 / Zaichang | 围绕校园动态、互助和学习资源构建的校园社区产品。 | [访问](https://hks.yunzhicompany.com/) |
| 过来人 / Guolairen | 知乎黑客松项目，让不同人生阶段的真实经历成为可参考的经验。 | [访问](https://zhihu.yunzhicompany.com/) |

## 网站内容 / What is inside

- 中英文界面切换 / Chinese–English interface
- 明暗主题与平滑过渡 / Light and dark themes
- 桌面端与移动端响应式布局 / Responsive desktop and mobile layouts
- 关于、技能、服务、证书、作品与联系方式 / About, skills, services, certificates, projects, and contact
- UI 与体验设计、前端开发、品牌与视觉三个独立服务页面
- 点击爱心动效与 SQLite 持久化互动计数
- Open Graph、Twitter Card、Schema.org JSON-LD、`robots.txt`、`sitemap.xml` 与 `llms.txt`

## 技术与方向 / Stack and topics

`HTML5` · `CSS3` · `JavaScript` · `Python` · `SQLite` · `Responsive Web Design` · `Frontend Development` · `UI/UX` · `Product Design` · `AI Applications` · `Education Technology` · `MCP` · `Prompt Design` · `Workflow Orchestration`

## 本地运行 / Run locally

主页和点赞接口由同一个轻量 Python 服务提供，不需要安装第三方依赖。

```bash
git clone https://github.com/mingyiwei954-bit/heymy.git
cd heymy
python3 .server/server.py --root . --port 8768
```

打开 [http://127.0.0.1:8768/](http://127.0.0.1:8768/)。如果只需要查看静态页面，也可以使用任意静态文件服务器；点赞 API 需要运行 `.server/server.py`。

运行时数据保存在 `.server/data/likes.sqlite3`，该目录已被 Git 忽略，不会上传到仓库。

## 搜索与机器可读信息 / Search and machine-readable metadata

网站在页面、仓库和爬虫入口中使用一致的姓名与项目描述：

- Canonical URL: [https://lmzq.yunzhicompany.com/](https://lmzq.yunzhicompany.com/)
- Search crawler policy: [`robots.txt`](robots.txt)
- Sitemap: [`sitemap.xml`](sitemap.xml)
- AI-readable project context: [`llms.txt`](llms.txt)
- Structured data: Schema.org `Person`, `WebSite`, and `ProfilePage`

这些信息用于帮助搜索引擎和能够读取公开网页的 AI 系统准确理解作者身份、专业方向与项目关系，不包含隐藏提示或关键词堆砌。

## 来源与许可说明 / Credits and licensing

主页的早期结构参考了 [Modern Portfolio Website Template](https://github.com/mrinmoy-hex/Modern-Portfolio-Website-Template)。三个服务子页面包含基于 AnimFolio HTML 的改造内容，相关来源与 GPL-2.0 许可见 [`services/README.md`](services/README.md) 和 [`services/LICENSE`](services/LICENSE)。

个人照片、证书、个人资料与项目素材属于其各自权利人。仓库中没有单独声明为开放许可的内容，不应被视为自动授予再分发个人素材的权利。

## 联系 / Contact

- Website: [lmzq.yunzhicompany.com](https://lmzq.yunzhicompany.com/)
- GitHub: [@mingyiwei954-bit](https://github.com/mingyiwei954-bit)
- Email: [mingyiwei954@gmail.com](mailto:mingyiwei954@gmail.com)
