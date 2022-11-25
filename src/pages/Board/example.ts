// 节点数据差不多是这样,可以递归下去
// data 是一个数组,用来展示列表数据
//1. 后期将会分为 card ,content ,image ,todo ,几种类型

//2. 其中只有card 类型会有children属性

// 根据不同的type去渲染不同的类型文件

// 


export const data = [
    {
        title: "测试节点数组",
        create_at: "2022-10-27",
        update_at: "2022-10-27",
        id: '',
        root: [
            {
                type: "card",
                title: '二级节点1',
                location: "",
                id: '1',
                content: "",
                color: "#fff",
                background: "#333",
                tags: ["二级节点1", "tag1"],
                children: []
            },
            {
                type: "card",
                location: "",
                title: '一级节点1',
                id: '2',
                color: "#fff",
                background: "#333",
                tags: ["一级节点1", "tag1"],
                children: [
                    {
                        type: "card",
                        title: '二级节点1',
                        location: "",
                        id: '',
                        color: "#fff",
                        background: "#333",
                        tags: ["二级节点1", "tag1"],
                        children: [
                            {
                                type: "text",
                                content: "三级节点1",
                                location: "",
                                title: '',
                                id: '',
                                color: "#fff",
                                background: "#333",
                                tags: ["三级节点1", "tag1"],
                            }
                        ]
                    }
                ]
            },
            {
                type: "text",
                content: "一级节点2",
                location: "",
                id: '3',
                color: "#333",
                background: "#333",
                tags: ["一级节点2", "tag1"],

            },
            // {
            //     type: "todo",
            //     id: '',
            //     title: '',
            //     content: "一级节点3",
            //     color: "#fff",
            //     background: "#333",
            //     tags: ["一级节点3", "tag1"],

            //     children: []
            // },
            // {
            //     type: "image",
            //     id: '',
            //     title: '',
            //     content: "一级节点3",
            //     color: "#fff",
            //     background: "#333",
            //     tags: ["一级节点3", "tag1"],

            //     children: []
            // }
        ]
    },
    {
        title: "测试节点数组2",
        create_at: "2022-10-27",
        id: '',
        update_at: "2022-10-27",
        root: [
            {
                type: "",
                id: '',
                content: "一级节点1",
                color: "#fff",
                background: "#333",
                tags: ["一级节点1", "tag1"],
                children: [
                    {
                        type: "",
                        content: "二级节点1",
                        id: '',
                        color: "#fff",
                        background: "#333",
                        tags: ["二级节点1", "tag1"],
                    },
                    {
                        type: "",
                        content: "二级节点1",
                        id: '',
                        color: "#fff",
                        background: "#333",
                        tags: ["二级节点1", "tag1"],
                        children: [
                            {
                                type: "",
                                id: '',
                                content: "三级节点1",
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
                content: "一级节点2",
                id: '',
                color: "#fff",
                background: "#333",
                tags: ["一级节点2", "tag1"],
            },
            {
                type: "",
                content: "一级节点3",
                id: '',
                color: "#fff",
                background: "#333",
                tags: ["一级节点3", "tag1"],
            }
        ]
    }
]
