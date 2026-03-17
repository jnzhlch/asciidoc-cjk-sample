# 字体文件目录

## 说明

此目录用于存放PDF生成所需的中文字体文件。

## 所需字体

根据 `cjk-theme.yml` 配置，需要以下字体文件：

### Noto Serif CJK SC（思源宋体）
- `NotoSerifCJKsc-Regular.ttf` - 常规
- `NotoSerifCJKsc-Bold.ttf` - 粗体

### Noto Sans CJK SC（思源黑体）
- `NotoSansCJKsc-Regular.ttf` - 常规
- `NotoSansCJKsc-Bold.ttf` - 粗体

### Roboto Mono（代码字体）
- `RobotoMono-Regular.ttf` - 常规
- `RobotoMono-Bold.ttf` - 粗体
- `RobotoMono-Italic.ttf` - 斜体
- `RobotoMono-BoldItalic.ttf` - 粗斜体

## 字体下载

### 思源字体（Noto CJK）
- 官方下载：https://github.com/googlefonts/noto-cjk/releases
- 选择 `Sans` 和 `Serif` 的 OTF 或 TTF 格式
- 下载简体中文（SC）版本

### Roboto Mono
- 官方下载：https://fonts.google.com/specimen/Roboto+Mono
- 下载 TTF 格式

## 安装说明

1. 下载所需的字体文件
2. 将字体文件复制到此目录
3. 确保文件名与 `cjk-theme.yml` 中的配置一致
4. 运行 Maven 构建命令生成文档

## 注意事项

- 字体文件较大，建议添加到 `.gitignore`（如果不想提交到版本控制）
- 确保字体文件的许可证允许在项目中使用
- 思源字体采用 SIL Open Font License，可以自由使用

## 替代方案

如果无法下载思源字体，可以使用系统自带的中文字体：

### Windows
- 微软雅黑：`msyh.ttc` 或 `msyhbd.ttc`
- 宋体：`simsun.ttc`

### macOS
- 苹方：`PingFang.ttc`
- 华文黑体：`STHeiti Light.ttc`

### Linux
- 文泉驿微米黑：`wqy-microhei.ttc`
- 文泉驿正黑：`wqy-zenhei.ttc`

修改 `cjk-theme.yml` 中的字体配置以使用这些字体。
