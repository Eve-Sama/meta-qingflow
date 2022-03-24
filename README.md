## 简介

在2021年, `元数据`火了一把, 在这里我想借用`meta`的概念指代新人. 尽管我们公司研发部门的流动率几乎为0, 但新人依旧是我们业务快速发展的必要保障. 因此, `meta-qingflow`就是为了培养那些即将为轻流业务保驾护航的同学而准备的.

## 背景

当一个新的前端同学入职的时候, 如果没有Angular使用经验, 那么难免要经历从0-1学习Angular的痛苦. 但是深度使用过Angular的人都知道, 虽然Angular大而全, 但是就日常开发而言, 常用的API其实并不多. 很多API需要使用时再查也不是问题. 但根据我们多次观察新人成长过程的结果来看, 最难最难的是从0-0.5的过程. 也就是, 知道那些非常非常常用的API的过程. 当新人打开官网的时候, 大而全的官网不会告诉你哪些是高频使用的, 他只是像一本字典一样任由新人随意地翻着. 同理, 还有哪些UI组件是常用的? 哪些Git命令是常用的? 等等等等.

因此, 本项目立项时便有着很高的抽象度与长远的畅想. 短期目标, 是服务于轻流的前端部门, 长期来看, 在未来希望能够帮到那些使用Angular但同时也在饱受培养新人高成本的那些公司.

## 使用

首先你需要clone本仓库

```bash
git clone git@github.com:Eve-Sama/meta-qingflow.git
```
在使用`NPM`、`Yarn`等工具安装依赖后
```bash
npm start
```
即可将项目跑起来. 之后点击开始挑战即可进入练习.

![][首页]

之后你可以点击左侧菜单栏, 我们将之称为`任务`, 每个任务都会包含四个部分
 - 描述: 给定一些场景, 下发任务内容
 - 预期表现: 也就是标准答案, 在这边你可以感受正确的结果
 - 作答区域: 在这边则是一个预设好的答题卷(一个未完成的组件), 你需要打开这个组件编写代码以完成任务
 - 题解: 有些题目会自带题解, 给你一点线索. 在你有需要的时候可以参考

![][做题]
那么如何找到答案呢? 注意看url的地址, 如`https://eve-sama.github.io/meta-qingflow/task/00`, 结尾是`00`, 那么这个就是题目的id.

你只需要打开VSC搜索文件`question-00`, 即可找到你需要完成的组件, 在这个组件中, 代码的修改都会立刻表现在网页上. 当你完成任务想要与标准答案对比时, 可以搜索`answer-00`, 即可找到`预期表现`中的组件. 

随着不停地过关斩将, 你将了解到非常常用的API. 可以说, 掌握这些题目里面的招式, 足够你应付日常业务. 当你终结最后一题时, 你将如剑入鞘般自信, 可以开始尝试接触正式的轻流业务了.

## 新增题目

如果你想要对本项目的题库进行修改, 你完全不需要了解本项目的架构, **注意, 是完全一丁点都不需要**. 我已经为你编写好了`Schematics`用于快速创建题目. 你只需要执行以下命令即可
```bash
npm run add
```

接下来你只需要根据问答情况输入即可. 之后, Schematics会自动对项目做出代码修改. 
![][npm run add]

需要你重点关注一下`QAA.config.ts`这个文件, 打开这个文件, 你会发现它已经做出了许多的代码变更, 你需要注意和菜单有关的变更. 默认会为你添加到第一个一级菜单当中, 你可以手动将新增内容拷贝至合适的菜单项.
```diff
export const MenuList: TaskMenu[] = [
  {
    title: '一级菜单',
    children: [
+     {
+       id: '19',
+       question: Question19Component,
+       answer: Answer19Component,
+       title: '未命名',
+       analyse: true,
+     },
      {
        id: '00',
        question: Question00Component,
        answer: Answer00Component,
        title: 'ngIf',
        analyse: true,
      },
    ],
  },
];
```

此刻, 新的一道题目就已经全自然设置好了, 并且渲染在了网页上了.

![][添加demo]

接下来你只需要完善题目即可.

 - 想要完善18号任务的描述? 搜索`describe/18.md`
 - 想要完善18号任务的题解? 搜索`analyse/18.md`
 - 想要完善18号任务的预期表现? 搜索`answer-18.component`
 - 想要完善18号任务的答题区域? 搜索`question-18.component`

## The future

因为平时比较忙(比如打英雄联盟、和平精英、QQ飞车等), 不一定有时间开发. 现阶段先只是确保基本题库的正常使用, 更多功能还在开发中. 

- [x] 使用Angular Schematics全自动化自动新增任务
- [ ] 完成所有任务的出题
- [ ] 将知识点再次分层, 分为初级、进阶、高级等多个不同level
- [ ] 文章推荐: 可以推荐各个不同层次的文章, 但是肯定不是简单列出来, 需要思考如何与项目更好地结合
- [ ] 水平测验: 能够通过平台实现答题功能, 新人可以通过答题来检验是否知识点是否掌握牢固
- [ ] 能够接入codesandbox等平台, 实现在线coding(可能意义不大, 还在考虑)

[首页]:https://file.qingflow.com/uploads/file/b49395ce-d31e-42a8-bccc-6f0b774fb106.png
[做题]:https://file.qingflow.com/uploads/file/8373b7e6-4221-48b8-81f3-a4c24e0f4406.png
[描述]:https://file.qingflow.com/uploads/file/d4f5138b-7fae-4dc5-a782-84499bdd34da.png
[npm run add]:https://file.qingflow.com/uploads/file/35d7cb7d-fd8b-406f-ac98-c162da237f3b.png
[添加demo]:https://file.qingflow.com/uploads/file/308df60d-1b08-4cb2-976d-23212495409e.png