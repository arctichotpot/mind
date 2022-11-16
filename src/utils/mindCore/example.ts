// 节点数据差不多是这样,可以递归下去
// data 是一个数组,用来展示列表数据
export const data = [
    {
        title: "测试节点数组",
        create_at: "2022-10-27",
        update_at: "2022-10-27",
        root: [
            {
                type: "",
                text: "二级节点1",
                color: "#fff",
                background: "#333",
                tags: ["二级节点1", "tag1"],
                children: []
            },
            {
                type: "",
                text: "一级节点1",
                color: "#fff",
                background: "#333",
                tags: ["一级节点1", "tag1"],
                children: [
                    {
                        type: "",
                        text: "二级节点1",
                        color: "#fff",
                        background: "#333",
                        tags: ["二级节点1", "tag1"],
                        children: [
                            {
                                type: "",
                                text: "三级节点1",
                                color: "#fff",
                                background: "#333",
                                tags: ["三级节点1", "tag1"],
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                type: "",
                text: "一级节点2",
                color: "#fff",
                background: "#333",
                tags: ["一级节点2", "tag1"],

                children: []
            },
            {
                type: "",
                text: "一级节点3",
                color: "#fff",
                background: "#333",
                tags: ["一级节点3", "tag1"],

                children: []
            }
        ]
    },
    {
        title: "测试节点数组2",
        create_at: "2022-10-27",
        update_at: "2022-10-27",
        root: [
            {
                type: "",
                text: "一级节点1",
                color: "#fff",
                background: "#333",
                tags: ["一级节点1", "tag1"],
                children: [
                    {
                        type: "",
                        text: "二级节点1",
                        color: "#fff",
                        background: "#333",
                        tags: ["二级节点1", "tag1"],
                    },
                    {
                        type: "",
                        text: "二级节点1",
                        color: "#fff",
                        background: "#333",
                        tags: ["二级节点1", "tag1"],
                        children: [
                            {
                                type: "",
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
                type: "",
                text: "一级节点2",
                color: "#fff",
                background: "#333",
                tags: ["一级节点2", "tag1"],
            },
            {
                type: "",
                text: "一级节点3",
                color: "#fff",
                background: "#333",
                tags: ["一级节点3", "tag1"],
            }
        ]
    }
]
