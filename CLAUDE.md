# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Maven-based AsciiDoc documentation generation project with full Chinese (CJK) language support. Produces HTML5 and PDF outputs using AsciidoctorJ with custom CJK themes for proper Chinese typography.

**Repository**: https://github.com/jnzhlch/asciidoc-cjk-sample

## Build Commands

```bash
# Generate all documentation (HTML + PDF)
mvn clean generate-resources

# Generate only HTML (faster for development/preview)
mvn asciidoctor:process-asciidoc@generate-UserManual-html

# Generate only PDF
mvn asciidoctor:process-asciidoc@generate-UserManual-pdf

# Skip all documentation generation
mvn clean package -Dasciidoctor.skip=true
```

Output locations:
- HTML: `target/generated-docs/UserManual/html/UserManual.html`
- PDF: `target/generated-docs/UserManual/pdf/UserManual.pdf`

## Architecture

### Document Structure
- **Source documents**: `src/main/docs/asciidoc/` - AsciiDoc source files
- **Modules pattern**: Main `.adoc` file includes chapter modules from `modules/` subdirectory
- **Resources**: `src/main/resources/` - Fonts and PDF themes

### Build System (Maven)
- **Plugin**: Asciidoctor Maven Plugin 3.2.0
- **Dependencies**: AsciidoctorJ 3.0.1, AsciidoctorJ PDF 2.3.9
- **Executions**: Each document requires two Maven executions (HTML + PDF) in `pom.xml`

### Key Configuration Files
- [pom.xml](pom.xml) - Maven build configuration with all Chinese localized labels (章, 图, 表, 附录, etc.)
- [src/main/resources/themes/cjk-theme.yml](src/main/resources/themes/cjk-theme.yml) - PDF theme using `#1a5490` accent color
- [src/main/docs/asciidoc/UserManual/UserManual.adoc](src/main/docs/asciidoc/UserManual/UserManual.adoc) - Main document entry point

### Adding New Documents

To add a new document (e.g., "NewDoc"):

1. Create directory structure:
   ```
   src/main/docs/asciidoc/NewDoc/
   ├── NewDoc.adoc
   ├── modules/
   └── images/
   ```

2. Add two `<execution>` blocks to [pom.xml](pom.xml). Follow `generate-UserManual-html` and `generate-UserManual-pdf` patterns:
   - `<id>`: `generate-NewDoc-html` / `generate-NewDoc-pdf`
   - `<sourceDirectory>`: Path to new document
   - `<outputDirectory>`: Output path

## Font Configuration

### Included Fonts (in repository)
- `NotoSerifSC-VF.ttf` - Noto Serif SC Variable Font (~57MB)
- `NotoSerifCJKsc-VF.ttf` - Noto Serif CJK SC Variable Font (~57MB)

### Required Fonts (user must install)
Microsoft YaHei family for headings and code (excluded via `.gitignore`):
- `msyh.ttc` - Microsoft YaHei Regular
- `msyhbd.ttc` - Microsoft YaHei Bold
- `msyhl.ttc` - Microsoft YaHei Light

**Windows users**: Fonts pre-installed at `C:\Windows\Fonts\`
**Other users**: See `src/main/resources/fonts/README.md` for alternatives

### Chinese Typography Settings
- **Primary font**: Noto Serif SC VF
- **Fallback fonts**: Microsoft YaHei family
- **Font directory**: `src/main/resources/fonts/`

Missing fonts appear as boxes (□) in PDF output.

## Language Configuration
- `:lang: zh-CN` for proper Chinese hyphenation
- UTF-8 encoding (configured in `pom.xml`)

## Syntax Highlighting
- **HTML**: `highlight.js` (browser-based)
- **PDF**: `rouge` (built-in)

## HTML-specific Features
- `docinfo: shared` enabled (supports custom `<head>` content via `docinfo.html`)
- Mermaid diagram support via `:mermaid: true` attribute

## Notes
- No testing framework (pure documentation project)
- No linting/formatting tools
- PDF generation is slower than HTML - use HTML for iteration
