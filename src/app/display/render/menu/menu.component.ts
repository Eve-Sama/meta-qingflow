import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuList } from '@QAA/QAA.config';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TaskChidlrenMenu, TaskMenu } from 'src/app/utils/interface/task.interface';

interface DisplayMenuBasic {
  /** 第几层菜单, 只用于缩进左边距 */
  level: number;
}

interface DisplayChildrenMenu extends TaskChidlrenMenu, DisplayMenuBasic {}

interface DisplayMenu extends TaskMenu, DisplayMenuBasic {
  children: DisplayChildrenMenu[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit {
  private _MenuList = MenuList;

  menuList: DisplayMenu[];

  changePage(id: string): void {
    if (!id) {
      this.nzMessageService.error('这题还没造呢!');
      return;
    }
    this.router.navigate([`../${id}`], { relativeTo: this.activatedRoute });
  }

  /** 会对菜单数据手动赋值一些侧边栏才用的到的字段信息 */
  private _initMenu(menuList: TaskMenu[]): DisplayMenu[] {
    const newMenuList = menuList.map(v => {
      const children = v.children.map(child => {
        return {
          ...child,
          level: 2,
        };
      });
      return {
        ...v,
        level: 1,
        children,
      };
    });
    return newMenuList;
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private nzMessageService: NzMessageService
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.menuList = this._initMenu(this._MenuList);
  }
}
