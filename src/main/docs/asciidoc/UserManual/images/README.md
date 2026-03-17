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
