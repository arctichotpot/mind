// 节点数据差不多是这样,可以递归下去
// data 是一个数组,用来展示列表数据
export const data = [
    {
        title: "测试节点数组",
        create_at: "2022-10-27",
        update_at: "2022-10-27",
        root: {
            text: "根节点",
            color: "#fff",
            background: "#333",
            tags: ["根节点", "tag1"],
            expand: false,
            children: [
                {
                    text: "一级节点1",
                    color: "#fff",
                    background: "#333",
                    expand: false,
                    tags: ["一级节点1", "tag1"],
                    children: [
                        {
                            text: "二级节点1",
                            color: "#fff",
                            background: "#333",
                            tags: ["二级节点1", "tag1"],
                            expand: false,
                            children: []
                        },
                        {
                            text: "二级节点1",
                            color: "#fff",
                            background: "#333",
                            tags: ["二级节点1", "tag1"],
                            expand: false,
                            children: [
                                {
                                    text: "三级节点1",
                                    color: "#fff",
                                    background: "#333",
                                    tags: ["三级节点1", "tag1"],
                                    expand: false,
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    text: "一级节点2",
                    color: "#fff",
                    background: "#333",
                    tags: ["一级节点2", "tag1"],
                    expand: false,
                    children: []
                },
                {
                    text: "一级节点3",
                    color: "#fff",
                    background: "#333",
                    tags: ["一级节点3", "tag1"],
                    expand: false,
                    children: []
                }
            ]
        }
    },
    {
        title: "测试节点数组2",
        create_at: "2022-10-27",
        update_at: "2022-10-27",
        root: {
            text: "根节点",
            color: "#fff",
            background: "#333",
            tags: ["根节点", "tag1"],
            children: [
                {
                    text: "一级节点1",
                    color: "#fff",
                    background: "#333",
                    tags: ["一级节点1", "tag1"],
                    children: [
                        {
                            text: "二级节点1",
                            color: "#fff",
                            background: "#333",
                            tags: ["二级节点1", "tag1"],
                        },
                        {
                            text: "二级节点1",
                            color: "#fff",
                            background: "#333",
                            tags: ["二级节点1", "tag1"],
                            children: [
                                {
                                    text: "三级节点1",
                                    color: "#fff",
                                    background: "#333",
                                    tags: ["三级节点1", "tag1"],
                                }
                            ]
                        }
                    ]
                },
                {
                    text: "一级节点2",
                    color: "#fff",
                    background: "#333",
                    tags: ["一级节点2", "tag1"],
                },
                {
                    text: "一级节点3",
                    color: "#fff",
                    background: "#333",
                    tags: ["一级节点3", "tag1"],
                }
            ]
        }
    }
]