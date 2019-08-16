export class likeCount{
    constructor(public count: number, public isSelected: boolean){
        this.count = count;
        this.isSelected = isSelected;
    }
    onClick(){
        this.count+= (this.isSelected) ? +1 : -1;
        this.isSelected = !this.isSelected;
    }
}