import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'dateToString'
})
export class DateToStringPipe implements PipeTransform 
{
    transform(value: Date): string
    {
        return value.toISOString().substring(0, 10);
    }
}