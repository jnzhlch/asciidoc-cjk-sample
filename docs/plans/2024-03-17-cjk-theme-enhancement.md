# CJK 主题增强实现计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 增强 AsciiDoc CJK 项目的 PDF 主题，添加封面设计、美化页眉页脚、优化章节标题和代码块样式、统一配色方案，并支持按章节管理多图片。

**Architecture:** 修改现有 `cjk-theme.yml` 配置文件，增强封面、页眉页脚、章节标题、代码块样式，使用统一的 `#1a5490` 主题色，创建按章节组织的图片目录结构。

**Tech Stack:** AsciidoctorJ PDF, YAML 主题配置, AsciiDoc 语法, Maven

---

## Task 1: 增强封面设计配置

**Files:**
- Modify: `src/main/resources/themes/cjk-theme.yml:79-97`

**Step 1: 修改 title_page 配置**

替换现有的 `title_page` 部分为以下配置：

```yaml
title_page:
  align: center
  background_image: image:cover-bg.png[]
  logo:
    image: images/logo.png
    top: 8%
    width: 100px
  title:
    top: 40%
    font_size: 32
    font_color: 1a5490
    line_height: 0.9
  subtitle:
    font_size: 18
    font_style: bold_italic
    line_height: 1
  authors:
    margin_top: 13
    font_size: 13
    font_color: 181818
  revision:
    margin_top: 13
```

**Step 2: 验证 YAML 语法**

确保缩进正确，YAML 格式有效。

**Step 3: 提交更改**

```bash
git add src/main/resources/themes/cjk-theme.yml
git commit -m "feat: enhance title page design with logo and background image support"
```

---

## Task 2: 美化页眉配置

**Files:**
- Modify: `src/main/resources/themes/cjk-theme.yml:106-117`

**Step 1: 修改 header 配置**

替换现有的 `header` 部分为以下配置：

```yaml
header:
  font_size: 9
  font_family: MicrosoftYaHei
  line_height: 1
  height: 40
  vertical_align: middle
  border_color: e0e0e0
  border_width: 0.5
  recto:
    left:
      content: '{document-title}'
    right:
      content: '{chapter-title}'
  verso:
    left:
      content: '{document-title}'
    right:
      content: '{chapter-title}'
```

**Step 2: 验证 YAML 语法**

确保缩进正确，YAML 格式有效。

**Step 3: 提交更改**

```bash
git add src/main/resources/themes/cjk-theme.yml
git commit -m "feat: enhance header with document title and chapter name"
```

---

## Task 3: 简化页脚配置（仅显示页码）

**Files:**
- Modify: `src/main/resources/themes/cjk-theme.yml:119-133`

**Step 1: 修改 footer 配置**

替换现有的 `footer` 部分为以下配置：

```yaml
footer:
  font_size: 9
  font_family: MicrosoftYaHei
  border_color: 1a5490
  border_width: 1
  height: 35
  line_height: 1
  padding: [6, 1, 0, 1]
  vertical_align: top
  recto:
    center:
      content: '{page-number}'
  verso:
    center:
      content: '{page-number}'
```

**Step 2: 验证 YAML 语法**

确保缩进正确，YAML 格式有效。

**Step 3: 提交更改**

```bash
git add src/main/resources/themes/cjk-theme.yml
git commit -m "feat: simplify footer to show only centered page number"
```

---

## Task 4: 更新章节标题样式

**Files:**
- Modify: `src/main/resources/themes/cjk-theme.yml:58-77`

**Step 1: 修改 heading 配置**

替换现有的 `heading` 部分为以下配置：

```yaml
heading:
  align: left
  font_color: 1a5490
  font_family: MicrosoftYaHei
  font_style: bold
  h1_font_size: 28
  h2_font_size: 24
  h3_font_size: 20
  h4_font_size: 16
  h5_font_size: 13
  h6_font_size: 11
  line_height: 1.2
  margin_top: 5
  margin_bottom: 10
  part:
    font_size: 27
    font_color: 181818
  chapter:
    font_size: 27
    font_color: 181818
```

**Step 2: 验证 YAML 语法**

确保缩进正确，YAML 格式有效。

**Step 3: 提交更改**

```bash
git add src/main/resources/themes/cjk-theme.yml
git commit -m "feat: update heading styles with theme color and improved sizes"
```

---

## Task 5: 更新代码块样式（深色主题）

**Files:**
- Modify: `src/main/resources/themes/cjk-theme.yml:135-143`

**Step 1: 修改 code 配置**

替换现有的 `code` 部分为以下配置：

```yaml
code:
  font_family: CodeFont
  font_size: 10
  font_color: f8f8f2
  padding: 12
  line_height: 1.25
  background_color: 2d2d2d
  border_radius: 6
  border_width: 0
```

**Step 2: 验证 YAML 语法**

确保缩进正确，YAML 格式有效。

**Step 3: 提交更改**

```bash
git add src/main/resources/themes/cjk-theme.yml
git commit -m "feat: apply dark theme to code blocks with improved styling"
```

---

## Task 6: 更新链接配色

**Files:**
- Modify: `src/main/resources/themes/cjk-theme.yml:99-100`

**Step 1: 修改 link 配置**

替换现有的 `link` 部分为以下配置：

```yaml
link:
  font_color: 1a5490
```

**Step 2: 验证 YAML 语法**

确保缩进正确，YAML 格式有效。

**Step 3: 提交更改**

```bash
git add src/main/resources/themes/cjk-theme.yml
git commit -m "feat: apply theme color to links"
```

---

## Task 7: 更新表格样式配色

**Files:**
- Modify: `src/main/resources/themes/cjk-theme.yml:151-162`

**Step 1: 修改 table 配置**

替换现有的 `table` 部分为以下配置：

```yaml
table:
  background_color: ffffff
  head_background_color: f0f4f8
  head_font_color: 1a5490
  head_font_style: bold
  head_font_family: MicrosoftYaHei
  body_background_color: ffffff
  body_stripe_background_color: fafafa
  foot_background_color: f0f4f8
  border_color: e0e0e0
  border_width: 0.5
  cell_padding: [3, 3, 6, 3]
```

**Step 2: 验证 YAML 语法**

确保缩进正确，YAML 格式有效。

**Step 3: 提交更改**

```bash
git add src/main/resources/themes/cjk-theme.yml
git commit -m "feat: update table styling with theme colors"
```

---

## Task 8: 更新边框线配色

**Files:**
- Modify: `src/main/resources/themes/cjk-theme.yml:164-169`

**Step 1: 修改 thematic_break 配置**

替换现有的 `thematic_break` 部分为以下配置：

```yaml
thematic_break:
  border_color: e0e0e0
  border_style: solid
  border_width: 0.5
  margin_top: 6
  margin_bottom: 18
```

**Step 2: 验证 YAML 语法**

确保缩进正确，YAML 格式有效。

**Step 3: 提交更改**

```bash
git add src/main/resources/themes/cjk-theme.yml
git commit -m "feat: update thematic break border color"
```

---

## Task 9: 更新基础边框颜色

**Files:**
- Modify: `src/main/resources/themes/cjk-theme.yml:37-50`

**Step 1: 修改 base 配置中的 border_color**

找到 `border_color: eeeeee` 并替换为：

```yaml
border_color: e0e0e0
```

**Step 2: 验证 YAML 语法**

确保缩进正确，YAML 格式有效。

**Step 3: 提交更改**

```bash
git add src/main/resources/themes/cjk-theme.yml
git commit -m "feat: update base border color"
```

---

## Task 10: 创建按章节组织的图片目录结构

**Files:**
- Create: `src/main/docs/asciidoc/UserManual/images/chapter01/.gitkeep`
- Create: `src/main/docs/asciidoc/UserManual/images/chapter02/.gitkeep`

**Step 1: 创建 chapter01 图片目录**

```bash
mkdir -p src/main/docs/asciidoc/UserManual/images/chapter01
touch src/main/docs/asciidoc/UserManual/images/chapter01/.gitkeep
```

**Step 2: 创建 chapter02 图片目录**

```bash
mkdir -p src/main/docs/asciidoc/UserManual/images/chapter02
touch src/main/docs/asciidoc/UserManual/images/chapter02/.gitkeep
```

**Step 3: 提交更改**

```bash
git add src/main/docs/asciidoc/UserManual/images/
git commit -m "feat: create chapter-based image directory structure"
```

---

## Task 11: 更新 chapter01.adoc 添加图片示例

**Files:**
- Modify: `src/main/docs/asciidoc/UserManual/modules/chapter01.adoc`

**Step 1: 在 chapter01.adoc 中添加图片示例**

在文件末尾添加以下内容：

```asciidoc
=== 界面展示

image::chapter01/screenshot-01.png[主界面截图,600]

=== 操作流程

image::chapter01/diagram-01.png[操作流程图,600]
```

**Step 2: 验证 AsciiDoc 语法**

确保图片引用语法正确。

**Step 3: 提交更改**

```bash
git add src/main/docs/asciidoc/UserManual/modules/chapter01.adoc
git commit -m "feat: add image examples to chapter01"
```

---

## Task 12: 更新 chapter02.adoc 添加图片示例

**Files:**
- Modify: `src/main/docs/asciidoc/UserManual/modules/chapter02.adoc`

**Step 1: 在 chapter02.adoc 中添加图片示例**

在文件末尾添加以下内容：

```asciidoc
=== 安装流程

image::chapter02/flowchart.png[安装流程图,600]

=== 配置示例

image::chapter02/example.png[配置示例,600]
```

**Step 2: 验证 AsciiDoc 语法**

确保图片引用语法正确。

**Step 3: 提交更改**

```bash
git add src/main/docs/asciidoc/UserManual/modules/chapter02.adoc
git commit -m "feat: add image examples to chapter02"
```

---

## Task 13: 更新主文档的 imagesdir 属性

**Files:**
- Modify: `src/main/docs/asciidoc/UserManual/UserManual.adoc:17`

**Step 1: 确认 imagesdir 属性**

确保 `UserManual.adoc` 中有以下属性：

```asciidoc
:imagesdir: images
```

**Step 2: 验证属性正确**

确保图片路径可以正确解析。

**Step 3: 如果需要，提交更改**

```bash
git add src/main/docs/asciidoc/UserManual/UserManual.adoc
git commit -m "feat: ensure imagesdir attribute is set correctly"
```

---

## Task 14: 添加占位符图片说明

**Files:**
- Create: `src/main/docs/asciidoc/UserManual/images/README.md`

**Step 1: 创建图片目录 README**

创建以下内容的 README 文件：

```markdown
# 图片文件目录

## 封面图片（用户提供）

- `cover-bg.png` - 封面背景图，建议规格：A4 (210mm × 297mm), 300dpi
- `logo.png` - Logo 图片，建议高度：80-120px，PNG 透明背景

## 章节图片

### chapter01/
- `screenshot-01.png` - 主界面截图
- `diagram-01.png` - 操作流程图

### chapter02/
- `flowchart.png` - 安装流程图
- `example.png` - 配置示例

## 添加新图片

将图片文件放到对应的章节目录中，然后在 AsciiDoc 中使用：

```asciidoc
image::chapterXX/filename.png[图片描述,宽度]
```
```

**Step 2: 提交更改**

```bash
git add src/main/docs/asciidoc/UserManual/images/README.md
git commit -m "docs: add image directory README with usage instructions"
```

---

## Task 15: 测试 PDF 生成

**Files:**
- Test: Generate PDF output

**Step 1: 生成 HTML 预览（快速测试）**

```bash
cd D:/AIspace/asdoc
mvn asciidoctor:process-asciidoc@generate-UserManual-html
```

Expected: BUILD SUCCESS, HTML file generated

**Step 2: 生成完整 PDF**

```bash
mvn asciidoctor:process-asciidoc@generate-UserManual-pdf
```

Expected: BUILD SUCCESS, PDF file generated at `target/generated-docs/UserManual/pdf/UserManual.pdf`

**Step 3: 检查生成的 PDF**

打开 `target/generated-docs/UserManual/pdf/UserManual.pdf`，验证：
- 封面显示（即使没有背景图和 Logo 也应正常显示文字）
- 页眉显示文档标题和章节名
- 页脚居中显示页码
- 章节标题使用蓝色
- 代码块使用深色背景
- 图片引用正确（可能显示占位符）

**Step 4: 提交测试结果备注**

```bash
# 如果测试通过，添加备注
git commit --allow-empty -m "test: PDF generation tested successfully"
```

---

## Task 16: 合并到 master 分支

**Files:**
- Git branch operations

**Step 1: 切换到 master 分支**

```bash
git checkout master
```

**Step 2: 合并 develop 分支**

```bash
git merge develop
```

Expected: Fast-forward merge, no conflicts

**Step 3: 推送到 GitHub**

```bash
git push origin master
```

**Step 4: 推送 develop 分支**

```bash
git checkout develop
git push origin develop
```

---

## 附录：用户后续操作

以下操作需要用户在实现完成后手动执行：

### 1. 添加封面图片

用户需要准备以下图片文件并放置到 `images/` 目录：
- `cover-bg.png` - 封面背景图
- `logo.png` - Logo 图片

### 2. 添加章节图片

根据文档内容，用户需要添加实际的章节图片到对应目录：
- `images/chapter01/screenshot-01.png`
- `images/chapter01/diagram-01.png`
- `images/chapter02/flowchart.png`
- `images/chapter02/example.png`

### 3. 重新生成 PDF

添加图片后，重新运行：

```bash
mvn clean generate-resources
```
