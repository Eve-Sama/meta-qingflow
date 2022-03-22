import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuList } from '@QAA/QAA.config';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TaskChidlrenMenu, TaskMenu } from 'src/app/utils/interface/task.interface';

interface DisplayMenuBasic {
  /** 第几层菜单, 只用于缩进左边距 */
  level: number;
}

interface DisplayChildrenMenu extends TaskChidlrenMenu, DisplayMenuBasic {
  selected: boolean;
}

interface DisplayMenu extends TaskMenu, DisplayMenuBasic {
  open: boolean;
  children: DisplayChildrenMenu[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  private _MenuList = MenuList;

  menuList: DisplayMenu[];

  changePage(id: string): void {
    if (!id) {
      this.nzMessageService.error('这题还没造呢!');
      this._updateMenuStatus();
      return;
    }
    this.router.navigate([`../${id}`], { relativeTo: this.activatedRoute });
  }

  /** 会对菜单数据手动赋值一些侧边栏才用的到的字段信息 */
  private _initMenu(): DisplayMenu[] {
    const newMenuList = this._MenuList.map(v => {
      const children = v.children.map(child => {
        return {
          ...child,
          level: 2,
          selected: false,
        };
      });
      return {
        ...v,
        level: 1,
        open: false,
        children,
      };
    });
    return newMenuList;
  }

  /** 根据 url 自动选中、展开对应的菜单 */
  private _updateMenuStatus(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.menuList.forEach(parentMenu => {
      parentMenu.children.forEach(childMenu => {
        childMenu.selected = childMenu.id === id;
      });
      parentMenu.open = parentMenu.children.some(v => v.selected);
    });
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.menuList = this._initMenu();
    this._updateMenuStatus();
  }
}
