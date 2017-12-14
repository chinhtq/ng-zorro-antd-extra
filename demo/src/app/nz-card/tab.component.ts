import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'demo-nz-card-tab',
  template: `
    <h4>tab <a href="https://github.com/cipchk/ng-zorro-antd-extra/blob/master/demo/src/app/nz-card/tab.component.ts" target="_blank">source</a></h4>
    <nz-card [nzTitle]="'Card title'" style="margin-bottom: 16px">
        <ng-template #extra>
            <a (click)="msg.success('more')">More</a>
        </ng-template>
        <nz-card-tab [nzTabHeading]="'tab1'">
            tab1 content
        </nz-card-tab>
        <nz-card-tab [nzTabHeading]="'tab2'">
            tab2 content
        </nz-card-tab>
    </nz-card>
    <nz-card [nzTabSelectedIndex]="1">
        <nz-card-tab *ngFor="let tab of tabs" [nzTabHeading]="nzTabHeading">
            <ng-template #nzTabHeading>
                {{tab.name}}
                <i class="anticon anticon-cross" (click)="msg.info('closed: ' + tab.name)"></i>
            </ng-template>
            tab1 content
        </nz-card-tab>
    </nz-card>
`
})
export class DemoNzCardTabComponent {
    tabs = [
        {
          name: 'Tab 1'
        },
        {
          name: 'Tab 2'
        }
    ];
    constructor(public msg: NzMessageService) {}

    closeTab(tab: any) {
        console.log(tab);
    }
}
