
/**
 * 枚举 {Enum}
 * 一个枚举中只会存在固定的几个值中，不会出现其他的值
 */
export {}
// enum postStatus {
//   Draft = 0,
//   Unpublished = 1,
//   Published = 2
// }


// 如果不指定枚举值，则默认0开始索引
// 以下默认 0 1 2
// enum postStatus {
//   Draft ,
//   Unpublished,
//   Published
// }


//如果指定第一个值的，后面的值不指定的话，则会根据第一个值进行累加
// 以下值为 6 7 8
// enum postStatus {
//   Draft = 6,
//   Unpublished,
//   Published
// }

// 也可指定字符串
// enum postStatus {
//   Draft = 'aaa',
//   Unpublished = 'bbb',
//   Published = 'ccc'
// }
enum postStatus {
  Draft,
  Unpublished ,
  Published
}
const post = {
  title: 'hello',
  content: 'typescript is a typed',
  status: postStatus.Published // 1 // 0
}

// 枚举类型会入侵到运行时代码，会影响编译后结果，大部分代码会被移除，而枚举类型不会，它最终会编译为双向的健值对对象
// 在代码中可以用索引器访问名称
postStatus[0] // => Draft
// 如果不需要这样访问，我们可以定义常量枚举类型。 用法：在枚举前面加const
const enum sex {
  man = '男',
  woman = '女'
}

const getSex = {
  sex: sex.man
}

