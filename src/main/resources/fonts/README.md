# 字体文件目录

## 说明

此目录用于存放 PDF 生成所需的中文字体文件。

## 已包含字体

以下字体已包含在本项目中，可直接使用：

### Noto Serif SC（思源宋体 Variable Font）
- `NotoSerifSC-VF.ttf` - 可变字体，支持所有字重和样式

### Noto Serif CJK SC
- `NotoSerifCJKsc-VF.ttf` - CJK 版本可变字体

这两个字体由 Google 和 Adobe 开发，采用 SIL Open Font License 1.1，可自由使用和分发。

## 需要自行安装的字体

### Microsoft YaHei（微软雅黑）

根据 `cjk-theme.yml` 配置，还需要微软雅黑字体系列：

- `msyh.ttc` - 微软雅黑常规
- `msyhbd.ttc` - 微软雅黑粗体
- `msyhl.ttc` - 微软雅黑细体

**Windows 系统**: 通常已预装在 `C:\Windows\Fonts\` 目录

**其他系统**: 需要自行下载或使用替代字体

## 字体配置说明

当前 `cjk-theme.yml` 中的字体配置：

```yaml
font:
  catalog:
    NotoSerif:          # 正文主字体（已包含）
      normal: NotoSerifSC-VF.ttf
    MicrosoftYaHei:     # 标题和强调（需安装）
      normal: msyh.ttc
      bold: msyhbd.ttc
    CodeFont:           # 代码字体（需安装）
      normal: msyh.ttc
      bold: msyhbd.ttc
  fallbacks:
    - NotoSerif
    - MicrosoftYaHei
```

## 安装微软雅黑字体

### Windows 用户
字体通常已预装，无需额外安装。如需复制到项目：

```bash
# 从系统字体目录复制
copy C:\Windows\Fonts\msyh*.ttc src\main\resources\fonts\
```

### macOS/Linux 用户
如需使用微软雅黑，可以：
1. 从 Windows 系统复制字体文件
2. 或使用替代字体（见下方）

## 替代方案

如果没有微软雅黑字体，可以修改 `cjk-theme.yml` 使用其他字体：

### macOS 系统字体
```yaml
MicrosoftYaHei:
  normal: PingFang.ttc
```

### Linux 系统字体
```yaml
MicrosoftYaHei:
  normal: wqy-microhei.ttc
```

### 其他开源字体
- **Noto Sans CJK** - 思源黑体，可从 [Google Noto Fonts](https://fonts.google.com/noto) 下载
- **Source Han Sans** - 思源黑体 Adobe 版，可从 [GitHub](https://github.com/adobe-fonts/source-han-sans) 下载

## 字体下载链接

- **Noto CJK 字体**: https://github.com/googlefonts/noto-cjk/releases
- **Google Fonts**: https://fonts.google.com/noto

## 注意事项

- 字体文件较大（本仓库已包含 ~114MB），克隆仓库时需要一些时间
- 确保字体文件的许可证允许在项目中使用
- PDF 生成时如果缺少字体会显示为方框（□）
