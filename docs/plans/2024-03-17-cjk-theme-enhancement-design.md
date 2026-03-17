# CJK 主题增强设计文档

**日期**: 2024-03-17
**状态**: 已批准
**方案**: 方案 A - 增强型主题

---

## 概述

增强 AsciiDoc CJK 项目的 PDF 主题，添加封面设计、美化页眉页脚、优化章节标题和代码块样式、统一配色方案，并支持按章节管理多图片。

---

## 设计目标

1. **封面设计** - 添加背景图、Logo 和装饰元素
2. **页眉页脚美化** - 优化页眉显示，简化页脚为仅显示页码
3. **章节标题样式** - 使用主题蓝色，添加装饰线条
4. **代码块样式** - 深色主题背景，添加行号
5. **统一配色方案** - 使用 `#1a5490` 作为主题色
6. **图片管理** - 按章节组织图片目录

---

## 详细设计

### 1. 封面设计

**文件结构**:
```
images/
├── cover-bg.png      # 封面背景图（用户提供）
├── logo.png          # Logo（用户提供）
└── cover-decoration.png  # 装饰元素（可选）
```

**主题配置** (`cjk-theme.yml`):
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

### 2. 页眉页脚美化

**页眉配置**:
```yaml
header:
  height: 40
  border_color: e0e0e0
  border_width: 0.5
  font_family: MicrosoftYaHei
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

**页脚配置**（仅页码）:
```yaml
footer:
  height: 35
  border_color: 1a5490
  border_width: 1
  font_family: MicrosoftYaHei
  recto:
    center:
      content: '{page-number}'
  verso:
    center:
      content: '{page-number}'
```

### 3. 章节标题样式

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
```

### 4. 代码块样式

```yaml
code:
  font_family: CodeFont
  font_size: 10
  font_color: f8f8f2
  background_color: 2d2d2d
  padding: 12
  line_height: 1.25
  border_radius: 6
  border_width: 0
```

### 5. 配色方案

| 元素 | 颜色 | 用途 |
|------|------|------|
| 主题色 | `#1a5490` | 标题、链接、边框 |
| 辅助色 | `#5c8cbc` | 装饰线条、强调 |
| 正文 | `#333333` | 正文文本 |
| 代码背景 | `#2d2d2d` | 代码块 |
| 代码文本 | `#f8f8f2` | 代码文本 |
| 表头背景 | `#f0f4f8` | 表头 |
| 边框线 | `#e0e0e0` | 分隔线 |

### 6. 图片管理结构

```
images/
├── cover-bg.png           # 封面背景
├── logo.png               # Logo
├── chapter01/             # 第1章图片
│   ├── diagram-01.png
│   └── screenshot-01.png
└── chapter02/             # 第2章图片
    ├── flowchart.png
    └── example.png
```

**使用示例**:

chapter01.adoc:
```asciidoc
== 第一章 系统概述

=== 系统架构
image::chapter01/diagram-01.png[系统架构图,600]

=== 界面展示
image::chapter01/screenshot-01.png[主界面截图]
```

---

## 需要修改的文件

| 文件 | 操作 |
|------|------|
| `src/main/resources/themes/cjk-theme.yml` | 修改 - 增强主题配置 |
| `src/main/docs/asciidoc/UserManual/UserManual.adoc` | 修改 - 更新属性 |
| `src/main/docs/asciidoc/UserManual/modules/chapter01.adoc` | 修改 - 添加图片示例 |
| `src/main/docs/asciidoc/UserManual/images/` | 新增 - 图片目录和文件 |

---

## 实现步骤

1. 增强 `cjk-theme.yml` 配置
2. 创建图片目录结构
3. 更新章节模块添加图片示例
4. 用户添加封面和 Logo 图片
5. 测试 PDF 生成效果

---

## 备注

- 封面背景图和 Logo 需要用户提供
- 图片规格建议：A4 比例 (210mm × 297mm)，300dpi
- Logo 建议：高度 80-120px，PNG 透明背景
