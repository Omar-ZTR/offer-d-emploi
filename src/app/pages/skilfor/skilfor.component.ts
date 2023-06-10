import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skilfor',
  templateUrl: './skilfor.component.html',
  styleUrls: ['./skilfor.component.css']
})
export class SkilforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    
    // Select the file input and use create() to turn it into a pond
    // in this example we pass properties along with the create method
    // we could have also put these on the file input element itself
    create(
      document.querySelector('input'),
      {
        labelIdle: `Drag & Drop your picture or <span class="filepond--label-action">Browse</span>`,
        imagePreviewHeight: 170,
        imageCropAspectRatio: '1:1',
        imageResizeTargetWidth: 200,
        imageResizeTargetHeight: 200,
        stylePanelLayout: 'compact circle',
        styleLoadIndicatorPosition: 'center bottom',
        styleButtonRemoveItemPosition: 'center bottom'
      }
    );
  }

}
function create(arg0: HTMLInputElement | null, arg1: { labelIdle: string; imagePreviewHeight: number; imageCropAspectRatio: string; imageResizeTargetWidth: number; imageResizeTargetHeight: number; stylePanelLayout: string; styleLoadIndicatorPosition: string; styleButtonRemoveItemPosition: string; }) {
  throw new Error('Function not implemented.');
}

