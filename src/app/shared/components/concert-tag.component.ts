import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'concert-tag',
    templateUrl: './concert-tag.component.html',
    styleUrls: ['./concert-tag.component.scss']
})
export class ConcertTag implements OnChanges
{
    @Input() text: string = "";


    tagText: string = "";

    ngOnChanges(): void
    {
        this.tagText = "#" + this.text;
    }

    onClick(): void 
    {
        alert("Clicked concert tag: " + this.text);
    }
}
