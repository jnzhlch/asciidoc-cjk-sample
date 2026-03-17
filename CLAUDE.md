# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Maven-based AsciiDoc documentation generation project that produces HTML5 and PDF outputs with full Chinese (CJK) language support. It uses AsciidoctorJ for document conversion and includes custom CJK themes for proper Chinese typography.

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
- **Source documents**: `src/main/docs/asciidoc/` - Contains AsciiDoc source files
- **Modules pattern**: Each document has a main `.adoc` file that includes chapter modules from a `modules/` subdirectory
- **Resources**: `src/main/resources/` - Contains fonts and PDF themes
- **Reference materials**: `asciidoc-cjk/` - Contains project templates and reference documentation

### Build System (Maven)
- **Plugin**: Asciidoctor Maven Plugin 3.2.0
- **Dependencies**: AsciidoctorJ 3.0.1, AsciidoctorJ PDF 2.3.9
- **Executions**: Each document requires two Maven executions (HTML + PDF) configured in `pom.xml`

### Key Configuration Files
- [pom.xml](pom.xml) - Maven build configuration with Asciidoctor plugin executions
- [src/main/resources/themes/cjk-theme.yml](src/main/resources/themes/cjk-theme.yml) - PDF theme for Chinese typography
- [src/main/docs/asciidoc/UserManual/UserManual.adoc](src/main/docs/asciidoc/UserManual/UserManual.adoc) - Main document entry point

### Reference Materials (`asciidoc-cjk/`)
The `asciidoc-cjk/` directory contains reusable reference materials:
- `assets/project-template/` - Complete Maven project template for new AsciiDoc projects
- `references/asciidoc-basics.md` - AsciiDoc syntax quick reference
- `references/cjk-configuration.md` - CJK font and theme configuration guide
- `references/maven-setup.md` - Maven AsciidoctorJ plugin configuration patterns
- `SKILL.md` - Skill definition for AsciiDoc CJK documentation tasks

### Adding New Documents

To add a new document (e.g., "NewDoc"):

1. Create directory structure:
   ```
   src/main/docs/asciidoc/NewDoc/
   ├── NewDoc.adoc
   ├── modules/
   └── images/
   ```

2. Add two `<execution>` blocks to [pom.xml](pom.xml) (one for HTML, one for PDF). Follow the existing `generate-UserManual-html` and `generate-UserManual-pdf` patterns, updating:
   - `<id>`: `generate-NewDoc-html` / `generate-NewDoc-pdf`
   - `<sourceDirectory>`: Path to new document directory
   - `<outputDirectory>`: Path for generated output

### Chinese Typography

PDF generation uses a custom CJK theme with:
- **Primary font**: Noto Serif CJK VF (Variable Font) - `NotoSerifSC-VF.ttf`
- **Fallback fonts**: Microsoft YaHei family (`msyh.ttc`, `msyhbd.ttc`, `msyhl.ttc`)
- **Localized labels**: 目录 (TOC), 图 (Figure), 表 (Table), 章 (Chapter), 附录 (Appendix)
- **Font paths**: `src/main/resources/fonts/`

Missing fonts will appear as boxes in PDF output. Font files must be placed in the fonts directory.

### Language Configuration
- Documents use `:lang: zh-CN` attribute for proper Chinese hyphenation and localization
- Document encoding is UTF-8 (configured in `pom.xml`)

### Syntax Highlighting
- **HTML**: Uses `highlight.js` (browser-based)
- **PDF**: Uses `rouge` (built-in)

## Notes

- No testing framework is configured (this is a pure documentation generation project)
- No linting/formatting tools configured
- PDF generation is significantly slower than HTML - use HTML for iterative development
