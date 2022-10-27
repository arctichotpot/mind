// Mind的基本数据类型

interface MindList {
    title: string // 名称
    create_at: string // 创建日期
    update: string // 更新日期
    root: MindNode[] // 根节点
}

interface MindNode {
    text: string  // 节点文字
    color: string // 字体颜色
    background: string // 节点背景颜色
    tags: string[] // 标签
    expand:boolean // 是否展开
    children?: MindNode[] // 子集
}



