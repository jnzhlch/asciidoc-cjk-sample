const fs = require('fs');
const { mermaid } = require('mermaid-cli');

const mermaidCode = `flowchart TD
    UI[表示层]
    UI --> WEB[Web界面]
    UI --> MOBILE[移动端]

    BIZ[业务逻辑层]
    WEB --> BIZ
    MOBILE --> BIZ
    BIZ --> SERVICE[业务服务]
    BIZ --> WORKFLOW[工作流引擎]

    DAO[数据访问层]
    SERVICE --> DAO
    DAO --> API[数据访问接口]

    DATA[数据层]
    API --> DATA
    DATA --> DB[(数据库)]
`;

// This would require mermaid-cli to be installed
// Alternative: Use online service or create the image manually
console.log('To generate Mermaid image, use:');
console.log('1. Online: https://mermaid.live/');
console.log('2. CLI: npm install -g @mermaid-js/mermaid-cli');
console.log('   mmdc -i input.mmd -o output.png');
