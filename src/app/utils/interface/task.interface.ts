import { Type } from '@angular/core';

/** 二级菜单结构 */
export interface TaskChidlrenMenu {
  /** 每个题目的编号 */
  id: string;
  /** 题目组件 */
  question: Type<unknown>;
  /** 答案组件 */
  answer?: Type<unknown>;
  /** 题目的标题, 用于左侧菜单栏 */
  title: string;
  /** 是否带有解析 */
  analyse?: boolean;
}

/** 一级菜单结构 */
export interface TaskMenu {
  /** 一级菜单标题 */
  title: string;
  /** 子菜单 */
  children: TaskChidlrenMenu[];
}

export interface Menu1 {

}