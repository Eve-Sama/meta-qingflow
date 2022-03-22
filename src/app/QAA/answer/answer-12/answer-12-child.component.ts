import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'answer-12-child',
  templateUrl: './answer-12-child.component.html',
  styleUrls: ['./answer-12-child.component.scss'],
})
export class Answer12ChildComponent {
  // 使用@Input以表明这个属性是由父组件传递进来的.
  @Input() money: number;
  // 下面代码的意思是, 当父组件并未传递这个参数的时候, 使用的默认值为-1.
  // @Input() money: number = -1;
  // 子组件传递数据给父组件必须通过自定义事件的方式(严格地说还有service的方式, 在后面的例子里会有, 现在只需要了解这种最基础的方式即可).
  @Output() readonly sendMoeny = new EventEmitter<number>();
  

  giveMoeny(): void {
    this.sendMoeny.emit(500);
  }
}
